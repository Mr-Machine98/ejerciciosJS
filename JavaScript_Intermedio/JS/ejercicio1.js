/**
 * Tipos de nodo de acuerdo a los elementos del html
 * 
 * 
 * COMO ACCEDER A LOS ELEMENTOS DEL HTML
 */

// Estos han sido desbancados

console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByName('nombre'));
console.log(document.getElementById('menu'));

console.log();

//Nuevos métodos
console.log(document.querySelector('#menu'));
console.log(document.querySelector('a'));
console.log(document.querySelectorAll('a'));

console.log(document.querySelectorAll('a').length);

document.querySelectorAll('a').forEach((el) => console.log(el));

console.log(document.querySelectorAll('.card'));

console.log();

console.log(document.querySelectorAll('.card')[2]);

console.log();

console.log(document.querySelectorAll('#menu li'));

