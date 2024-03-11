// let select=document.getElementById("file");
// let paragh=document.getElementById("p");
// let options=document.getElementById("option");

 

    let select = document.getElementById("file");
    let paragh = document.getElementById("p");
    let options = document.querySelectorAll("#option");
    let list= document.querySelector(".hide");
   
    select.onclick= function(){
        list.classList.toggle("hide");
    }


    for(option of options){
        option.onclick=function(){
            paragh.innerHTML= this.querySelector("p").textContent;
        }
    }























    // options.forEach(option => {
    //     option.addEventListener("click", function() {
    //         paragh.innerHTML = this.querySelector("p").textContent;
    //     });
    // });

