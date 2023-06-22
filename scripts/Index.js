"use strict";

// declair all of our form controls as variables, any html elements that we may need to interact with.

const numberOfScoops = document.getElementById("numberOfScoops");//number of  scoops

const coneChoice = document.getElementById("coneChoice"); //Cone Radio choice

const cupChoice = document.getElementById("cupChoice"); //Cup Radio choice

const toppingsRow = document.getElementById("toppingsrow");

//Toppings Checkboxes
const toppingSprinkles = document.getElementById("topping-sprinkles");
const toppingHotfudge  = document.getElementById("topping-hotfudge");
const toppingWhipped   = document.getElementById("topping-whipped");
const toppingCherry    = document.getElementById("topping-cherry");


// Spans that will hold the output.
const basePrice = document.getElementById("base-price"); 
const toppingsAmount = document.getElementById("toppings-amount");
const totalAmount = document.getElementById("total-amount");

const submitButton = document.getElementById("submitButton");




window.onload = function(){
    console.log("Window loaded")
    // wire up the button
    submitButton.onclick = onSubmitButtonClick;

   

    // wire up the radio boxes

    cupChoice.onchange = toggleToppingDisplay;
    coneChoice.onchange = toggleToppingDisplay;

    
}


//this will be for when the button is clicked.
function onSubmitButtonClick(){

    // calculate the base price 
    
    let scoops = Number(numberOfScoops.value);

    let basePriceAmount = (2.25 + ((scoops - 1) * 1.25));
    basePrice.innerHTML = basePriceAmount;
 

    let toppingsAmountTotal = 0;

    
    //calculate the toppings price
    if (cupChoice.checked){
    if (toppingSprinkles.checked)
        toppingsAmountTotal += 0.50;
    } 

    if (toppingHotfudge.checked){
        toppingsAmountTotal += 1.25;
    } 

    if (toppingWhipped.checked){
        toppingsAmountTotal += 0.25;
    } 

    if (toppingCherry.checked){
        toppingsAmountTotal += 0.25;
    } 
  

    // at this point we have the total toppings value!

    toppingsAmount.innerHTML = toppingsAmountTotal;




    // calculate the total

    let total = toppingsAmountTotal + basePriceAmount;

    totalAmount.innerHTML = total;

    if (coneChoice.checked) {
        let scoops = Number(numberOfScoops.value);

    let basePriceAmount = (2.25 + ((scoops - 1) * 1.25));
    basePrice.innerHTML = basePriceAmount;
 
        toppingsAmount.innerHTML = "0.00";
    }

   
  

}


function toggleToppingDisplay(){
    //figure out if the toppings should or should not be displayed.
    console.log ("toggleToppingDisplay");
    

    //figure out if the toppings should or should not be displayed.
    if (cupChoice.checked) {
        toppingsRow.style.display = "block";
    } else {
        toppingsRow.style.display = "none";
    }
    //identify if Cone is selected, and hide the toppings if it is.

    //Reset prices
    basePrice.innerHTML = "0.00";
    toppingsAmount.innerHTML = "0.00";
    totalAmount.innerHTML = "0.00";
}

/*function toggleToppingDisplay() {
    // Get references to the toppings row and the cupChoice radio button
    const toppingsRow = document.getElementById('toppingsrow');
    const cupChoice = document.getElementById('cupChoice');
    
    // Check if the toppings should be displayed
    if (cupChoice.checked) {
      toppingsRow.style.display = 'block';
    } else {
      toppingsRow.style.display = 'none';
    }
  }*/
  


  