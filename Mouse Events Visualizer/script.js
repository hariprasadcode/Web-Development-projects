let red=document.getElementsByTagName("button")[0]
let black=document.getElementsByTagName("button")[1]
let white=document.getElementsByTagName("button")[2]
let blue=document.getElementsByTagName("button")[3]
let green=document.getElementsByTagName("button")[4]

let body=document.getElementsByTagName("body")[0]

red.addEventListener("mouseleave",()=>{
body.style.background=("red")
})

black.addEventListener("mouseup",()=>{
  body.style.background=("black")
})

white.addEventListener("click",()=>{
  body.style.background=("white")
})

blue.addEventListener("dblclick",()=>{
  body.style.background=("blue")
})

green.addEventListener("mouseenter",()=>{
body.style.background=("green")
})
