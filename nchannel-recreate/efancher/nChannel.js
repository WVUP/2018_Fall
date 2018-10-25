let compScreen = document.getElementById('slideshow');
console.dir(compScreen);

let buttonClick = document.querySelector('.buttonNC');
buttonClick.addEventListener('click', slideshow);

var nav = document.getElementById('nav-whole');
let body = document.querySelector('body');

var imageChoice = []; // empty array for image selected by button press

//images
imageChoice[1] = 'https://www.nchannel.com/wp-content/uploads/2014/02/nchannel-intro-vid-screen.png';
imageChoice[2] = 'https://www.nchannel.com/wp-content/uploads/2014/02/mac-slide1.jpg';
imageChoice[3] = 'https://www.nchannel.com/wp-content/uploads/2014/02/mac-slide1.jpg';
imageChoice[4] = 'https://www.nchannel.com/wp-content/uploads/2014/02/mac-slide1.jpg';
imageChoice[5] = 'https://www.nchannel.com/wp-content/uploads/2014/02/mac-slide1.jpg';

document.addEventListener('scroll', scrollToHide);

function scrollToHide () {
    console.log("Hello world");
    let navTop = nav.querySelector('.nav-top');
    let navBottom = nav.querySelector('.nav-bottom');
    if (window.pageYOffset > 100){
        navTop.classList += ' hide';
        nav.classList.add('nav-whole-shrunk');

    }
    else{
        navTop.classList = 'nav-top';
        nav.classList.remove('nav-whole-shrunk');
    }
}



function slideShow (img){
    // console.log(img);
    let slideShow = document.getElementById('slideshow');
    slideShow.src = imageChoice[img];

}