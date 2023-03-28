import {setHamburgerMenu, saveImgToLs, setInitialStyle, showMore} from "./utils.js"


function settingImg() {
  let srcs = JSON.parse(localStorage.getItem("src"))
  let img = document.getElementById("clicked-img")
  img.src = srcs[0]
}


settingImg()
saveImgToLs()
setInitialStyle()
showMore()
setHamburgerMenu()





