//jshint esversion: 6

function privacyPolicy () {
  setTimeout(function(){
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        document.querySelector('#privacy').style.display="block";
        localStorage.setItem("hasCodeRunBefore", true);
       }
  }, 5000);
}



function accept(){
  document.querySelector('#privacy').style.display = "none";
}

privacyPolicy();

// hide and show popup on first page hit.
function hidePopup(){
  document.querySelector('#popup').style.display = 'none'
  sessionStorage.setItem('session', "active")
}



//horizontal scrolling for review Section

function moveLeft(){
  let slider = document.getElementById('review-parent');
  let review = document.querySelector(".review");
  scrollByWidth = review.clientWidth;
  slider.scrollBy({left: -scrollByWidth, top: 0, behavior: 'smooth'});

}

function moveRight(){
  let slider = document.getElementById('review-parent');
  let review = document.querySelector(".review");
  scrollByWidth = review.clientWidth;0
  slider.scrollBy({left: scrollByWidth, top: 0, behavior: 'smooth'});

}


// start over code

function startOver(){
 location.reload(false);
  return false;
}







/*mobile menu code*/

function noScroll(){
  window.scrollTo(0, 0);
}

var hamburger = document.getElementById("hamburger");
var mobileMenu = document.getElementById("mobile-menu");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");

hamburger.addEventListener("click", function(){
    if (mobileMenu.style.display === "block"){
      mobileMenu.style.display = "none";
      line1.classList.remove('line1clicked');
      line2.classList.remove('line2clicked');
      line3.classList.remove('line3clicked');
      window.removeEventListener('scroll', noScroll);
    } else{
      mobileMenu.style.display = "block";
      line1.classList.add('line1clicked');
      line2.classList.add('line2clicked');
      line3.classList.add('line3clicked');
      window.addEventListener('scroll', noScroll);
    }
});


var menuItem = document.getElementsByClassName("menu-item");

for (var i = 0; i < menuItem.length; i++) {
	menuItem[i].addEventListener("click", function(){
		if (mobileMenu.style.display === "block"){
			mobileMenu.style.display = "none";
      line1.classList.remove("line1clicked");
      line2.classList.remove("line2clicked");
      line3.classList.remove("line3clicked");
      window.removeEventListener('scroll', noScroll);
		} else {
			mobileMenu.style.display = "block";
		}
	});

}

//slider code

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function goToDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("review");
    var y = document.getElementsByClassName('js-dot');
    if (n > x.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = x.length; }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].classList.remove('active');
    }
    x[slideIndex - 1].style.display = "flex";
    y[slideIndex - 1].classList.add('active');
}

function generateDots() {
    var i;
    var x = document.getElementsByClassName("review");
    for (i = 0; i < x.length; i++) {
        var dotNumber = i + 1;
        var dot = document.createElement('span');
        dot.innerHTML =
            '<button class="js-dot" onclick="goToDiv(' + dotNumber + ')">' + dotNumber + '</button>';

        document.getElementById('js-slider-dots').appendChild(dot);

    }
}
generateDots();


//snipcart product customization code
const button = document.querySelector('#add-to-cart');
let cakes = document.querySelector('#cakes');
let bread = document.querySelector('#bread');
let roll = document.querySelector('#roll');
let meat = document.querySelector('#meat');
let doubleMeat = document.querySelector('#d-meat');
let tripleMeat = document.querySelector('#t-meat');
let cheese = document.querySelector('#cheese');
let doubleCheese = document.querySelector('#d-cheese');
let tripleCheese = document.querySelector('#t-cheese');
let price = document.querySelector('#price').innerText;
var updPrice = parseFloat(price);
var updatedPrice = updPrice;
let snipcartPrice;




//double bread and meat choice

function breadChoice(){
  button.setAttribute("data-item-custom1-value", bread.value);
}

function meatChoice(){
  button.setAttribute("data-item-custom2-value", meat.value);
}

function burgerMeatChoice(){
  button.setAttribute("data-item-custom1-value", meat.value);
}

