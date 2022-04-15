console.log('\n--EXERCISE 4: IF ELSE');

/* Los console.log ademas del window.alert, son simplemente para dejar constancia en consola de la alerta que
se mostro en ventana */

/* Punto A - Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual
que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5” */

console.log('\n-Exercise 4.a');
var numRandom = Math.random();
console.log('Value: ' + numRandom);
if ( numRandom >= 0.5 ) {
    window.alert('Greather than 0.5');
    console.log('Alert: Greather than 0.5');
} else {
    window.alert('Lower than 0.5');
    console.log('Alert: Lower than 0.5');
}

/* Punto B - Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes
mensajes de alerta: “Bebe” si la edad es menor a 2 años, “Niño” si la edad es entre 2 y 12 años, “Adolescente”
entre 13 y 19 años, “Joven” entre 20 y 30 años, “Adulto” entre 31 y 60 años, “Adulto mayor” entre 61 y 75 años,
“Anciano” si es mayor a 75 años. */

console.log('\n-Exercise 4.b');
var Age = 27;
console.log('Age: ' + Age);
if ( Age < 2 ) {
    window.alert('Bebe');
    console.log('Alert: Bebe');
} else if ( Age >= 2 && Age <= 12 ) {
    window.alert('Niño');
    console.log('Alert: Niño');
} else if ( Age >= 13 && Age <= 19 ) {
    window.alert('Adolescente');
    console.log('Alert: Adolescente');
} else if ( Age >= 20 && Age <= 30 ) {
    window.alert('Joven');
    console.log('Alert: Joven');
} else if ( Age >= 31 && Age <= 60 ) {
    window.alert('Adulto');
    console.log('Alert: Adulto');
} else if ( Age >= 61 && Age <= 75 ) {
    window.alert('Adulto mayor');
    console.log('Alert: Adulto mayor');
} else {
    window.alert('Anciano');
    console.log('Alert: Anciano');
}