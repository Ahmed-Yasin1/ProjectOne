// let select=document.getElementById("file");
// let paragh=document.getElementById("p");
// let options=document.getElementById("option");

 

    let select = document.getElementById("file");
    let paragh = document.getElementById("p");
    let options = document.querySelectorAll("#option");
    let list= document.querySelector(".hide");
    let rotate=document.querySelector(".rotate");
   
    select.onclick= function(){
        list.classList.toggle("hide");
        rotate.classList.toggle("rotate");
    }


    for(option of options){
        option.onclick=function(){
            paragh.innerHTML= this.querySelector("p").textContent;
            list.classList.toggle("hide");
            rotate.classList.toggle("rotate");
        }
    }























    // options.forEach(option => {
    //     option.addEventListener("click", function() {
    //         paragh.innerHTML = this.querySelector("p").textContent;
    //     });
    // });

