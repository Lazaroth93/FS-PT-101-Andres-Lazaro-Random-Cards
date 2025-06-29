import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  cambiarValor ();
  setInterval(cambiarValor, 10000);
}

const palos = ["♦", "♥", "♠", "♣"];
const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Función que devuelve un valor aleatorio de un array
const getRandom = array => array[Math.floor(Math.random() * array.length)];

// Función para generar y añadir una nueva carta al DOM
const cambiarValor = () => {
  const palo = getRandom(palos);
  const valor = getRandom(valores);
  const color = (palo === "♦" || palo === "♥") ? "red" : "black";

  const carta = document.createElement("div");
  carta.className = "carta";

  const paloArriba = document.createElement("div");
  paloArriba.className = "paloArriba";
  paloArriba.innerHTML = palo;
  paloArriba.style.color = color;

  const valorCarta = document.createElement("div");
  valorCarta.className = "valor";
  valorCarta.innerHTML = valor;
  valorCarta.style.color = color;

  const paloAbajo = document.createElement("div");
  paloAbajo.className = "paloAbajo";
  paloAbajo.innerHTML = palo;
  paloAbajo.style.color = color;

  carta.appendChild(paloArriba);
  carta.appendChild(valorCarta);
  carta.appendChild(paloAbajo);

  document.getElementById("cartas-container").appendChild(carta);
}

//asignamos la función cambiarValor al objeto window para que esté disponible de forma global
window.cambiarValor = cambiarValor; 

