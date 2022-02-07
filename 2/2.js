let numCounter = document.querySelector('#counter');
const substractButton = document.querySelector('#substract');
const resetButton = document.querySelector('#reset');
const addButton = document.querySelector('#add');
const image = document.querySelector('#image')

counter = parseInt(numCounter.textContent);
opacity = 100;

const substract = () => {
    opacity -= 1;
    if (counter <= 0) {
        substractButton.style.cssText = "background-color:blue;";
        addButton.style.cssText = "background-color:white;";
        image.style.opacity = `${opacity}`
    }
    counter -= 1;
    numCounter.textContent = counter;
};

const reset = () => {
    counter = 0
    if (counter == 0) {
        substractButton.style.cssText = "background-color:white;";
        addButton.style.cssText = "background-color:white;";
        image.style.opacity = `${opacity}`
    }
    numCounter.textContent = counter;
};

const add = () => {
    if (counter >= 0) {
        substractButton.style.cssText = "background-color:white;";
        addButton.style.cssText = "background-color:green;";
        image.style.opacity = `${counter}%`
    }
    counter += 1;
    numCounter.textContent = counter;
};

substractButton.addEventListener('click', substract);
resetButton.addEventListener('click', reset);
addButton.addEventListener('click', add);