function doubleMeatChoice(){
  button.setAttribute("data-item-custom3-value", doubleMeat.value);
}

function tripleMeatChoice(){
  button.setAttribute("data-item-custom4-value", tripleMeat.value);
}

function cheeseChoice(){
  button.setAttribute("data-item-custom5-value", cheese.value);
}

function burgerCheeseChoice(){
  button.setAttribute("data-item-custom2-value", cheese.value);
}

function doubleCheeseChoice(){
  button.setAttribute("data-item-custom6-value", doubleCheese.value);
}

function tripleCheeseChoice(){
  button.setAttribute("data-item-custom7-value", tripleCheese.value);
}

function burgerLettuce(){
  const checked = document.querySelector('#lettuce').checked;
  button.dataset["itemCustom3Value"] = checked ? "true" : "false";
}

function burgerTomato(){
  const checked = document.querySelector('#tomato').checked;
  button.dataset["itemCustom4Value"] = checked ? "true" : "false";
}

function burgerDillPickle(){
  const checked = document.querySelector('#dill-pickle').checked;
  button.dataset["itemCustom5Value"] = checked ? "true" : "false";
}

function burgerOnion(){
  const checked = document.querySelector('#onion').checked;
  button.dataset["itemCustom6Value"] = checked ? "true" : "false";
}

function burgerBananaPepper(){
  const checked = document.querySelector('#banana-pepper').checked;
  button.dataset["itemCustom7Value"] = checked ? "true" : "false";
}

function burgerJalapeno(){
  const checked = document.querySelector('#jalapeno').checked;
  button.dataset["itemCustom8Value"] = checked ? "true" : "false";
}

function burgerMayo(){
  const checked = document.querySelector('#mayo').checked;
  button.dataset["itemCustom9Value"] = checked ? "true" : "false";
}

function burgerMustard(){
  const checked = document.querySelector('#mustard').checked;
  button.dataset["itemCustom10Value"] = checked ? "true" : "false";
}

function burgerRanch(){
  const checked = document.querySelector('#ranch').checked;
  button.dataset["itemCustom11Value"] = checked ? "true" : "false";
}

function burgerHoneyMustard(){
  const checked = document.querySelector('#honey-mustard').checked;
  button.dataset["itemCustom12Value"] = checked ? "true" : "false";
}

function burgerItalian(){
  const checked = document.querySelector('#italian').checked;
  button.dataset["itemCustom13Value"] = checked ? "true" : "false";
}

function burgerSalt(){
  const checked = document.querySelector('#salt').checked;
  button.dataset["itemCustom14Value"] = checked ? "true" : "false";
}

function burgerPepper(){
  const checked = document.querySelector('#pepper').checked;
  button.dataset["itemCustom15Value"] = checked ? "true" : "false";
}

function ketchup(){
  const checked = document.querySelector('#ketchup').checked;
  button.dataset["itemCustom16Value"] = checked ? "true" : "false";
}

function lettuce(){
  const checked = document.querySelector('#lettuce').checked;
  button.dataset["itemCustom2Value"] = checked ? "true" : "false";
}

function tomato(){
  const checked = document.querySelector('#tomato').checked;
  button.dataset["itemCustom3Value"] = checked ? "true" : "false";
}

function dillPickle(){
  const checked = document.querySelector('#dill-pickle').checked;
  button.dataset["itemCustom4Value"] = checked ? "true" : "false";
}

function onion(){
  const checked = document.querySelector('#onion').checked;
  button.dataset["itemCustom5Value"] = checked ? "true" : "false";
}

function bananaPepper(){
  const checked = document.querySelector('#banana-pepper').checked;
  button.dataset["itemCustom6Value"] = checked ? "true" : "false";
}

function jalapeno(){
  const checked = document.querySelector('#jalapeno').checked;
  button.dataset["itemCustom7Value"] = checked ? "true" : "false";
}

function mayo(){
  const checked = document.querySelector('#mayo').checked;
  button.dataset["itemCustom8Value"] = checked ? "true" : "false";
}

