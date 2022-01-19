/*
fetch(URL)
.then(convertir a formato JSON)
.then(instrucciones de lo que se quiere hacer mientras se cumpla la promesa)

.catch(en caso contrario mandar error)

*/



function puntoUnoDos(){
  document.getElementById("container").style.backgroundColor = "red"

  document.querySelector("#container").style.backgroundColor = "red";  

  document.querySelectorAll(".second");


}

function puntoTres(){
  var x;
  x = document.querySelectorAll(".second");
  
      x[0].style.backgroundColor = "blue";
      x[1].style.backgroundColor = "blue";
  }


  function puntoCuatro(){
    var x;
    x = document.querySelectorAll(".third");
    
        x[1].style.backgroundColor = "blue";
    }
  

      function puntoCinco(){
    
        document.getElementById("container").innerHTML = "Hello";
        
        }
      function puntoSeis() {
        let main = document.querySelectorAll("#container");
        for (let i = 0; i < main.length; i++) {
            document.querySelector(".footer").innerHTML = main[i].innerHTML;
        }
    }
    
    function puntoSiete(){
        let main = document.querySelectorAll("#container");
        for(let i=0;i<main.length;i++){
            main[i].remove();
        }
    }
    
    function puntoOchoNueveDiez(){
        const para = document.createElement("li");
        para.innerText = "four";
    
        document.getElementById("funciona").appendChild(para);
    }