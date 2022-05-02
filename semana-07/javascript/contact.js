// DOM
var btnContactSubmit = document.getElementById('landing-submit');
var inputContactName = document.getElementById('form-name');
var inputContactEmail = document.getElementById('form-email');
var inputContactSector = document.getElementById('form-sector');
var inputContactPhNum = document.getElementById('form-phone');

// Var
var nameContactValidateRes;
var emailContactFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var emailContactValidateRes;
var sectorContactValidateRes;
var phnumContactValidateRes;

// Listener
btnContactSubmit.addEventListener('click', validateContactInfo);
inputContactName.addEventListener('blur', validateContactName);
inputContactEmail.addEventListener('blur', validateContactEmail);
inputContactSector.addEventListener('blur', validateContactSector);
inputContactPhNum.addEventListener('blur', validateContactPhNum);
inputContactName.addEventListener('focus', contactFocus);
inputContactEmail.addEventListener('focus', contactFocus);
inputContactSector.addEventListener('focus', contactFocus);
inputContactPhNum.addEventListener('focus', contactFocus);

// Functions

function validateContactName(e) {
    var containerContactName = e.target.parentElement;
    if (e.target.value.length > 3 && isNaN(e) == true) {
        nameContactValidateRes = 'Cool name';
        e.target.className = 'valid';
        containerName.className = 'valid';
    } else {
        nameContactValidateRes = 'Sorry I dont think that is a name';
        e.target.className = 'invalid';
        containerName.className = 'invalid';
    }
}

function validateContactEmail (e) {
    var containerContactEm = e.target.parentElement;
    if (emailSignUpFormat.test(e.target.value) == true) {
        emailContactFormat = 'Correct';
        e.target.className = 'valid';
        containerContactEm.className = 'valid';
    } else {
        emailContactFormat = 'Incorrect';
        e.target.className = 'invalid';
        containerContactEm.className = 'invalid';
    }
}

function validateContactSector(e) {
    var containerContactSector = e.target.parentElement;
    if (e.target.value != '-') {
        sectorContactValidateRes = 'Cool name';
        e.target.className = 'valid';
        containerContactSector.className = 'valid';
    } else {
        sectorContactValidateRes = 'You must to choose a sector';
        e.target.className = 'invalid';
        containerContactSector.className = 'invalid';
    }
}

function validateContactPhNum(e) {
    var containerContactPhNum = e.target.parentElement;
    if (e.target.value.length = 10 && isNaN(e.target) == false) {
        phNumSignUpValidateRes = 'Correct';
        e.target.className = 'valid';
        containerContactPhNum.className = 'valid';
    } else {
        phNumSignUpValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerContactPhNum.className = 'invalid';
    }
}

function contactFocus(e) {
    var containerContactFocus = e.target.parentElement;
    containerContactFocus.className = 'normal';
}

function validateContactInfo (e) {
    e.preventDefault();
    window.alert(
        ' Name: ' + nameContactValidateRes +
        '\n Email: ' + emailContactValidateRes +
        '\n Sector: ' + sectorContactValidateRes +
        '\n Phone Number: ' + phnumContactValidateRes
    );
    console.log(
        ' Name: ' + nameContactValidateRes +
        '\n Email: ' + emailContactValidateRes +
        '\n Sector: ' + sectorContactValidateRes +
        '\n Phone Number: ' + phnumContactValidateRes
    );  
}