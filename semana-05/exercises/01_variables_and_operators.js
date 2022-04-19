console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

/* Punto A - Crear 2 variables numericas y utilizar el operador suma para guardar el valor de
la suma de ambos numeros en una 3er variable */

console.log('-Exercise 1.a:');
var numOne = parseFloat(prompt('Write the 1st number'));
var numTwo = parseFloat(prompt('Write the 2nd number'));
var numThree = numOne + numTwo;
console.log (numOne + ' + ' + numTwo + ' = ' + numThree);

/* Punto B - Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable */

console.log('\n-Exercise 1.b:');
var strOne = prompt('Write the 1st word');
var strTwo = prompt('Write the 2nd word');
var strThree = strOne + strTwo;
console.log ('strOne (' + strOne + ') ' + 'strTwo (' + strTwo + ') = strThree (' + strThree + ')');

/* Punto C - Crear dos variables de tipo String y sumar el largo de cada variable (cant. de letras del string)
guardando el resultado de la suma en una 3er variable (utilizar length) */

console.log('\n-Exercise 1.c:');
var strFour = prompt('Write the 1st word');
var strFive = prompt('Write the 2nd word');
var strSix = strFour + strFive;
console.log ('strFour = ' + strFour + '(length = ' + strFour.length + ')');
console.log ('strFive = ' + strFive + '(lenght = ' + strFive.length + ')');
console.log ('strSix = ' + strSix + '(lenght = ' + strSix.length + ')');