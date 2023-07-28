import homeImg from './macs-home.jpg';

function home() {
    const welcome = document.createElement('p');
    welcome.textContent = "Welcome, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis, lectus vitae porta finibus, diam mauris interdum est, sit amet facilisis enim elit in tortor. Sed nulla tellus, scelerisque semper leo ut, eleifend imperdiet turpis. Vivamus dignissim neque purus. Ut tristique elementum leo, eget luctus nunc tincidunt sit amet. Praesent euismod ultricies purus a pulvinar. Curabitur vitae vehicula nunc. Fusce posuere sed ipsum sit amet eleifend. Aliquam sit amet sem nec augue pulvinar ultrices vitae sed libero. Ut lobortis posuere pulvinar. Fusce a tempor mi. Etiam eu turpis vel nunc hendrerit scelerisque.";
    welcome.classList.add("welcomeText");
    bottom.appendChild(welcome);

    const homeImage = new Image();
    homeImage.src = homeImg;
    homeImage.classList.add("homeImage");
    bottom.appendChild(homeImage);

    

}

export {home};