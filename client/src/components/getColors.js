import { axiosWithAuth } from "./utils/axiosWithAuth"

export const getColors = async (setColorList) => {
  return axiosWithAuth()
    .get("/api/colors")
    .then(res => {
      console.log("BubblePage getColors response", res.data)
      return(res)
    })
    .catch(err => console.log("getColors err:", err))
}

