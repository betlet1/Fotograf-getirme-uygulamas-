var listele =document.getElementById("album");
var data=fetch("https://jsonplaceholder.typicode.com/photos")
.then(response=>response.json())
.then(veri=>{
    veri.forEach(element => {
        //console.log(element.id);
        if(element.id<=9){
            listele.innerHTML+=`<img src="${element.url}"/>`
        }
    });
});

