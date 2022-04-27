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
var emailSignUpFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var pwdSignUpValidateRes;
var pwdValue;
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
    if (e.target.value.length > 3 && isNaN(e.target) == true) {
        nameSignUpValidateRes = 'Cool name';
        e.target.className = 'valid';
        containerName.className = 'valid';
    } else {
        nameSignUpValidateRes = 'Sorry I dont think that is a name';
        e.target.className = 'invalid';
        containerName.className = 'invalid';
    }
}

function validateLName(e) {
    var containerLName = e.target.parentElement;
    if (e.target.value.length > 3 && isNaN(e.target.value) == true) {
        lNameSignUpValidateRes = 'That lastname rocks';
        e.target.className = 'valid';
        containerLName.className = 'valid';
    } else {
        lNameSignUpValidateRes = 'Must have more than 3 characters. Only Text'
        e.target.className = 'invalid';
        containerLName.className = 'invalid';
    }
}

function validateDni(e) {
    var containerDni = e.target.parentElement;
    if (e.target.value.length >= 7 && isNaN(e.target.value) == false) {
        dniSignUpValidateRes = 'Correct';
        e.target.className = 'valid';
        containerDni.className = 'valid';
    } else {
        dniSignUpValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerDni.className = 'invalid';
    }
}

function validateBirthDate(e) {
    var containerBirthdayDate = e.target.parentElement;
    if (Date.parse(e.target.value) > Date.now() ) {
        birthdaySignUpValidateRes = 'Invalid date';
        e.target.className = 'invalid';
        containerBirthdayDate.className = 'invalid';
    } else {
        birthdaySignUpValidateRes = 'Correct';
        e.target.className = 'valid';
        containerBirthdayDate.className = 'valid';
    }
}

function validatePhNumb(e) {
    var containerPhNum = e.target.parentElement;
    if (e.target.value.length = 10 && isNaN(e.target.value) == false) {
        phNumSignUpValidateRes = 'Correct';
        e.target.className = 'valid';
        containerPhNum.className = 'valid';
    } else {
        phNumSignUpValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerPhNum.className = 'invalid';
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
    var containerAddress = e.target.parentElement;
    if (e.target.value.length >= 5 && num >= 1 && char >= 1) {
        addressSignUpValidateRes = 'Correct';
        e.target.className = 'valid';
        containerAddress.className = 'valid';
    } else {
        addressSignUpValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerAddress.className = 'invalid';
    }
}

function validateHometown(e) {
    var containerHometown = e.target.parentElement;
    if (e.target.value.length >= 3) {
        hometownSignUpValidateRes = 'Correct';
        e.target.className = 'valid';
        containerHometown.className = 'valid';
    } else {
        hometownSignUpValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerHometown.className = 'invalid';
    }
}

function validatePosCode(e) {
    var containerPosCode = e.target.parentElement;
    if (e.target.value.lenght >= 4 && e.target.value.lenght <= 5 && isNaN(e.target.value) == false) {
        poscodeSignUpValidateRes = 'Correct';
        e.target.className = 'valid';
        containerPosCode.className = 'valid';
    } else {
        poscodeSignUpValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerPosCode.className = 'invalid';
    }
    
}

function validateSignUpEmail (e) {
    var containerEm = e.target.parentElement;
    if (emailSignUpFormat.test(e.target.value) == true) {
        emailSignUpValidateRes = 'Correct';
        e.target.className = 'valid';
        containerEm.className = 'valid';
    } else {
        emailSignUpValidateRes = 'Incorrect';
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
        pwdValue = e.target.value;
    } else {
        pwdSignUpValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerPwd.className = 'invalid';
    }
}

function validateRPwd(e) {
    containerRPwd = e.target.parentElement;
    if (e.target.value == pwdValue) {
        rpwdSignUpValidateRes = 'Passwords match';
        e.target.className = 'valid';
        containerRPwd.className = 'valid';
    } else {
        rpwdSignUpValidateRes = 'Passwords do not match';
        e.target.className = 'invalid';
        containerRPwd.className = 'invalid';
    }
}

function signUpFocus(e) {
    var containerFocus = e.target.parentElement;
    containerFocus.className = 'normal';
}

function validateSignUpInfo (e) {
    e.preventDefault();
    window.alert(
        ' Name: ' + nameSignUpValidateRes +
        '\n Lastname: ' + lNameSignUpValidateRes +
        '\n DNI: ' + dniSignUpValidateRes +
        '\n Birthday Date: ' + birthdaySignUpValidateRes +
        '\n Phone Number: ' + phNumSignUpValidateRes +
        '\n Address: ' + addressSignUpValidateRes +
        '\n Hometown: ' + hometownSignUpValidateRes +
        '\n Postal Code: ' + poscodeSignUpValidateRes +
        '\n Email: ' + emailSignUpValidateRes +
        '\n Password: ' + pwdSignUpValidateRes +
        '\n Repeat Password: ' + rpwdSignUpValidateRes
    );
    console.log(
        ' Name: ' + nameSignUpValidateRes +
        '\n Lastname: ' + lNameSignUpValidateRes +
        '\n DNI: ' + dniSignUpValidateRes +
        '\n Birthday Date: ' + birthdaySignUpValidateRes +
        '\n Phone Number: ' + phNumSignUpValidateRes +
        '\n Address: ' + addressSignUpValidateRes +
        '\n Hometown: ' + hometownSignUpValidateRes +
        '\n Postal Code: ' + poscodeSignUpValidateRes +
        '\n Email: ' + emailSignUpValidateRes +
        '\n Password: ' + pwdSignUpValidateRes +
        '\n Repeat Password: ' + rpwdSignUpValidateRes
    );    
}