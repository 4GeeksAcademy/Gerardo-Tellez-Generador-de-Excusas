import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function randomizeNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomizeArray(arrayRandom) {
  let max = arrayRandom.length - 1;
  let min = 0;
  let random = randomizeNumber(min, max);
  return arrayRandom[random]
}
window.onload = function() {
  document.querySelector("#excuse").innerHTML = randomizeArray(who) + " " + randomizeArray(action) + " " + randomizeArray(what) + " " + randomizeArray(when)
};