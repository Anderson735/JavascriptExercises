//Convertir a mayúsculas el texto que se ingrese
const text = document.getElementById('Texto');
const btnMayuscula = document.querySelector('#Mayúscula');
const convertirMayuscula = () => text.value = text.value.toUpperCase();
btnMayuscula.addEventListener("click", convertirMayuscula)


//Convertir a minúscula el texto que se ingrese
const btnMinuscula = document.querySelector('#Minúscula');
const convertirMinuscula = () => text.value = text.value.toLowerCase();
btnMinuscula.addEventListener("click", convertirMinuscula)

//Capitalizar el texto 
const btnCapitalizar = document.querySelector('#PLM')
const capitalizar = () => text.value = text.value.replace(/\w\S*/g, (w) => 
(w.replace(/^\w/, (c) => c.toUpperCase())));
btnCapitalizar.addEventListener("click", capitalizar)
