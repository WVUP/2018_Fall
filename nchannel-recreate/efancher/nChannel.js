let compScreen = document.getElementById('slideshow');
console.dir(compScreen);

let buttonClick = document.querySelector('buttonNC');
buttonClick.addEventListener('click', submitButton);

let pic1 = src="sales1.png";
let pic2 = src="sales2.png"

function slideShow (compScreen){
    if(value=="Support Multichannel Operations"){
        document.getElementById('slideshow').style.display="block" = pic1.replace('90x90', '225x225');
    }
    else if(value=="Push Orders to Fulfillment Systems"){
        document.getElementById('slideshow').style.display="block" = pic2.replace('90x90', '225x225');
    }
    else if(value=="Publish Item Catalog to Online Stores"){
        document.getElementById('slideshow').style.display="block" = pic3.replace('90x90', '225x225');
    }
    else if(value=="Synchronize Inventory in Real-time"){
        document.getElementById('slideshow').style.display="block" = pic4.replace('90x90', '225x225');
    }
    else{
        document.getElementById('slideshow').style.display="block" = pic5.replace('90x90', '225x225');
    }
}