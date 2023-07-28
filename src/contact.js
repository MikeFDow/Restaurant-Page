import storeImg from './macStorefront.jpg';

function contact() {
    const info = document.createElement('div');
    info.classList.add("infoDiv");
    bottom.appendChild(info);

    const address = document.createElement('p');
    address.classList.add("addressNum");
    address.textContent = "Location : 123 Macaron Blvd, Flavor City, US";
    info.appendChild(address);

    const numEmail = document.createElement('p');
    numEmail.classList.add("addressNum");
    numEmail.textContent = "Email : mikemacaron@gmail.com  /  Phone : (456) 123-4321";
    info.appendChild(numEmail);

    const hours = document.createElement('div');
    hours.textContent = "Hours";
    hours.classList.add("hoursDiv");
    info.appendChild(hours);

    const monFri = document.createElement('p');
    monFri.textContent = "Monday - Friday    ----   9 AM - 5 PM";
    monFri.classList.add("monFri");
    hours.appendChild(monFri);

    const satSun = document.createElement('p');
    satSun.textContent = "Saturday - Sunday  ----     10 AM - 4 PM";
    satSun.classList.add("satSun");
    hours.appendChild(satSun);

    const contactImg = new Image();
    contactImg.src = storeImg;
    info.appendChild(contactImg);
}

export {contact};