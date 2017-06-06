document.getElementById("A").style.display = 'none';


function mifuncion(obj) {

    if (document.getElementById("titulo").innerHTML == "esconder") {
        document.getElementById("titulo").innerHTML = "aparecer"
        document.getElementById("A").style.display = 'none';
    } else {
        document.getElementById("titulo").innerHTML = "esconder"
        document.getElementById("A").style.display = 'block';
    }
}

function reply_click() {
    alert(A.id);
}
reply_click()

var imagen = document.createElement("img");
imagen.src = "img/meme.jpg";

var node = document.createElement("p"); // Create a <p> node
node.appendChild(imagen);

document.getElementById("A").appendChild(node);

function printDOM(node, prefix) {
    console.log(prefix + node.nodeName)
    for (let i = 0; i < node.childNodes.length; i++) {
        printDOM(node.childNodes[i], prefix + ' ');
    }
}
printDOM(document, ' ');

function cambiarAspecto(elemento) {
var elementosObtenidos = document.getElementsByTagName(elemento);
    
    if (document.getElementById("myBtn").innerHTML == "Encender") {
        elementosObtenidos[0].style.backgroundColor = '#ff0';
        elementosObtenidos[1].style.backgroundColor = '#ff0';
        elementosObtenidos[2].style.backgroundColor = '#ff0';
        document.getElementById("myBtn").innerHTML = "Apagar"
    } else {
        elementosObtenidos[0].style.backgroundColor = '#fff';
        elementosObtenidos[1].style.backgroundColor = '#fff';
        elementosObtenidos[2].style.backgroundColor = '#fff';
        document.getElementById("myBtn").innerHTML = "Encender"
    }
    

}
//cambiarAspecto('p');


//document.getElementById('A').style.background='#f00';

var x = document.getElementById("myBtn");
x.addEventListener("click", function(){cambiarAspecto('p');});

function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Clicked!<br>";
}

