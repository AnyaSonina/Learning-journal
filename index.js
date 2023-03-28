import {setHamburgerMenu} from "./utils.js"
import {saveImgToLs} from "./utils.js"
import {setInitialStyle} from "./utils.js"
import {showMore} from "./utils.js"


saveImgToLs()
setInitialStyle()
showMore()


const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".home-page_navigation")
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))