function mustard(){
  const checked = document.querySelector('#mustard').checked;
  button.dataset["itemCustom9Value"] = checked ? "true" : "false";
}

function ranch(){
  const checked = document.querySelector('#ranch').checked;
  button.dataset["itemCustom10Value"] = checked ? "true" : "false";
}

function honeyMustard(){
  const checked = document.querySelector('#honey-mustard').checked;
  button.dataset["itemCustom11Value"] = checked ? "true" : "false";
}

function italian(){
  const checked = document.querySelector('#italian').checked;
  button.dataset["itemCustom12Value"] = checked ? "true" : "false";
}

function salt(){
  const checked = document.querySelector('#salt').checked;
  button.dataset["itemCustom13Value"] = checked ? "true" : "false";
}

function pepper(){
  const checked = document.querySelector('#pepper').checked;
  button.dataset["itemCustom14Value"] = checked ? "true" : "false";
}


function lettuceDO(){
  const checked = document.querySelector('#lettuce').checked;
  button.dataset["itemCustom8Value"] = checked ? "true" : "false";
}

function tomatoDO(){
  const checked = document.querySelector('#tomato').checked;
  button.dataset["itemCustom9Value"] = checked ? "true" : "false";
}

function dillPickleDO(){
  const checked = document.querySelector('#dill-pickle').checked;
  button.dataset["itemCustom10Value"] = checked ? "true" : "false";
}

function onionDO(){
  const checked = document.querySelector('#onion').checked;
  button.dataset["itemCustom11Value"] = checked ? "true" : "false";
}

function bananaPepperDO(){
  const checked = document.querySelector('#banana-pepper').checked;
  button.dataset["itemCustom12Value"] = checked ? "true" : "false";
}

function jalapenoDO(){
  const checked = document.querySelector('#jalapeno').checked;
  button.dataset["itemCustom13Value"] = checked ? "true" : "false";
}

function mayoDO(){
  const checked = document.querySelector('#mayo').checked;
  button.dataset["itemCustom14Value"] = checked ? "true" : "false";
}

function mustardDO(){
  const checked = document.querySelector('#mustard').checked;
  button.dataset["itemCustom15Value"] = checked ? "true" : "false";
}

function ranchDO(){
  const checked = document.querySelector('#ranch').checked;
  button.dataset["itemCustom16Value"] = checked ? "true" : "false";
}

function honeyMustardDO(){
  const checked = document.querySelector('#honey-mustard').checked;
  button.dataset["itemCustom17Value"] = checked ? "true" : "false";
}

function italianDO(){
  const checked = document.querySelector('#italian').checked;
  button.dataset["itemCustom18Value"] = checked ? "true" : "false";
}

function saltDO(){
  const checked = document.querySelector('#salt').checked;
  button.dataset["itemCustom19Value"] = checked ? "true" : "false";
}

function pepperDO(){
  const checked = document.querySelector('#pepper').checked;
  button.dataset["itemCustom20Value"] = checked ? "true" : "false";
}

function mealDO(){
  if(document.querySelector('#meal').checked){
    button.setAttribute("data-item-custom22-value", "Yes");
    updatedPrice = updatedPrice + 2.19;
    let num = updatedPrice.toFixed(2);
    document.querySelector('#price').innerText = num;
  }
 else{
  button.setAttribute("data-item-custom22-value", "No");
  updatedPrice = updatedPrice - 2.19;
  let num = updatedPrice.toFixed(2);
  document.querySelector('#price').innerText = num;
}
}


