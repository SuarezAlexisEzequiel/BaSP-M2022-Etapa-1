//DOM
var btnSignUpSubmit = document.getElementById('signup-submit');
var inputSignUpName = document.getElementById('signup-name');
var inputSignUpLName = document.getElementById('signup-lastname');
var inputSignUpDni = document.getElementById('signup-dni');
var inputSignUpBirthDate = document.getElementById('signup-birthday');
var inputSignUpPhNumb = document.getElementById('signup-phnum');
var inputSignUpAddress = document.getElementById('signup-address');
var inputSignUpHometown = document.getElementById('signup-hometown');
var inputSignUpPosCode = document.getElementById('signup-poscode');
var inputSignUpEmail = document.getElementById('signup-email');
var inputSignUpPassword = document.getElementById('signup-pwd');
var inputSignUpRPassword = document.getElementById('signup-rpwd');

// Var
var nameSignUpValidateRes;
var lNameSignUpValidateRes;
var dniSignUpValidateRes;
var birthdaySignUpValidateRes;
var phNumSignUpValidateRes;
var addressSignUpValidateRes;
var hometownSignUpValidateRes;
var poscodeSignUpValidateRes;
var emailSignUpValidateRes;
var emaiSignUplFormatSU = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var pwdSignUpValidateRes;
var rpwdSignUpValidateRes;

// Listener
btnSignUpSubmit.addEventListener('click', validateSignUpInfo);
inputSignUpName.addEventListener('blur', validateName);
inputSignUpLName.addEventListener('blur', validateLName);
inputSignUpDni.addEventListener('blur', validateDni);
inputSignUpBirthDate.addEventListener('blur', validateBirthDate);
inputSignUpPhNumb.addEventListener('blur', validatePhNumb);
inputSignUpAddress.addEventListener('blur', validateAddress);
inputSignUpHometown.addEventListener('blur', validateHometown);
inputSignUpPosCode.addEventListener('blur', validatePosCode);
inputSignUpEmail.addEventListener('blur', validateSignUpEmail);
inputSignUpPassword.addEventListener('blur', validateSignUpPwd);
inputSignUpRPassword.addEventListener('blur', validateRPwd);
inputSignUpName.addEventListener('focus', signUpFocus);
inputSignUpLName.addEventListener('focus', signUpFocus);
inputSignUpDni.addEventListener('focus', signUpFocus);
inputSignUpBirthDate.addEventListener('focus', signUpFocus);
inputSignUpPhNumb.addEventListener('focus', signUpFocus);
inputSignUpAddress.addEventListener('focus', signUpFocus);
inputSignUpHometown.addEventListener('focus', signUpFocus);
inputSignUpPosCode.addEventListener('focus', signUpFocus);
inputSignUpEmail.addEventListener('focus', signUpFocus);
inputSignUpPassword.addEventListener('focus', signUpFocus);
inputSignUpRPassword.addEventListener('focus', signUpFocus);

// Functions

function validateName(e) {
    var containerName = e.target.parentElement;
    if (e.target.value.length > 3 && isNaN(e) == true) {
        nameValidateRes = 'Cool name';
        e.target.className = 'valid';
        containerName = 'valid';
    } else {
        nameValidateRes = 'Sorry I dont think that is a name';
        e.target.className = 'invalid';
        containerName = 'invalid';
    }
}

function validateLName(e) {
    var containerLName = e.target.parentElement;
    if (e.target.value.length > 3 && isNaN(e.target) == true) {
        lNameValidateRes = 'That lastname rocks';
        e.target.className = 'valid';
        containerLName = 'valid';
    } else {
        lNameValidateRes = 'Must have more than 3 characters. Only Text'
        e.target.className = 'invalid';
        containerLName = 'invalid';
    }
}

function validateDni(e) {
    var containerDni = e.target.parentElement;
    if (e.target.value.length >= 7 && isNaN(e.target) == false) {
        dniValidateRes = 'Correct';
        e.target.className = 'valid';
        containerDni = 'valid';
    } else {
        dniValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerDni = 'invalid';
    }
}
// TODAVIA HAY QUE VALIDARLO A ESTE
function validateBirthDate(e) {
    var containerBirth = e.target.parentElement;
    
}

