console.log('\n--EXERCISE 3: ARRAYS');

/* Punto A - Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log) */

console.log('\n-Exercise 3.a');
var monthsOfYear = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('En los meses del año, el quinto es ' + monthsOfYear[4] + ' y el decimo primero es ' + monthsOfYear[10]);

/* Punto B - Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort) */

console.log('\n-Exercise 3.b');
monthsOfYear = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(monthsOfYear.sort());

/* Punto C - Agregar un elemento al principio y al final del array (utilizar unshift y push) */

console.log('\n-Exercise 3.c');
monthsOfYear = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
monthsOfYear.push('Toliembre');
monthsOfYear.unshift('Pecero');
console.log(monthsOfYear);

/* Punto D - Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log('\n-Exercise 3.d');
monthsOfYear = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
monthsOfYear.pop();
monthsOfYear.shift();
console.log(monthsOfYear)

/* Punto E - Invertir el orden del array (utilizar reverse) */

console.log('\n-Exercise 3.e');
monthsOfYear = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(monthsOfYear.reverse());

/* Punto F - Unir todos los elementos del array en un único string donde cada mes este
separado por un guión (utilizar join) */

console.log('\n-Exercise 3.f');
monthsOfYear = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(monthsOfYear.join('-'));

/* Punto G - Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice) */

console.log('\n-Exercise 3.g');
monthsOfYear = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(monthsOfYear.slice(4,10));