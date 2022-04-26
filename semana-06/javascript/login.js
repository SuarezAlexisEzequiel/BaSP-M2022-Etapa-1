window.onload = function () {
    var loginForm = document.getElementById('login-form');
    var inputEmail = document.getElementById('login-email');
    var inputPwd = document.getElementById('login-pwd');

    var emailValidateRes;
    var pwdValidateRes;

    loginForm.addEventListener('submit', validateLoginInfo);
    loginEmail.addEventListener('blur', validateEmailInfo)

    function validateEmailInfo(e) {
        e.preventDefault();
        var regExpEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (regExpEmail.test(e) = true ) {
            emailValidateRes = 'Correct';
        } else {
            emailValidateRes = 'Incorrect';
        }
        return emailValidateRes
    }
    function validatePwd(e) {
        e.preventDefault();
        // Podria usar una regex /[0-9]{8}/
        var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var num = 0;
        var char = 0;
        for (i = 0; i < e.value.length; i++) {
            if (numbers.includes(e.value[i])) {
                num++;
            } else {
                char++;
            }
        }
        if (e.value.length >= 8 && num >= 1 && char >= 1) {
            pwdValidateRes = 'Corect';
        } else {
            pwdValidateRes = 'Incorrect';
        }
    }
    
    function validateLoginInfo(e) {
        e.preventDefault();
        window.alert('Email: ' + emailValidateRes);
        console.log('Email: ' + emailValidateRes);
        window.alert('Password: ' + pwdValidateRes);
        console.log('Password: ' + pwdValidateRes);
    }
}