import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { getColors } from "./getColors";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  // const [colors, updateColors] = useState([])

  // const getColors = () => {
  //   axiosWithAuth()
  //     .get("/api/colors")
  //     .then(res => {
  //       console.log("BubblePage getColors response", res.data)
  //       setColorList(res.data)
  //     })
  //     .catch(err => console.log("getColors err:", err))
  // }

  // useEffect(() => {
  //   getColors()
  // }, []);

  useEffect(() => {
    getColors(setColorList)
  }, []);


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColors={getColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
