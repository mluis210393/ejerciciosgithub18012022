function puntoUno(){
    document.getElementById("container").style.backgroundColor = "red"
}

function puntoDos(){
    document.querySelector("#container").style.backgroundColor = "red";
}

function puntoTres(){
    var x = document.querySelectorAll(".second");
        x[0].style.backgroundColor = "red";
        x[1].style.backgroundColor = "red";
}

function puntoCuatro(){
    var x = document.querySelectorAll(".third");
        x[1].style.backgroundColor = "red";
}

function puntoCinco(){
    let elemento = document.getElementById("container");
    elemento.innerHTML = `<h1>Hello`;
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

function puntoOcho(){
    const para = document.createElement("li");
    para.innerText = "four";

    document.getElementById("funciona").appendChild(para);
}