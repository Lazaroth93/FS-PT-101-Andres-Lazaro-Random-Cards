import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  cambiarValor ();
  setInterval(cambiarValor, 10000);
}

const palos = ["♦","♥","♠","♣"];                                             //variable palos contiene un array  //
const valores =['A','2','3','4','5','6','7','8','9','10','J','Q','K']

const getRandom =(arra)=>{                                                   //Funcion flecha genérica para obtener un valor random //
  return arra[Math.floor(Math.random() *arra.length)]
}


//Funcion prrincipal cambiarValor//
const cambiarValor =() => {

  let palo = getRandom(palos);                                                //creamos una nueva variable que contiene el valor de salida despues de getRandom//
  let valor = getRandom(valores);

  document.getElementById("paloArriba").innerHTML = palo;                     //Inyectamos los valores en HTML a traves del ID una vez se han generado a traves de getRandom //
  document.getElementById("paloAbajo").innerHTML = palo;
  document.getElementById("valor").innerHTML = valor;

  if(palo === '♦' || palo === '♥') {                                          //Comprobamos si el palo es diamantes y corazones si es true añadimos style.color ="red" //
      document.getElementById("paloArriba").style.color = "red"; 
      document.getElementById("paloAbajo").style.color = "red";
      document.getElementById("valor").style.color = "red";  
  }else{                                                                       //Si no es diamantes o corazones, añadimos style.color ="black"  //
      document.getElementById("paloArriba").style.color = "black";
      document.getElementById("paloAbajo").style.color = "black";
      document.getElementById("valor").style.color = "black";
  }
}

//asignamos la función cambiarValor al objeto window para que esté disponible de forma global
window.cambiarValor = cambiarValor; 

