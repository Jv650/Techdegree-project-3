//3. The Name field
const nameField = document.querySelector('input[type="text"]');//or (#name) ??
    nameField.focus();

//4. Job Role section
const jobRole = document.querySelector('select'); //getElementsByName??
const otherJobRole = document.querySelector('#other-job-role');//'input["#other-job-role]'??
   
//Hide job role input 
otherJobRole.style.display = "none";

//Show "other job" when a the 'other' option is selected 
jobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other') { // if (e.target.value === 'change')??
        otherJobRole.style.display = "block";
    } else if (e.target.value !== 'other'){
        otherJobRole.style.display = "none";
    }
});

//5. T-shirt info section
const shirtDesign = document.querySelector('#design');
const shirtColor = document.querySelector('#color');
//const colorOptions = document.querySelectorAll('#color .data-theme'); //('option[data-theme]')
//const colorOptionsList = document.getElementById('#color');//unsure
const colorOptions = shirtColor.children;//unsure

//shirtcolor is disabled until the event listener 
shirtColor.disabled = true;

//listens for change to design dropdown
shirtDesign.addEventListener('change', (e) => {

    //enables the theme options
    shirtColor.disabled = false;
    const designSelected = e.target.value; //targets theme selected
    
//iterates through color options for design chosen
    for (let i = 0; i < colorOptions.length; i++) {
        const optionValue = colorOptions[i]; //.value or no value??
        const dataTheme = optionValue.getAttribute("data-theme");

    if (dataTheme === designSelected) {
        optionValue.hidden = false;
        optionValue.setAttribute('selected', true);
    } else if (dataTheme !== optionValue){ //if (optionValue !== dataTheme)
        optionValue.hidden = true;
        optionValue.removeAttribute('selected');
       
    }
    }
   
});

//6. register for activities section
const registerActivity = document.querySelector('#activities');
const payTotal = document.querySelector('#activities-cost'); 
let totalCost = 0; //REMINDER when a digit will be changing (in this case the total) we need let not const

    //console.log(registerActivity)
    //console.log(payTotal)

//listens for change in checkboxes of register for activities
registerActivity.addEventListener('change', (e) => {
    //will target te cost of whicever activity clicked
    const dataCost = +e.target.getAttribute('data-cost');
            //const dataCost = +payTotal.getAttribute('data-cost');//maybe payTotal.getAttr
            //console.log(dataCost)
            // console.log(typeof dataCost)

    //if activity checked it will add its value/cost to the total
    if (e.target.checked) { //maybe??e.target.checked === true;
        totalCost += dataCost; //(e.target.checked) ? dataCost++ : totalCost--;
    } else {
        totalCost -= dataCost;
    }

    //console.log('Total:', totalCost)
    //console.log('checked or not?', e.target.checked)

    //displays total
    payTotal.innerHTML = `Total: $${totalCost}`;

});


//7. Payment info section
const paymentMethod = document.querySelector('#payment');
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');

//will only display "i'm going to pay with" option and hide cc, bitcoin, and cc 
paymentMethod.children[0].setAttribute('selected', true);
payPal.style.display = 'none';
bitCoin.style.display = 'none';
creditCard.style.display = 'none';

//listener for a selected payment method
paymentMethod.addEventListener('change', (e) => {

    payPal.style.display = 'none';
    bitCoin.style.display = 'none';
    creditCard.style.display = 'none';

    /*if (e.target.value === paymentMethod) {
        creditCard.style.display = 'block'; //traversal
    } else if (e.target.value === 'paypal') {
        payPal.style.display = 'block';
    } else { 
        bitCoin.style.display = 'block';
    }
    */
    if (e.target.value === 'credit-card') {
        //creditCard.setAttribute('selected', true);
        creditCard.style.display = 'block'; 
    } else if (e.target.value === 'paypal') {
        payPal.style.display = 'block';
    } else if (e.target.value === 'bitcoin') {
        bitCoin.style.display = 'block';
    }
    
});

/*console.log(paymentMethod)
console.log(creditCard)
console.log(payPal)
console.log(bitCoin)*/

//8. Form validation

//variables already created previously
//const nameField = document.querySelector('input[type="text"]');
//const registerActivity = document.querySelector('#activities');

//new variables created
const emailAddress = document.getElementById("email");
const cardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const cardVerif = document.getElementById("cvv");
const form = document.querySelector('form');
const activityCheckboxes = document.querySelectorAll('#activities-box input[type="checkbox"]'); //document.getElementById('activities'); //maybe ('#activities-box');


/*Tried to use helper function method - used form inpit validation error indications practice as reference
const isValidName = () => /^[a-z]+$/i.test(nameField.value);
const isValidActivity = () => e.target.getAttribute('data-cost');
const isValidEmail = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailAddress.value);
const isValidCardNum = () => /^[0-9]{16}$/.test(cardNumber.value);
const isValidZip = () => /^[0-9]{5}$/.test(zipCode.value);
const isValidCvv = () => /^[0-9]{3}$/.test(cardVerif.value);
//const isValidform = () => //.test(form.value);
*/


