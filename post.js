import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

function settingImg() {

  let srcs = JSON.parse(localStorage.getItem("src"))
  
  let img = document.getElementById("clicked-img")
  
  img.src = srcs[0]
  
}


settingImg()

let returnedImgSrc =""

let blogsImgs = document.getElementsByClassName("blog_img")


let blogsImgArr = [...blogsImgs]

blogsImgArr.map(img => {
  img.setAttribute("data-unique-id", `${uuidv4()}`)
})


document.addEventListener("click", function(e) {
  
  if(e.target.dataset.uniqueId) 
  clickedImg(e.target.dataset.uniqueId)

})

let srcs = []

function clickedImg(img) {
  let filtered = blogsImgArr.filter(item => {
    return item.dataset.uniqueId == img
  })[0]
  returnedImgSrc = filtered.src
  srcs.unshift(returnedImgSrc)
  localStorage.setItem("src", JSON.stringify(srcs))

}


const showMoreBtn = document.getElementById("more")
let children = document.querySelectorAll("#articles .article:nth-child(n+4)")
let childrenArr = [...children]

childrenArr.forEach(child => {
  child.style.display = "none"
  
})

function showMore() {

  showMoreBtn.addEventListener("click", function() {
    childrenArr.forEach(child => {
     if(child.style.display == "none") {
       child.style.display = "block"
       showMoreBtn.innerHTML = "<p>view less</p>"
     } else {
      child.style.display = "none"
      showMoreBtn.innerHTML = "<p>view more</p>"
     }
      
    })
      
  })
    
}

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







