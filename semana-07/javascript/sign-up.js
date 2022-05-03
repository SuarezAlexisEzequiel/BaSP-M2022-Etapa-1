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
var nameSignUpValue;
var lNameSignUpValidateRes;
var lNameSignUpValue;
var dniSignUpValidateRes;
var dniSignUpValue;
var birthdaySignUpValidateRes;
var birthdaySignUpValue;
var phNumSignUpValidateRes;
var phNumSignUpValue;
var addressSignUpValidateRes;
var addressSignUpValue;
var hometownSignUpValidateRes;
var hometownSignUpValue;
var poscodeSignUpValidateRes;
var poscodeSignUpValue;
var emailSignUpValidateRes;
var emailSignUpValue;
var emailSignUpFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var pwdSignUpValidateRes;
var pwdSignUpValue;
var pwdValue;
var rpwdSignUpValidateRes;
var rpwdSignUpValue;

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

// LocalStorage
if (localStorage.length > 0) {
    inputSignUpName.value = localStorage.getItem('name');
    inputSignUpLName.value = localStorage.getItem('lastName');
    inputSignUpDni.value = localStorage.getItem('dni');
    inputSignUpBirthDate.value = dateFormat(localStorage.getItem('dob'),false);
    inputSignUpPhNumb.value = localStorage.getItem('phone');
    inputSignUpAddress.value = localStorage.getItem('address');
    inputSignUpHometown.value = localStorage.getItem('city');
    inputSignUpPosCode.value = localStorage.getItem('zip');
    inputSignUpEmail.value = localStorage.getItem('email');
    inputSignUpPassword.value = localStorage.getItem('password');
    inputSignUpRPassword.value=localStorage.getItem('password');
};

// Functions

function validateName(e) {
    var containerName = e.target.parentElement;
    if (e.target.value.length > 3 && isNaN(e.target.value) == true) {
        nameSignUpValidateRes = e.target.value + ', OK';
        nameSignUpValue = true;
        e.target.className = 'valid';
        containerName.className = 'valid';
    } else {
        nameSignUpValidateRes = e.target.value + ', sorry I dont think that is a name';
        nameSignUpValue = false;
        e.target.className = 'invalid';
        containerName.className = 'invalid';
    }
}

function validateLName(e) {
    var containerLName = e.target.parentElement;
    if (e.target.value.length > 3 && isNaN(e.target.value) == true) {
        lNameSignUpValidateRes = e.target.value + ', OK';
        lNameSignUpValue = true;
        e.target.className = 'valid';
        containerLName.className = 'valid';
    } else {
        lNameSignUpValidateRes = e.target.value + ', must have more than 3 characters. Only Text';
        lNameSignUpValue = false;
        e.target.className = 'invalid';
        containerLName.className = 'invalid';
    }
}

function validateDni(e) {
    var containerDni = e.target.parentElement;
    if (e.target.value.length >= 7 && isNaN(e.target.value) == false) {
        dniSignUpValidateRes = e.target.value + ', OK';
        dniSignUpValue = true;
        e.target.className = 'valid';
        containerDni.className = 'valid';
    } else {
        dniSignUpValidateRes = e.target.value + ', incorrect';
        dniSignUpValue = false;
        e.target.className = 'invalid';
        containerDni.className = 'invalid';
    }
}

function validateBirthDate(e) {
    var containerBirthdayDate = e.target.parentElement;
    if (Date.parse(e.target.value) > Date.now() ) {
        birthdaySignUpValidateRes = e.target.value + ', invalid date';
        birthdaySignUpValue = false;
        e.target.className = 'invalid';
        containerBirthdayDate.className = 'invalid';
    } else {
        birthdaySignUpValidateRes = e.target.value + ', OK';
        birthdaySignUpValue = true;
        e.target.className = 'valid';
        containerBirthdayDate.className = 'valid';
    }
}

function validatePhNumb(e) {
    var containerPhNum = e.target.parentElement;
    if (e.target.value.length = 10 && isNaN(e.target.value) == false) {
        phNumSignUpValidateRes = e.target.value + ', OK';
        phNumSignUpValue = true;
        e.target.className = 'valid';
        containerPhNum.className = 'valid';
    } else {
        phNumSignUpValidateRes = e.target.value + ', incorrect';
        phNumSignUpValue = false;
        e.target.className = 'invalid';
        containerPhNum.className = 'invalid';
    }
}

function validateAddress(e) {
    var containerAddress = e.target.parentElement;
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w',
    'x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X',
    'Y','Z'];
    var spaceBetween = [' '];
    var num = 0;
    var char = 0;
    var symbol = 0;
    var space = 0;
    for (i = 0; i < e.target.value.length; i++) {
        if (numbers.includes(e.target.value[i])) {
            num++;
        } else if (letters.includes(e.target.value[i])){
            char++;
        } else if (spaceBetween.includes(e.target.value[i])){
            space++;
        } else {
            symbol++;
        }
    }
    var containerAddress = e.target.parentElement;
    if (e.target.value.length >= 5 && num >= 1 && char >= 1 && symbol == 0 && space >= 1) {
        addressSignUpValidateRes = e.target.value + ', OK';
        addressSignUpValue = true;
        e.target.className = 'valid';
        containerAddress.className = 'valid';
    } else {
        addressSignUpValidateRes = e.target.value + ', incorrect';
        addressSignUpValue = false;
        e.target.className = 'invalid';
        containerAddress.className = 'invalid';
    }
}

