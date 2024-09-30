//3. The Name field
const nameField = document.querySelector('input[type="text"]');//or (#name) ??
    nameField.focus();

//4. Job Role section
const jobRole = document.querySelector('select'); //getElementsByName??
const otherJobRole = document.querySelector('#other-job-role');//'input["#other-job-role]'??
    otherJobRole.style.display = "none";

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
const colorOptionsList = document.getElementById('color');//unsure
const colorOptions = colorOptionsList.children;//unsure

shirtColor.disabled = true;

shirtDesign.addEventListener('change', (e) => {
    shirtColor.disabled = false;

    const colorOptions = colorOptionsList.children;

    for (let i = 0; i < colorOptions.children; i++) {
        const optionValue = colorOptions[i].value; //.value or no value??
        const dataTheme = colorOptions[i].getAttribute(".data-theme");

    if (optionValue === dataTheme) {
        colorOptions[i].hidden = false;
        colorOptions.setAttribute('selected', true);
    } else { //if (optionValue !== dataTheme)
        colorOptions[i].hidden = true;
        colorOptions.removeAttribute('selected');
       
    }
    }
   
});

//6. register for activities section
const registerActivity = document.querySelector('#activities');
const payTotal = document.querySelector('#activities-cost'); 
let totalCost = 0; //REMINDER when a digit will be changing (in this case the total) we need let not const

    //console.log(registerActivity)
    //console.log(payTotal)

registerActivity.addEventListener('change', (e) => {
    const dataCost = +e.target.getAttribute('data-cost');
    //const dataCost = +payTotal.getAttribute('data-cost');//maybe payTotal.getAttr
    //console.log(dataCost)
   // console.log(typeof dataCost)

    if (e.target.checked) { //maybe??e.target.checked === true;
        totalCost += dataCost; //(e.target.checked) ? dataCost++ : totalCost--;
    } else {
        totalCost -= dataCost;
    }

    //console.log('Total:', totalCost)
    //console.log('checked or not?', e.target.checked)

    payTotal.innerHTML = `Total: $${totalCost}`;

});


//7. Payment info section
const paymentMethod = document.querySelector('#payment');
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');

payPal.style.display = 'none';
bitCoin.style.display = 'none';

paymentMethod.children[1].setAttribute('selected', true);

paymentMethod.addEventListener('change', (e) => {
    //e.target.value = 'true';
    creditCard.style.display = 'none'; //creditCard.selected = 'true';
    payPal.style.display = 'none';  //payPal.selected = 'true';
    bitCoin.style.display = 'none'; //bitCoin.selected = 'true';

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

//variables already created
//const nameField = document.querySelector('input[type="text"]');
//onst registerActivity = document.querySelector('#activities');

//new variables created
const emailAddress = document.getElementById("email");
const cardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const cardVerif = document.getElementById("cvv");
const form = document.querySelector('form');

/*const isValidName = () => /^[a-z]+$/i.test(nameField.value);
//const isValidActivity = () => e.target.getAttribute('data-cost');
const isValidEmail = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailAddress.value);
const isValidCardNum = () => /^[0-9]{16}$/.test(cardNumber.value);
const isValidZip = () => /^[0-9]{5}$/.test(zipCode.value);
const isValidCvv = () => /^[0-9]{3}$/.test(cardVerif.value);
//const isValidform = () => //.test(form.value);
*/

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameValue = nameField.value;
    const isValidName = /^[a-z]+$/i.test(nameValue);
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
    const isValidCardNum = /^[0-9]{16}$/.test(cardValue);
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

    
   /* 
   the following code is for 'register for activities' section
   const activityChecked = registerActivity.value;
    if (e.target.checked === 'checkbox') {
    }
    */



    //let nameInputVal = nameField.value;
    //let regex = /^[a-z]$/i;
    //let regexName = /^[a-z]$/i;
    
    if (isValidName) {
        nameField.closest('label').className = "valid";
        nameField.nextElementSibling.style.display = "none";
    } else {
        e.preventDefault();
        nameField.closest('label').className = "error";
        nameField.nextElementSibling.style.display = "block";
    }
   
    /*if (regexName.test(nameInputVal)) {
        regexName === true;
    } else {
        regexName === false;
    }
    */
//NOTE: use - DOM manipulation: form validaton as guidance
    /*if (isValidActivity()) {
        registerActivity.closest('label').className = "valid";
        registerActivity.nextElementSibling.style.display = "none";
    } else {
        e.preventDefault();
        registerActivity.closest('label').className = "error";
        registerActivity.nextElementSibling.style.display = "block";
    }
    */
    if (isValidEmail) {
        emailAddress.closest('label').className = "valid";
        emailAddress.nextElementSibling.style.display = "none";
    } else {
        e.preventDefault();
        emailAddress.closest('label').className = "error";
        emailAddress.nextElementSibling.style.display = "block";
    }

    if (isValidCardNum) {
        cardNumber.closest('label').className = "valid";
        cardNumber.nextElementSibling.style.display = "none";
    } else {
        e.preventDefault();
        cardNumber.closest('label').className = "error";
        cardNumber.nextElementSibling.style.display = "block";
    }

    if (isValidZip) {
        zipCode.closest('label').className = "valid";
        zipCode.nextElementSibling.style.display = "none";
    } else {
        e.preventDefault();
        zipCode.closest('label').className = "error";
        zipCode.nextElementSibling.style.display = "block";
    }

    if (isValidCvv) {
        cardVerif.closest('label').className = "valid";
        cardVerif.nextElementSibling.style.display = "none";
    } else {
        e.preventDefault();
        cardVerif.closest('label').className = "error";
        cardVerif.nextElementSibling.style.display = "block";
    }

    /*if (isValidform()) {
        form.closest('label').className = "valid";
        form.nextElementSibling.style.display = "none";
    } else {
        e.preventDefault();
        form.closest('label').className = "error";
        form.nextElementSibling.style.display = "block";
    }
    */


//9. Accessibility

const activityType = document.querySelectorAll('#activities-box input[type="checkbox"]'); //document.getElementById('activities'); //maybe ('#activities-box');
    console.log(activityType)

 for (let i = 0; i < activityType.length; i++) {
    activityType[i].addEventListener('focus', () => {
        activityType[i].classList.add('focus');
    });
    activityType[i].addEventListener('blur', () => {
        activityType[i].classList.remove('focus');
    });
}

if (nameValue === '') {
    nameField.className.add('not-valid');
    nameField.className.remove('valid');
    nameField.lastElementChild.style.display = 'none';
} else {
    nameField.className.add('valid');
    nameField.className.remove('not-valid');
    nameField.lastElementChild.style.display = 'block'
}
});