//baked goods customizations
let count = document.querySelector('#quantity');

 function quantity(){
     button.setAttribute("data-item-quantity", count.value);
 }

 function loafChoice(){
   button.setAttribute("data-item-custom1-value", bread.value);
   if(bread.value === "Italian Parmesan" ){
     document.querySelector('#price').innerText = '5.50';
   } else if (bread.value === 'Sourdough'){
     document.querySelector('#price').innerText = '7.00';
   }else if (bread.value === 'White'){
       document.querySelector('#price').innerText = '5.00';
     }else if (bread.value === 'Mini-Banana Bread'){
       document.querySelector('#price').innerText = '5.99';
     } else if(bread.value === 'Mini-Pumpkin Bread'){
      document.querySelector('#price').innerText = '5.49'
     } else if(bread.value === 'Sugar Free Banana Bread'){
      document.querySelector('#price').innerText = '5.19'
     } else if(bread.value === 'Wheat'){
      document.querySelector('#price').innerText = '6.50'
     }
 }

 function cookieChoice(){
  const cookiePrice = document.querySelector('#price')
  button.setAttribute('data-item-custom1-value', bread.value)
  if(bread.value === 'Monster'){
    cookiePrice.innerText = '6.99'
  } else if(bread.value === 'Sugar Cookies-Half Dozen' || bread.value === 'No Bake Cookies-Half Dozen'){
    cookiePrice.innerText = '4.99'
  }else{
    cookiePrice.innerText = '5.99'
  }
 }

 function cupcakeChoice(){
  const cupcakePrice = document.querySelector('#price')
   button.setAttribute("data-item-custom1-value", bread.value);
   if(bread.value === 'Magic Cupcake'|| bread.value === 'Red Velvet'){
     cupcakePrice.innerText = "5.99";
   } else if(bread.value === 'Chocolate With Chocolate Icing'|| bread.value === 'Chocolate With White Icing'){
    cupcakePrice.innerText = "5.50";
  } 

 }

 function cakeChoice(){
  const cakePrice = document.querySelector('#price')
   button.setAttribute("data-item-custom1-value", bread.value);
   if(bread.value === 'Half Carrot Layered' || bread.value === "Half Italian Cream Layered"){
     cakePrice.innerText = "16.49";
   } else if(bread.value === 'Half Coconut Layered'){
    cakePrice.innerText = "14.99"
   }
   else if(bread.value === "Half German Chocolate Layered"){
    cakePrice.innerText = '18.49'
   }
   else if(bread.value === 'Carrot Layered' || bread.value === 'Italian Cream Layered'){
     cakePrice.innerText = '32.99'
   }
   else if(bread.value === 'Coconut Layered'){
    cakePrice.innerText = '29.99'
   }
   else if(bread.value === 'German Chocolate Layered'){
    cakePrice.innerText = '36.99'
   }else if(bread.value === '8x8 Chocolate Cake'){
     cakePrice.innerText = "7.99";
   }else if(bread.value === 'Mini Gluten Free Chocolate Cake'){
     cakePrice.innerText = '7.99'
   } else{
     cakePrice.innerText = "5.99";
   }
 }

 function bakedChoice(){
   button.setAttribute("data-item-custom1-value", bread.value);
 }

 function pieChoice(){
   if(bread.value === 'Pecan' ){
     document.querySelector('#price').innerText = "16.99";
   } else if(bread.value.includes("Ready")){
     document.querySelector('#price').innerText = '18.99'
   }else{
     document.querySelector('#price').innerText = "13.99";
   }
   button.setAttribute("data-item-custom1-value", bread.value);
 }

 

 function rollChoice(){
   button.setAttribute("data-item-custom1-value", roll.value);
   if(roll.value === "Raspberry Cream Cheese"){
     document.querySelector('#price').innerText = 7.49;
   }
  else{
   document.querySelector('#price').innerText = 7.29;
   }
 }



//dynamically changes the price on the product page

function dMeat(){
   if(document.querySelector('#double-meat').checked){
    document.querySelector('#d-meat').style.display ="inline-block";
    priceAdd();
   }else{
    document.querySelector('#d-meat').style.display = "none";
    priceMinus();
  }
}

function tMeat(){
   if(document.querySelector('#triple-meat').checked){
    document.querySelector('#t-meat').style.display ="inline-block";
    priceAdd();
   }else{
    document.querySelector('#t-meat').style.display = "none";
    priceMinus();
  }
}

