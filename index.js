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
Mousetrap.bind(String.fromCharCode(8), Delete_p);
Mousetrap.bind('-', );
Mousetrap.bind('+', );
Mousetrap.bind('x', );

var boton_10p = document.getElementById('boton_10')
var boton_15p = document.getElementById('boton_15')
var boton_20p = document.getElementById('boton_20')
var botonDelete_p = document.getElementById('botonDelete')

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
boton_10p.addEventListener('click', click10p)
boton_15p.addEventListener('click', click15p)
boton_20p.addEventListener('click', click20p)
botonDelete_p.addEventListener('click', Delete_p)

function click1(){

    if (actual.innerHTML === '0'){
        actual.innerHTML=''
        var numero = '1'
        actual.innerHTML+= numero
    }else{
        actual.innerHTML+= '1'
    }
}

function click2(){
    if (actual.innerHTML === '0'){
        actual.innerHTML=''
        var numero = '2'
        actual.innerHTML+= numero
    }else{
        actual.innerHTML+= '2'
    }
}

function click3(){
    if (actual.innerHTML === '0'){
        actual.innerHTML=''
        var numero = '3'
        actual.innerHTML+= numero
    }else{
        actual.innerHTML+= '3'
    }
}

function click4(){
    if (actual.innerHTML === '0'){
        actual.innerHTML=''
        var numero = '4'
        actual.innerHTML+= numero
    }else{
        actual.innerHTML+= '4'
    }
}

function click5(){
    if (actual.innerHTML === '0'){
        actual.innerHTML=''
        var numero = '5'
        actual.innerHTML+= numero
    }else{
        actual.innerHTML+= '5'
    }
}

function click6(){
    if (actual.innerHTML === '0'){
        actual.innerHTML=''
        var numero = '6'
        actual.innerHTML+= numero
    }else{
        actual.innerHTML+= '6'
    }
}

function click7(){
    if (actual.innerHTML === '0'){
        actual.innerHTML=''
        var numero = '7'
        actual.innerHTML+= numero
    }else{
        actual.innerHTML+= '7'
    }
}

function click8(){
    if (actual.innerHTML === '0'){
        actual.innerHTML=''
        var numero = '8'
        actual.innerHTML+= numero
    }else{
        actual.innerHTML+= '8'
    }
}

function click9(){
    if (actual.innerHTML === '0'){
        actual.innerHTML=''
        var numero = '9'
        actual.innerHTML+= numero
    }else{
        actual.innerHTML+= '9'
    }
}

function click0(){
    if (actual.innerHTML === '0'){
        actual.innerHTML=''
        var numero = '0'
        actual.innerHTML+= numero
    }else{
        actual.innerHTML+= '0'
    }
}

function clickSuma(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual + valorResultado
    actual.innerHTML = '0'
}

function click10p(){
    let valorActual = parseInt(actual.innerHTML);
    resultado.innerHTML = (valorActual * 0.10) + valorActual;
}

function click15p(){
    let valorActual = parseInt(actual.innerHTML);
    resultado.innerHTML = (valorActual * 0.15) + valorActual;
}

function click20p(){
    let valorActual = parseInt(actual.innerHTML);
    resultado.innerHTML = (valorActual * 0.20) + valorActual;
}

function Delete_p(){
    let valorActual = actual.innerHTML

    if (valorActual.length > 1){
        let new_valores = valorActual.slice(0, -1)
        actual.innerHTML = new_valores
    }else {
        actual.innerHTML = '0'
    } 
}