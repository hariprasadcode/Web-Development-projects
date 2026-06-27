let container=document.getElementsByClassName("container")[0]

let data=fetch("https://jsonplaceholder.typicode.com/users").then((d)=>{
    return d.json()
}).then((fd)=>{
     fd.map((e)=>{
        let {id,name,username,email,address,phone,website,company}=e

        container.innerHTML+=(` <div class="box">
            <div class="boxs">
                <h2><b>Id : </b>${id}</h2>
                <h2><b>name : </b>${name}</h2>
                <h2><b>Username : </b>${username}</h2>
                <h2><b>emailname : </b>${email}</h2>
                <h2><b>address : </b>${address.city} , ${address.street}</h2>
                <h2><b>contact : </b>${phone}</h2>
                <h2><b>website : </b>${website}</h2>
                <h2><b>company : </b>${company.name}</h2>
            </div> 
            </div>`)
     })
})
