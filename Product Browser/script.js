let container=document.getElementsByClassName("container")[0]

let data=fetch("https://fakestoreapi.com/products").then((d)=>{
  return d.json();
}).then((f_d)=>{
f_d.map((e)=>{
    let{id,title,price,description,image,category}=e;
    container.innerHTML+=` <div class="cards">
            <div class="card">
                <img src="${image}">
                <h3>id:${id} </h3>
                <h3>title:${title} </h3>
                <h3>category:${category} </h3>
                <p>${description} </p>
                <h3>price:${price} </h3>
            </div>
            </div>`
    
})
})