//listener for whem form is submitted
form.addEventListener('submit', (e) => {
   //e.preventDefault();
    
    /*const boxChecked = activityCheckbox.value;
    if (boxChecked !== 'clicked') {
     e.preventDefault();
    }*/
    //const activityCheckbox = document.querySelectorAll('#activities-box');

     
/*Lines 165-20 - I created a new var to store whetever user inputted and test it with my regex's 
if name inputted is not valid it will prevent form from submitting same goes for all ofther if statments in this listener*/

    const nameValue = nameField.value;
    const isValidName = /^[a-zA-Z\s]+$/i.test(nameValue);
    console.log(nameValue)
    console.log(isValidName)
    if (isValidName === false) {
        e.preventDefault();
        
    } 

    const emailValue = emailAddress.value;
    const isValidEmail = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    console.log(emailValue)
    console.log(isValidEmail)

    if (isValidEmail === false) {
        e.preventDefault();
    }

    const cardValue = cardNumber.value;
    const isValidCardNum = /^[0-9]{13,16}$/.test(cardValue);
    console.log(cardValue)
    console.log(isValidCardNum)

    if (isValidCardNum === false) {
        e.preventDefault();
    }

    const zipValue = zipCode.value;
    const isValidZip = /^[0-9]{5}$/.test(zipValue);
    console.log(zipValue)
    console.log(isValidZip)

    if (isValidZip === false) {
        e.preventDefault();
    }

    const cardVerifVal = cardVerif.value;
    const isValidCvv = /^[0-9]{3}$/.test(cardVerifVal);
    console.log(cardVerifVal)
    console.log(isValidCvv)

    if (isValidCvv === false) {
        e.preventDefault();
    }

  

    //NOTE: use - DOM manipulation: form validaton practice as guidance
    /* - Below I am taking my regex variable (which tests if user input matches my regex)
       - closest('label') ensures users can click anywhere in the specified activity but it means that it will select the closest parent label element
       - if no selection or input has been made by the user it will let them know at the time of submission
       - the nextElement Sibling will target the span(sibling) that follows the selected element in the HTML doc and display whatever error message in the span element
    */
    if (isValidName) {
        nameField.closest('label').classList.remove("not-valid");     //classList.add("valid");
        nameField.closest('label').classList.add("valid");
        nameField.nextElementSibling.style.display = "none";
    } else {
        e.preventDefault();
        nameField.closest('label').classList.remove("valid");
        nameField.closest('label').classList.add("not-valid");
        nameField.nextElementSibling.style.display = "block";
    }
   
    if (isValidEmail) {
        emailAddress.closest('label').classList.remove("not-valid");
        emailAddress.closest('label').classList.add("valid"); //green check icon
        emailAddress.nextElementSibling.style.display = "none";
    } else {
        e.preventDefault();
        emailAddress.closest('label').classList.remove("valid");
        emailAddress.closest('label').classList.add("not-valid"); //red error icon
        emailAddress.nextElementSibling.style.display = "block";
    }

    if (isValidCardNum) {
        cardNumber.closest('label').classList.remove("not-valid");
        cardNumber.closest('label').classList.add("valid");
        cardNumber.nextElementSibling.style.display = "none";
    } else {
        e.preventDefault();
        cardNumber.closest('label').classList.remove("valid");
        cardNumber.closest('label').classList.add("not-valid");
        cardNumber.nextElementSibling.style.display = "block";
    }

    if (isValidZip) {
        zipCode.closest('label').classList.remove("not-valid");
        zipCode.closest('label').classList.add("valid");
        zipCode.nextElementSibling.style.display = "none";
    } else {
        e.preventDefault();
        zipCode.closest('label').classList.remove("valid");
        zipCode.closest('label').classList.add("not-valid");
        zipCode.nextElementSibling.style.display = "block";
    }

    if (isValidCvv) {
        //cardVerif.closest('label').className = "valid"; 
        cardVerif.closest('label').classList.remove("not-valid");
        cardVerif.closest('label').classList.add("valid");
        cardVerif.nextElementSibling.style.display = "none";
    } else {
        e.preventDefault();
        cardVerif.closest('label').classList.remove("valid");
        cardVerif.closest('label').classList.add("not-valid");
        cardVerif.nextElementSibling.style.display = "block";
    }
    
    if (totalCost === 0) {
        e.preventDefault();
        registerActivity.classList.remove("valid");//ALSO TRIED THIS registerActivity.closest('label').className = "not-valid";
        registerActivity.classList.add("not-valid");
        document.getElementById('activities-hint').style.display = "block";  //egisterActivity.nextElementSibling.style.display = "block";
    } else {
        registerActivity.classList.remove("not-valid");
        registerActivity.classList.add("valid");  //ALSO TRIED THIS registerActivity.closest('label').className = "valid"; 
        document.getElementById('activities-hint').style.display = "none"; //registerActivity.nextElementSibling.style.display = "none";
    }


});
    /*if (registerActivity === '') {
        registerActivity.closest('legend').className = "valid";
        registerActivity.nextElementSibling.style.display = "none";
    } else {
        e.preventDefault();
        registerActivity.closest('label').className = "error";
        registerActivity.nextElementSibling.style.display = "block";
    }
    */    

    /* if (form) {
        form.closest('label').className = "valid";
        form.nextElementSibling.style.display = "none";
    } else {
        e.preventDefault();
        form.closest('label').className = "error";
        form.nextElementSibling.style.display = "block";
    }*/
    


//9. Accessibility

//const activityCheckboxes = document.querySelectorAll('#activities-box input[type="checkbox"]'); //document.getElementById('activities'); //maybe ('#activities-box');

//will iterate through activities list and target whichever checkbox is selected and will add the blue box/border to ensure focus
 for (let i = 0; i < activityCheckboxes.length; i++){

    activityCheckboxes[i].addEventListener('focus', (e) => {

        e.target.parentElement.classList.add('focus');
    });
    activityCheckboxes[i].addEventListener('blur', (e) => {
        e.target.parentElement.classList.remove('focus');
    });
 }

/*if ("form-hint") {
    //e.preventDefault();
    parentElement.className.add('not-valid');
    parentElement.className.remove('valid');
    lastElementChild

    nameField.lastElementChild.style.display = 'block';
} else {
    parentElement.className.add('valid');
    parentElement.className.remove('not-valid');

}

parentElement.className('form');

*/


