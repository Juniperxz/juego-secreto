let numeroSecreto = 0
let intentos=0;
let listaNumerosSorteados = [];
let numeromaximo = 3 ;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`acertaste el numero secreto ${intentos} ${(intentos ===1 )? ` vez`:`veces`}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

}
else {
    if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento("p","el numero es menor");
    }
    else{
        asignarTextoElemento("p","el numero es mayor");
    }
    intentos++;
    limpiarCaja();
}
return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeromaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeromaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeromaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
   
}

function reiniciarValores(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");

}
condicionesIniciales();