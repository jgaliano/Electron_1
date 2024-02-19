var Mousetrap = require('mousetrap')

var boton1 = document.getElementById('boton1')
var boton2 = document.getElementById('boton2')
var boton3 = document.getElementById('boton3')
var boton4 = document.getElementById('boton4')
var boton5 = document.getElementById('boton5')
var boton6 = document.getElementById('boton6')
var boton7 = document.getElementById('boton7')
var boton8 = document.getElementById('boton8')
var boton9 = document.getElementById('boton9')
var boton0 = document.getElementById('boton0')

Mousetrap.bind('1', click1);
Mousetrap.bind('2', click2);
Mousetrap.bind('3', click3);
Mousetrap.bind('4', click4);
Mousetrap.bind('5', click5);
Mousetrap.bind('6', click6);
Mousetrap.bind('7', click7);
Mousetrap.bind('8', click8);
Mousetrap.bind('9', click9);
Mousetrap.bind('0', click0);
Mousetrap.bind('+', clickSuma);
Mousetrap.bind('-', );
Mousetrap.bind('+', );
Mousetrap.bind('x', );

var botonSuma = document.getElementById('boton+')
var botonResta = document.getElementById('boton-')
var botonMult = document.getElementById('boton/')
var botonDiv = document.getElementById('boton*')

var resultado = document.getElementById('resultado')
var actual = document.getElementById('actual')
var botones = document.getElementById('botones')

boton1.addEventListener('click', click1)
boton2.addEventListener('click', click2)
boton3.addEventListener('click', click3)
boton4.addEventListener('click', click4)
boton5.addEventListener('click', click5)
boton6.addEventListener('click', click6)
boton7.addEventListener('click', click7)
boton8.addEventListener('click', click8)
boton9.addEventListener('click', click9)
boton0.addEventListener('click', click0)
botonSuma.addEventListener('click', clickSuma)

function click1(){
    actual.innerHTML+='1'
}

function click2(){
    actual.innerHTML+='2'
}

function click3(){
    actual.innerHTML+='3'
}

function click4(){
    actual.innerHTML+='4'
}

function click5(){
    actual.innerHTML+='5'
}

function click6(){
    actual.innerHTML+='6'
}

function click7(){
    actual.innerHTML+='7'
}

function click8(){
    actual.innerHTML+='8'
}

function click9(){
    actual.innerHTML+='9'
}

function click0(){
   actual.innerHTML+='0'
}

function clickSuma(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual + valorResultado
    actual.innerHTML = '0'
}