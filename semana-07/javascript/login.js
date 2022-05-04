//DOM
var btnSubmit = document.getElementById('login-submit');
var inputEmail = document.getElementById('login-email');
var inputPassword = document.getElementById('login-pwd');

// Var
var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var emailValidateRes;
var emailLogInValue;
var pwdValidateRes;
var pwdLogInValue;
var emailCorrectValue = 'rose@radiumrocket.com';
var pwdCorrectValue = 'BaSP2022';

// Listener
btnSubmit.addEventListener('click', validateLoginInfo);
inputEmail.addEventListener('blur', validateEmail);
inputEmail.addEventListener('focus', inFocusEmail);
inputPassword.addEventListener('blur', validatePassword);
inputPassword.addEventListener('focus', inFocusPwd);

// LocalStorage
if (localStorage.length > 0) {
    inputEmail.value = localStorage.getItem('email') ? localStorage.getItem('email') : '';
    inputPassword.value = localStorage.getItem('password') ? localStorage.getItem('password') : '';
};

// Functions
function validateEmail (e) {
    var containerE = e.target.parentElement;
    if (emailFormat.test(e.target.value) == true && e.target.value == emailCorrectValue) {
        emailValidateRes = 'Correct';
        emailLogInValue = true;
        e.target.className = 'valid';
        containerE.className = 'valid';
        localStorage.setItem('email', e.target.value);
    } else {
        emailValidateRes = 'Incorrect';
        emailLogInValue = false;
        e.target.className = 'invalid';
        containerE.className = 'invalid';
    }
    // emailLogInValue = e.target.value == 'rose@radiumrocket.com' ? true : false;
}

function validatePassword(e) {
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
    var containerP = e.target.parentElement;
    if (e.target.value.length >= 8 && num >= 1 && char >= 1 && e.target.value == pwdCorrectValue) {
        pwdValidateRes = 'Correct';
        pwdLogInValue = true;
        e.target.className = 'valid';
        containerP.className = 'valid';
        localStorage.setItem('password', e.target.value);
    } else {
        pwdValidateRes = 'Incorrect';
        pwdLogInValue = false;
        e.target.className = 'invalid';
        containerP.className = 'invalid';
    }
    // pwdLogInValue = e.target.value == 'BaSP2022' ? true : false;
}

function inFocusEmail(x) {
    var containerFE = x.target.parentElement;
    containerFE.className = 'normal';
}

function inFocusPwd(y) {
    var containerFP = y.target.parentElement;
    containerFP.className = 'normal';
}

function validateLoginInfo (e) {
    e.preventDefault();
    if (emailLogInValue == true && pwdLogInValue == true) {
        console.log('All inputs checked, succesfully login. Welcome!');
        fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email='+inputEmail.value+'&password='+inputPassword.value)
            .then(function (response) {
                return response.json()
            })
            .then(function (jsonResponse) {
                if (jsonResponse.success) {
                    alert('All inputs checked, succesfully login. Welcome! :'+ jsonResponse.msg)
                    window.alert('Email: ' + emailValidateRes + '\nPassword: ' + pwdValidateRes);
                    console.log('Email: ' + emailValidateRes + '\nPassword: ' + pwdValidateRes);
                } else {
                throw jsonResponse
                }
            })
            .catch(function (error) {
                console.warn('Error', error );
            });
    } else {
        window.alert('Something gone wrong, please check the input fields');
        console.log('Something gone wrong, please check the input fields');
        window.alert('Email: ' + emailValidateRes + '\nPassword: ' + pwdValidateRes);
        console.log('Email: ' + emailValidateRes + '\nPassword: ' + pwdValidateRes);
    }
}