function dCheese(){
   if(document.querySelector('#double-cheese').checked){
    document.querySelector('#d-cheese').style.display ="inline-block";
    if(!document.querySelector('#double-meat').checked){
     priceAddTCheese();
   }
   }else{
    document.querySelector('#d-cheese').style.display = "none";
    if(!document.querySelector("#double-meat").checked){
      priceMinusTCheese();
    }
  }
}

function tCheese(){
   if(document.querySelector('#triple-cheese').checked){
    document.querySelector('#t-cheese').style.display ="inline-block";
    if(!document.querySelector('#triple-meat').checked){
     priceAddTCheese();
   }
   }else{
    document.querySelector('#t-cheese').style.display = "none";
    if(!document.querySelector("#triple-meat").checked){
      priceMinusTCheese();
    }
  }
}



function priceAdd(){
  updatedPrice = updatedPrice + 2.00;
  document.querySelector('#price').innerText = updatedPrice;
}

function priceMinus(){
  updatedPrice = updatedPrice - 2.00;
  document.querySelector('#price').innerText = updatedPrice;
}


function priceAddTCheese(){
  updatedPrice = updatedPrice + 1.00;
  document.querySelector('#price').innerText = updatedPrice;
  snipcartPrice = button.getAttribute("data-item-price");
  snipcartPrice = Number(snipcartPrice);
  snipcartPrice = snipcartPrice + 1.00;
  snipcartPrice = snipcartPrice.toString();
  button.setAttribute("data-item-price", snipcartPrice);
}

function priceMinusTCheese(){
  updatedPrice = updatedPrice - 1.00;
  document.querySelector('#price').innerText = updatedPrice;
  let snipcartPrice1 = snipcartPrice - 1.00;
  snipcartPrice1 = Number(snipcartPrice1);
  snipcartPrice1 = snipcartPrice1.toString();
  button.setAttribute("data-item-price", snipcartPrice1);
}

function meal(){
  if(document.querySelector('#meal').checked){
    button.setAttribute("data-item-custom22-value", "Yes");
    updatedPrice = updatedPrice + 2.19;
    let num = updatedPrice.toFixed(2);
    document.querySelector('#price').innerText = num;
  }
 else{
  button.setAttribute("data-item-custom22-value", "No");
  updatedPrice = updatedPrice - 2.19;
  let num = updatedPrice.toFixed(2);
  document.querySelector('#price').innerText = num;
}
}

function mealGC(){
  if(document.querySelector('#meal').checked){
    button.setAttribute("data-item-custom3-value", "Yes");
    updatedPrice = updatedPrice + 2.19;
    let num = updatedPrice.toFixed(2);
    document.querySelector('#price').innerText = num;
  }
 else{
  button.setAttribute("data-item-custom3-value", "No");
  updatedPrice = updatedPrice - 2.19;
  let num = updatedPrice.toFixed(2);
  document.querySelector('#price').innerText = num;
}
}

function burgerMeal(){
  if(document.querySelector('#meal').checked){
    button.setAttribute("data-item-custom17-value", "Yes");
    updatedPrice = updatedPrice + 2.19;
    let num = updatedPrice.toFixed(2);
    document.querySelector('#price').innerText = num;
  }
 else{
  button.setAttribute("data-item-custom17-value", "No");
  updatedPrice = updatedPrice - 2.19;
  let num = updatedPrice.toFixed(2);
  document.querySelector('#price').innerText = num;
}
}



function traySize(){
  let tray = document.querySelector('#tray-size');
  button.setAttribute("data-item-custom1-value", tray.value);
  if(tray.value.includes("Medium", 0)){
    document.querySelector('#tray-price').innerText = "49.99";
  } else if(tray.value.includes("Large", 0)){
    document.querySelector('#tray-price').innerText = "69.99";
  } else if(tray.value.includes("Small", 0)){
    document.querySelector('#tray-price').innerText = "29.99";
  }
}




//API Testing code
