
import {loadHome, loadMenu, loadContact} from './index.js';

function title(){

    const title = document.createElement('div');
    title.textContent = "Mikes Mad Macarons";
    title.classList.add("title");
    content.appendChild(title);

    return title;

}

export {title};

function btnContainer() {
    const btnContain = document.createElement('div');
    btnContain.setAttribute("id", "buttonContainer");
    content.appendChild(btnContain);

    return btnContain;
}

export {btnContainer};



function homebtn(parent) {
    const hBtn = document.createElement('button');
    hBtn.textContent = "Home";
    hBtn.classList.add("tabButton");
    hBtn.classList.add("activeButton");
    parent.appendChild(hBtn);
    hBtn.addEventListener("click", loadHome);
    return hBtn;

}

export {homebtn};

function menuBtn(parent) {
    const mBtn = document.createElement('button');
    mBtn.textContent = "Menu";
    mBtn.classList.add("tabButton");
    parent.appendChild(mBtn);
    mBtn.addEventListener("click", loadMenu);
    return mBtn;
}

export {menuBtn};

function contactBtn(parent) {
    const cBtn = document.createElement('button');
    cBtn.textContent = "Contact";
    cBtn.classList.add("tabButton");
    parent.appendChild(cBtn);
    cBtn.addEventListener("click", loadContact);

    return cBtn;
}

export {contactBtn};

function bottomDiv() {
    const bDiv = document.createElement('div');
    bDiv.classList.add('bDiv');
    bDiv.setAttribute("id", "bottom");
    content.appendChild(bDiv);

    return bDiv;
}



export {bottomDiv};