function validateHometown(e) {
    var containerHometown = e.target.parentElement;
    if (e.target.value.length >= 3) {
        hometownSignUpValidateRes = e.target.value + ', OK';
        hometownSignUpValue = true;
        e.target.className = 'valid';
        containerHometown.className = 'valid';
    } else {
        hometownSignUpValidateRes = e.target.value + ', incorrect';
        hometownSignUpValue = false;
        e.target.className = 'invalid';
        containerHometown.className = 'invalid';
    }
}

function validatePosCode(e) {
    var containerPosCode = e.target.parentElement;
    if (e.target.value.lenght >= 3 && e.target.value.lenght <= 6 && isNaN(e.target.value) === false) {
        poscodeSignUpValidateRes = e.target.value + ', OK';
        poscodeSignUpValue = true;
        e.target.className = 'valid';
        containerPosCode.className = 'valid';
    } else {
        poscodeSignUpValidateRes = e.target.value + ', incorrect';
        poscodeSignUpValue = true;
        e.target.className = 'false';
        containerPosCode.className = 'false';
    }
}

function validateSignUpEmail (e) {
    var containerEm = e.target.parentElement;
    if (emailSignUpFormat.test(e.target.value) == true) {
        emailSignUpValidateRes = e.target.value + ', OK';
        emailSignUpValue = true;
        e.target.className = 'valid';
        containerEm.className = 'valid';
    } else {
        emailSignUpValidateRes = e.target.value + ', incorrect';
        emailSignUpValue = false;
        e.target.className = 'invalid';
        containerEm.className = 'invalid';
    }
}

function validateSignUpPwd (e) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w',
    'x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X',
    'Y','Z'];
    var num = 0;
    var char = 0;
    var symbol = 0;
    for (i = 0; i < e.target.value.length; i++) {
        if (numbers.includes(e.target.value[i])) {
            num++;
        } else if (letters.includes(e.target.value[i])){
            char++;
        } else {
            symbol++;
        }
    }
    var containerPwd = e.target.parentElement;
    if (e.target.value.length >= 8 && num >= 1 && char >= 1 && symbol == 0) {
        pwdSignUpValidateRes = e.target.value + ', OK';
        pwdSignUpValue = true;
        e.target.className = 'valid';
        containerPwd.className = 'valid';
        pwdValue = e.target.value;
    } else {
        pwdSignUpValidateRes = e.target.value + ', incorrect';
        pwdSignUpValue = false;
        e.target.className = 'invalid';
        containerPwd.className = 'invalid';
    }
}

function validateRPwd(e) {
    containerRPwd = e.target.parentElement;
    if (e.target.value == pwdValue) {
        rpwdSignUpValidateRes = e.target.value + ', OK';
        rpwdSignUpValue = true;
        e.target.className = 'valid';
        containerRPwd.className = 'valid';
    } else {
        rpwdSignUpValidateRes = e.target.value + ', passwords do not match';
        rpwdSignUpValue = false;
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
    if (
        nameSignUpValue == true &&
        lNameSignUpValue == true &&
        dniSignUpValue == true &&
        birthdaySignUpValue == true &&
        phNumSignUpValue == true &&
        addressSignUpValue == true &&
        hometownSignUpValue == true &&
        poscodeSignUpValue == true &&
        emailSignUpValue == true &&
        pwdSignUpValue == true &&
        rpwdSignUpValue == true
    ) {
        // window.alert('All inputs checked, signup succes. Account created.');
        console.log('All inputs checked, signup succes. Account created.');
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
        fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?name='+inputSignUpName.value+'&lastName='+
            inputSignUpLName.value+'&dni='+inputSignUpDni.value+'&dob='+dateFormat(inputSignUpBirthDate.value,true)+
            '&phone='+inputSignUpPhNumb.value+'&address='+inputSignUpAddress.value+'&city='+inputSignUpHometown.value+
            '&zip='+inputSignUpPosCode.value+'&email='+inputSignUpEmail.value+'&password='+inputSignUpPassword.value)
            .then(function (response) {
                return response.json()
            })
            .then(function (jsonResponse) {
                if (jsonResponse.success) {
                    alert('All inputs checked, signup succes. Account created: '+ jsonResponse.msg)
                    saveData(jsonResponse);
                } else {
                throw jsonResponse
                }
            })
            .catch(function (error) {
                displayError(error);
            });
    } else {
        window.alert('Something gone wrong, please check the input fields');
        console.log('Something gone wrong, please check the input fields');
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
}

// fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?email=’ + inputEmail.value + '&password=' + inputPassword.value)
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (jsonResponse) {
//     console.log("json", jsonResponse)
//     if (jsonResponse.success) {
//       console.log("Good", jsonResponse)
// 	< --- LÓGICA CUANDO LA REQUEST ES EXITOSA Y MOSTRAR UN ALERT --- >
//     } else {
//       throw jsonResponse
//     }
//   })
//   .catch(function (error) {
//     console.warn('Error', error ) < --- LÓGICA CUANDO LA REQUEST SALE MAL --- >
//   }
// )