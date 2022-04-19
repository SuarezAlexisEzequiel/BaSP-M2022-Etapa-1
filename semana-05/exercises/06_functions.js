console.log('\n--EXERCISE 6: FUNCTIONS');

/* Punto A - Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función
y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log('\n-Exercise 6.a');
function sumA(a,b) {
    return a + b;
}
var sumNum1 = parseFloat(prompt('Write the 1st number'));
var sumNum2 = parseFloat(prompt('Write the 2nd number'));
var sumFunction1 = sumA(sumNum1,sumNum2);
console.log(sumNum1 + ' + ' + sumNum2 + ' = ' + sumFunction1);

/* Punto B - A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un
número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log('\n-Exercise 6.b');
function sumB(a,b) {
    if (isNaN(parseFloat(a)) != true) {
        if (isNaN(parseFloat(b)) != true) {
            outcome = a + b;
        } else {
            outcome ='"' + b + '" it is not a number (' + parseFloat(b) + ')';
        }
    } else if (typeof b == 'number') {
        outcome ='"' + a + '" it is not a number (' + parseFloat(a) + ')';
    } else {
        outcome ='"' + a + '" and "' + b + '" are not a numbers (' + parseFloat(a) + ',' + parseFloat(b) + ')';
    }
    return outcome;
}
var sumNum3 = prompt('Write the 1st number');
var sumNum4 = prompt('Write the 2nd number');
var sumFunction2 = sumB(sumNum3,sumNum4);
console.log(sumNum3 + ' + ' + sumNum4 + ' = ' + sumFunction2);

/* Punto C - Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un
número entero. */

console.log('\n-Exercise 6.c');
function validateInteger(a) {
    if (a % 1 === 0) {
        outcome = 'true';
    } else {
        outcome = 'false';
    }
    return outcome;
}
var valNum1 = parseFloat(prompt('Write the number'));
console.log(validateInteger(valNum1));

/* Punto D - A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En
caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */

console.log('\n-Exercise 6.d');
function sumD(a,b) {
    if (isNaN(parseFloat(a)) != true) {
        a = parseFloat(a);
        if (isNaN(parseFloat(b)) != true) {
            b = parseFloat(b);
            if (a % 1 === 0) {
                if (b % 1 === 0) {
                    outcome = a + b;
                } else {
                    window.alert(b + ' It is not a integer. So it was rounded to ' + Math.round(b));
                    console.log(b + ' It is not a integer. So it was rounded to ' + Math.round(b));
                    outcome = a + Math.round(b);
                }
            } else if (b % 1 === 0) {
                window.alert(a + ' It is not a integer. So it was rounded to ' + Math.round(a));
                console.log(a + ' It is not a integer. So it was rounded to ' + Math.round(a));
                outcome = Math.round(a) + b;
            } else {
                window.alert(a + ' and ' + b + ' They are not integer. So they was rounded to '
                + Math.round(a) + ' and ' + Math.round(b));
                console.log(a + ' and ' + b + ' They are not integer. So they was rounded to '
                + Math.round(a) + ' and ' + Math.round(b));
                outcome = Math.round(a) + Math.round(b);
            }
        } else {
            outcome ='"' + b + '" it is not a number';
        }
    } else if (isNaN(parseFloat(b)) != true) {
        outcome ='"' + a + '" it is not a number';
    } else {
        outcome ='"' + a + '" and "' + b + '" are not a numbers';
    }
    return outcome;
}
var sumNum5 = prompt('Write the 1st number');
var sumNum6 = prompt('Write the 2nd number');
var sumFunction3 = sumD(sumNum5,sumNum6);
console.log(Math.round(sumNum5) + ' + ' + Math.round(sumNum6) + ' = ' + sumFunction3);

/* Punto E - Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función
suma probando que todo siga funcionando igual. */

console.log('\n-Exercise 6.e');
function isInteger(a) {
    if (a % 1 === 0) {
        outcome = a;
    } else {
        window.alert(a + ' It is not a integer. So it was rounded to ' + Math.round(a));
        console.log(a + ' It is not a integer. So it was rounded to ' + Math.round(a));
        outcome = Math.round(a);
    }
    return outcome;
}
function sumB(a,b) {
    if (isNaN(parseFloat(a)) != true) {
        if (isNaN(parseFloat(b)) != true) {
            outcome = isInteger(parseFloat(a)) + isInteger(parseFloat(b));
        } else {
            outcome ="'" + b + "' it's not a number";
        }
    } else if (isNaN(parseFloat(b)) != true) {
        outcome ="'" + a + "' it's not a number"
    } else {
        outcome ='"' + a + '" and "' + b + '" are not a numbers';
    }
    return outcome;
}
var sumNum7 = prompt('Write the 1st number');
var sumNum8 = prompt('Write the 2nd number');
var sumFunction4 = sumB(sumNum7,sumNum8);
console.log(Math.round(sumNum7) + ' + ' + Math.round(sumNum8) + ' = ' + sumFunction4);