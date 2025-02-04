import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generarCarta();
  console.log("Hello Rigo from the console!");
  document.getElementById("botonCarta").addEventListener("click", generarCarta);
};

// Sintesis:
// Numeros Arreglo para Palos de Naipe:
// 1 = Pica
// 2 = Corazon
// 3 = Trébol
// 4 = Diamante
// ----------------------------------------
// Numeros Arreglo para Numero de Naipe:
// 1= Ace
// 2-10 = Sin cambio
// 11= Jack
// 12= Queen
// 13= King 
// ----------------------------------------
function generarCarta() {
  let paloNaipe = ["♦","♥","♠","♣"];
  let numeroNaipe = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];

  let paloNaipeRandom = paloNaipe[Math.floor(Math.random() * paloNaipe.length)];
  let numeroNaipeRandom = numeroNaipe[Math.floor(Math.random() * numeroNaipe.length)];
  console.log(paloNaipeRandom, numeroNaipeRandom);

  document.getElementById("palo1").innerHTML = paloNaipeRandom;
  document.getElementById("numeroCarta").innerHTML = numeroNaipeRandom;
  document.getElementById("palo2").innerHTML = paloNaipeRandom;

  if (paloNaipeRandom == "♦" ||paloNaipeRandom == "♥" ) {
    document.getElementById("palo1").style.color = "red";
    document.getElementById("palo2").style.color = "red";
  }else{
    document.getElementById("palo1").style.color = "black";
    document.getElementById("palo2").style.color = "black";
  }



}


