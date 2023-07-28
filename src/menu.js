import menuImgOne from './menuOneCropped.png';
import menuImgTwo from './menuTwoCropped.png';
import menuImgThree from './menuThree.png';

function menu() {
    const itemOne = document.createElement('div');         //Item Divs
    itemOne.classList.add("menuItems");
    itemOne.textContent = "Blue Macaron";
    bottom.appendChild(itemOne);

    const itemTwo = document.createElement('div');
    itemTwo.classList.add("menuItems");
    itemTwo.textContent = "Yellow Macaron";
    bottom.appendChild(itemTwo);

    const itemThree = document.createElement('div');
    itemThree.classList.add("menuItems");
    itemThree.textContent = "Red Macaron";
    bottom.appendChild(itemThree);

    const imgOne = new Image();                             // Item images
    imgOne.src = menuImgOne;
    imgOne.classList.add("menuImages");
    itemOne.appendChild(imgOne);

    const imgTwo = new Image();
    imgTwo.src = menuImgTwo;
    imgTwo.classList.add("menuImages");
    itemTwo.appendChild(imgTwo);

    const imgThree = new Image();
    imgThree.src = menuImgThree;
    imgThree.classList.add("menuImages");
    itemThree.appendChild(imgThree);

    const priceOne = document.createElement('p');            //Item prices
    priceOne.classList.add("price");
    priceOne.textContent = "$3";
    itemOne.appendChild(priceOne);

    const priceTwo = document.createElement('p');            //Item prices
    priceTwo.classList.add("price");
    priceTwo.textContent = "$5";
    itemTwo.appendChild(priceTwo);

    const priceThree = document.createElement('p');            //Item prices
    priceThree.classList.add("price");
    priceThree.textContent = "$100";
    itemThree.appendChild(priceThree);


}

export {menu};