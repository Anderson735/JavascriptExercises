let title = document.querySelector('#title');
const homero = document.querySelector('#Homero');
const bart = document.querySelector('#Bart');
const maggi = document.getElementById('Maggi');
const image = document.createElement('img');



const showHomero = () =>{
    title.textContent = 'Hola soy homero';
    image.src="images/homero.jpg"
    document.querySelector('#container').appendChild(image)
}

const showBart = () =>{
    title.textContent = 'Hola soy bart';
    image.src="images/bart.jpg"
    document.querySelector('#container').appendChild(image)
}

const showMaggi = () =>{
    title.textContent = 'Hola soy Maggie';
    image.src="images/maggie.gif"
    document.querySelector('#container').appendChild(image)
}

bart.addEventListener('click', showBart);
homero.addEventListener('click', showHomero);
maggi.addEventListener('click', showMaggi);