function validatePhNumb(e) {
    var containerPhNum = e.target.parentElement;
    if (e.target.value.length = 10 && isNaN(e.target) == false) {
        phNumValidateRes = 'Correct';
        e.target.className = 'valid';
        containerPhNum = 'valid';
    } else {
        phNumValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerPhNum = 'invalid';
    }
}
// LE FALTA EL ESPACIO A ADDRESS
function validateAddress(e) {
    var containerAddress = e.target.parentElement;
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var num = 0;
    var char = 0;
    for (i = 0; i < e.target.value.length; i++) {
        if (numbers.includes(e.target.value[i])) {
            num++;
        } else {
            char++;
        }
    }
    var containerPwd = e.target.parentElement;
    if (e.target.value.length >= 5 && num >= 1 && char >= 1) {
        addressValidateRes = 'Correct';
        e.target.className = 'valid';
        containerAddress.className = 'valid';
    } else {
        addressValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerAddress.className = 'invalid';
    }
}

function validateHometown(e) {
    var containerHometown = e.target.parentElement;
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var num = 0;
    var char = 0;
    for (i = 0; i < e.target.value.length; i++) {
        if (numbers.includes(e.target.value[i])) {
            num++;
        } else {
            char++;
        }
    }
    var containerPwd = e.target.parentElement;
    if (e.target.value.length >= 3 && num >= 1 && char >= 1) {
        hometownValidateRes = 'Correct';
        e.target.className = 'valid';
        containerHometown.className = 'valid';
    } else {
        hometownValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerHometown.className = 'invalid';
    }
}

function validatePosCode(e) {
    var containerPosCode = e.target.parentElement;
    if (e >= 4 && e <= 5 && isNaN(e) == false) {
        poscodeValidateRes = 'Correct';
        e.target.className = 'valid';
        containerPosCode = 'valid';
    } else {
        poscodeValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerPosCode = 'invalid';
    }
    
}

function validateSignUpEmail (e) {
    var containerEm = e.target.parentElement;
    if (emailFormatSU.test(e.target.value) == true) {
        emailValidateRes = 'Correct';
        e.target.className = 'valid';
        containerEm.className = 'valid';
    } else {
        emailValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerEm.className = 'invalid';
    }
}

function validateSignUpPwd (e) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var num = 0;
    var char = 0;
    for (i = 0; i < e.target.value.length; i++) {
        if (numbers.includes(e.target.value[i])) {
            num++;
        } else {
            char++;
        }
    }
    var containerPwd = e.target.parentElement;
    if (e.target.value.length >= 8 && num >= 1 && char >= 1) {
        pwdSignUpValidateRes = 'Correct';
        e.target.className = 'valid';
        containerPwd.className = 'valid';
    } else {
        pwdSignUpValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerPwd.className = 'invalid';
    }
}

function validateRPwd(a, b) {
    containerRPwd = e.target.parentElement;
    if (e.target.value == inputSignUpPassword) {
        inputSignUpRPassword = 'Passwords match';
        e.target.className = 'valid';
        containerRPwd = 'valid';
    } else {
        inputSignUpRPassword = 'Passwords do not match';
        e.target.className = 'invalid';
        containerRPwd = 'invalid';
    }
}

function signUpFocus(e) {
    var containerFocus = e.target.parentElement;
    containerFocus.className = 'normal';
}

function validateSignUpInfo (e) {
    e.preventDefault();
    window.alert(
        ' Name: ' + emailValidateRes +
        '\n Lastname: ' + emailValidateRes +
        '\n DNI: ' + emailValidateRes +
        '\n Birthday Date: ' + emailValidateRes +
        '\n Phone Number: ' + emailValidateRes +
        '\n Address: ' + emailValidateRes +
        '\n Hometown: ' + emailValidateRes +
        '\n Postal Code: ' + emailValidateRes +
        '\n Email: ' + emailValidateRes +
        '\n Password: ' + pwdValidateRes +
        '\n Repeat Password: ' + pwdValidateRes
    );
    console.log(
        ' Name: ' + emailValidateRes +
        '\n Lastname: ' + emailValidateRes +
        '\n DNI: ' + emailValidateRes +
        '\n Birthday Date: ' + emailValidateRes +
        '\n Phone Number: ' + emailValidateRes +
        '\n Address: ' + emailValidateRes +
        '\n Hometown: ' + emailValidateRes +
        '\n Postal Code: ' + emailValidateRes +
        '\n Email: ' + emailValidateRes +
        '\n Password: ' + pwdValidateRes +
        '\n Repeat Password: ' + pwdValidateRes
    );    
}