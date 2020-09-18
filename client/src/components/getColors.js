import { axiosWithAuth } from "./utils/axiosWithAuth"

export const getColors = (setColorList) => {
  axiosWithAuth()
    .get("/api/colors")
    .then(res => {
      console.log("BubblePage getColors response", res.data)
      setColorList(res.data)
    })
    .catch(err => console.log("getColors err:", err))
}

