import "./style.css";
import {title, homebtn, menuBtn, contactBtn, bottomDiv, btnContainer} from './initial.js';
import {home} from './home.js';
import './macs-home.jpg';
import {menu} from './menu.js';
import {contact} from './contact.js';

const content = document.getElementById('content');
const btns = document.querySelectorAll('button.tabButton');

title();
btnContainer();

const buttonBox = document.getElementById("buttonContainer");

homebtn(buttonBox);
menuBtn(buttonBox);
contactBtn(buttonBox);
bottomDiv();

const bottom = document.getElementById("bottom");


home();
//menu();

function loadHome() {
    while(bottom.hasChildNodes())
    bottom.firstChild.remove();
    home();

};

export {loadHome};
   
function loadMenu() {
    while(bottom.hasChildNodes())
    bottom.firstChild.remove();
    menu();
}

export {loadMenu};

function loadContact() {               //import contact file at top!! create contact file
    while(bottom.hasChildNodes())
    bottom.firstChild.remove();
    contact();
}

export {loadContact};


// tab code

const buttons = document.querySelectorAll(".tabButton");
let activeButton = document.querySelector(".activeButton");

buttons.forEach((button) => {
    button.addEventListener("click", () => changeFont(button));
})

function changeFont(button) {
    if(button == activeButton) return;

    if(activeButton) {
        activeButton.classList.remove("activeButton");
    }

    button.classList.add("activeButton");
    activeButton = button;
}




/*
function toggleClass( element ) {
    var classe = 'tabButton';

    if ( element.className == classe ){
        buttons.forEach((button) => {
            button.classList.toggle("tabButton");
        })
        element.className = classe.replace('tabButton', 'activeButton');
    } else {
        element.className = classe;
    }
}

export {toggleClass};

*/

