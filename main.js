//Item
class Item {
    constructor(
        nameOfTheItem,
        price,
    ) {
        this.nameOfTheItem = nameOfTheItem;
        this.price = price;
    }
}
//FOOD
const meals = [];
meals.push(new Item("Mushroom and onion omelet", 52));
meals.push(new Item("Tomato spaghetti", 38));
meals.push(new Item("Macaroni & Cheese (no gluten)", 42));
meals.push(new Item("Pizza", 44));
meals.push(new Item("Salmon fettuccine", 58));
meals.push(new Item("Cheese ravioli", 56));

//DRINKS
const drinks = [];
drinks.push(new Item("Mojito", 40));
drinks.push(new Item("Martini", 35));
drinks.push(new Item("Cuba Libre", 42));
drinks.push(new Item("Gin Tonic", 38));
drinks.push(new Item("Daiquiri", 39));
drinks.push(new Item("Blue Lagoon", 35));

let menu = document.querySelector('.menu');
const buttonsCloseModal = document.querySelectorAll('.close-modal'); //x
const overlay = document.querySelector('.overlay'); //blur
const itemElement = document.querySelector('.Item'); // the item element- all the window, in order to remove and add the "hidden"
const signUpElement = document.querySelector('.signup');
let alertSign = document.querySelector('.alert');
const thankLabel = document.querySelector('.thank');

//select buttons
const menuFoodButton = document.querySelector('.button1'); //the food button
const menuDrinksButton = document.querySelector('.button2'); //the drinks button
const menuContactButton = document.querySelector('.button3'); //the contant button
const menuPhotosButton = document.querySelector('.button4'); //the photos button
const menuSignUpButton = document.querySelector('.button5'); //the photos button

let secondHead = document.querySelector('.secondMenuHead'); // second head of the window

function injectionToMenu(currentInformation) {
    let currentItem = [];
    menu.innerHTML = "";
    currentItem = currentInformation;
    for (let i = 0; i < 6; i++) {
        menu.innerHTML += currentItem[i].nameOfTheItem;
        menu.innerHTML += "................................................................" + currentItem[i].price + "<br />" + "<br />";
    }
}

function injectionToSecondHead(second) {
    secondHead.innerHTML = second;
}

function removeHidden() {
    itemElement.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const openFood = function() {
    injectionToMenu(meals);
    injectionToSecondHead("Food");
    removeHidden();
}

const openDrinks = function() {
    injectionToMenu(drinks);
    injectionToSecondHead("Drinks");
    removeHidden();
}

const openContact = function() {
    menu.innerHTML = "Cellebrite, Petah Tikva." + "<br />" + "Phone: 496351";
    injectionToSecondHead("Address & Contact");
    removeHidden();
}

const openPhotos = function() {
    menu.innerHTML = "";
    for (let i = 1; i <= 6; i++) {
        let imagem = document.createElement("img");
        imagem.src = "images\\image" + i + ".jpg";
        imagem.width = 250;
        imagem.height = 250;
        console.log(imagem.src);
        menu.appendChild(imagem);
    }
    injectionToSecondHead("Gallery");
    removeHidden();
}

const openSignIn = function() {
    menu.innerHTML = ""
    injectionToSecondHead("Sign Up");
    signUpElement.classList.remove('hidden');
    removeHidden();
}

const menuSubmitButton = document.querySelector('.submitButton');
let nameInput = document.querySelector('.name');
let emailInput = document.querySelector('.email');
const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const submitFunction = function() {
    alertSign.innerHTML = "";
    if (!emailInput.value.match(mailformat)) {
        alertSign.innerHTML = "NOT A VALID EMAIL";
    } else if (!nameInput.value) {
        alertSign.innerHTML = "MISSING NAME";
    } else if (nameInput.value != "" && emailInput.value.match(mailformat)) {
        signUpElement.classList.add('hidden');
        thankLabel.classList.remove('hidden');
    }
    alertSign.classList.remove('hidden');
}

const closeX = function() {
    nameInput.value = "";
    emailInput.value = "";
    thankLabel.classList.add('hidden');
    alertSign.classList.add('hidden');
    itemElement.classList.add('hidden');
    overlay.classList.add('hidden');
    signUpElement.classList.add('hidden');
}

for (let i = 0; i < buttonsCloseModal.length; i++) {
    buttonsCloseModal[i].addEventListener('click', closeX);
}
menuFoodButton.addEventListener('click', openFood);
menuDrinksButton.addEventListener('click', openDrinks);
menuContactButton.addEventListener('click', openContact);
menuPhotosButton.addEventListener('click', openPhotos);
menuSignUpButton.addEventListener('click', openSignIn);
menuSubmitButton.addEventListener('click', submitFunction);