import React from "react";
import { prettyDOM, render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { getColors as mockGetColors} from "./getColors";


test("Renders without Errors", () => {
  render(<BubblePage />)
})


// //###2)this should work by doing the actual axios call, no mocking. I think there's an issue with the async or with
// test("Fetches data and renders bubbles ", async () => {
//   const token = "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
//   window.localStorage.setItem('token', token);
//   const { getAllByTestId, container } = render(<BubblePage />)
//   // expect(getAllByTestId("colors")).toHaveLength(11)
//   await waitFor(() => expect(getAllByTestId("colors")).toHaveLength(11))
//   console.log(prettyDOM(container))

// })

jest.mock("./getColors.js");

const colorList = [
  {
    color: 'ALICEBLOO',
    code: {
      hex: '#f0f8ff'
    },
    id: 1
  },
  {
    color: 'limegreen',
    code: {
      hex: '#99ddbc'
    },
    id: 2
  },
  {
    color: 'aqua',
    code: {
      hex: '#00ffff'
    },
    id: 3
  }
]

// ###1) this is how we were taught in TK, but it's failing for unknown reasons.
// test("Fetches data and renders the bubbles", async () => {
//   const token = "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
//   window.localStorage.setItem('token', token);
//   mockGetColors.mockResolvedValue(colorList);
//   //jest docs says to do it this way, except this doesn't work here:
//   // const data = await getColors();
//   // expect(data).toBe(colorList)

//   const { getAllByTestId } = render(<BubblePage />)
//   // expect(mockGetColors).toHaveBeenCalledTimes(2);
//   await waitFor(() => expect(getAllByTestId("colors")).toHaveLength(3))


// ###1) this is how we were taught in TK, but it's failing for unknown reasons.
test("Fetches data and renders the bubbles", async () => {
  const token = "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
  window.localStorage.setItem('token', token);
  mockGetColors.mockResolvedValue(colorList);
  //jest docs says to do it this way, except this doesn't work here:
  // const data = await getColors();
  // expect(data).toBe(colorList)

  const {rerender} = render(<BubblePage  />);

  rerender(<BubblePage />)
  // expect(mockGetColors).toHaveBeenCalledTimes(2);
  expect(await screen.getAllByTestId("bubbles")).toHaveLength(3)

});
