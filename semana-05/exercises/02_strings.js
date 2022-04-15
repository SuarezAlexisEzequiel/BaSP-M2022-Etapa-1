console.log('\n--EXERCISE 2: STRINGS');

/* Punto A - Crear una variable de tipo string con al menos 10 caracteres y
convertir todo el texto en mayuscula (utilizar toUpperCase) */

console.log('\n-Exercise 2.a');
var strSeven = 'trackgenix';
console.log ('If we aplly .toUpperCase to "' + strSeven + '" we get = ' + strSeven.toUpperCase() );

/* Punto B - Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con los primeros 5 caracteres, guardando el resultado
en una nueva variable (utilizar substring) */

console.log('\n-Exercise 2.b');
var strEight = 'Development';
var strNine = strEight.substring(5,0);
console.log ('If we take the first 5 characters of "' + strEight + '" we get = ' + strNine);

/* Punto C - Crar una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con los ultimos 3 caracteres guardando el resultado
en una nueva variable (utilizar substring) */

console.log('\n-Exercise 2.c');
var strTen = "Skybreaker";
var strEleven = strTen.substring(10,7);
console.log ('If we take the last 3 characters of "' + strTen + '" we get = ' + strEleven);

/* Punto D - Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con la primera letra en mayuscula y las demas en minuscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLoweCase y el operador +) */

console.log('\n-Exercise 2.d');
var strTwelve = "orTHOgrAPhY";
var strThirteen = strTwelve.substring(1,0).toUpperCase() + strTwelve.substring(11,1).toLowerCase();
console.log('The correct way for write "' + strTwelve + '" is = ' + strThirteen);

/* Punto E - Crear una variable de tipo string con al menos 10 caracteres y
algun espacio en blanco. Encontrar la posicion del primer espacio en blanco y
guardarla en una variable (utilizar indexOf) */

console.log('\n-Exercise 2.e');
var strFourteen =  "Software Developer";
var spacePosOne = strFourteen.indexOf(" ",0);
console.log('In "' + strFourteen + '" we see the space in ' + spacePosOne + 'th position');

/* Punto F - Crear una variable de tipo string con al menos 2 palabras largas
(10 caracteres y algun espacio entre medio). Utilizar los metodos de los ejercicios
anteriores para generar un nuevo string que tenga la primera letra de ambas palabras
en mayuscula y las demas letras en minuscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +) */

console.log('\n-Exercise 2.f');
var strFifteen = "trACKGenIX dEVELopmENT";
var spacePosTwo = strFifteen.indexOf(" ",0);
var strFirstWord = strFifteen.substring(1,0).toUpperCase() + strFifteen.substring(spacePosTwo,1).toLowerCase();
var strSpace = strFifteen.substring(spacePosTwo+1,spacePosTwo);
var strLastWord = strFifteen.substring(spacePosTwo+2,spacePosTwo+1).toUpperCase() +
strFifteen.substring(strFifteen.length, spacePosTwo+2).toLowerCase();
var strSixteen = strFirstWord + strSpace + strLastWord;
console.log('The correct way for write "' + strFifteen + '" is = ' + strSixteen);