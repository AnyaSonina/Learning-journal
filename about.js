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
