let input=document.getElementsByTagName("input")[0]


let one=document.getElementById("one")
let two=document.getElementById("two")
let three=document.getElementById("three")
let four=document.getElementById("four")
let five=document.getElementById("five")
let six=document.getElementById("six")
let seven=document.getElementById("seven")
let eight=document.getElementById("eight")
let nine=document.getElementById("nine")
let zero=document.getElementById("zero")

let add=document.getElementById("add")
let sub=document.getElementById("sub")
let mul=document.getElementById("mul")
let div=document.getElementById("div")
let mod=document.getElementById("mod")
let e=document.getElementById("e")
let dot=document.getElementById("dot")

let ac=document.getElementById("ac")
let del=document.getElementById("del")


zero.addEventListener("click",()=>{
    input.value +=0;
    input.style.fontSize="20px"
})
one.addEventListener("click",()=>{
    input.value +=1;
    input.style.fontSize="20px"
})

two.addEventListener("click",()=>{
    input.value +=2;
    input.style.fontSize="20px"
})
three.addEventListener("click",()=>{
    input.value +=3;
    input.style.fontSize="20px"
})
four.addEventListener("click",()=>{
    input.value +=4;
    input.style.fontSize="20px"
})
five.addEventListener("click",()=>{
    input.value +=5;
    input.style.fontSize="20px"
})
six.addEventListener("click",()=>{
    input.value +=6;
    input.style.fontSize="20px"
})
seven.addEventListener("click",()=>{
    input.value +=7;
    input.style.fontSize="20px"
})
eight.addEventListener("click",()=>{
    input.value +=8;
    input.style.fontSize="20px"
})
nine.addEventListener("click",()=>{
    input.value +=9;
    input.style.fontSize="20px"
})

add.addEventListener("click",()=>{
    input.value +="+";
    input.style.fontSize="20px"
})
sub.addEventListener("click",()=>{
    input.value += "-";
    input.style.fontSize="20px"
})
mul.addEventListener("click",()=>{
    input.value += "*";
    input.style.fontSize="20px"
})
div.addEventListener("click",()=>{
    input.value += "/";
    input.style.fontSize="20px"
})
mod.addEventListener("click",()=>{
    input.value += "%";
    input.style.fontSize="20px"
})


ac.addEventListener("click",()=>{
    input.value ="";
})
del.addEventListener("click",()=>{
    input.value =input.value.toString().slice(0,-1)
})
e.addEventListener("click",()=>{
    try{
    input.value =eval(input.value)
    }
    catch{
        input.value="error"
    }
})
