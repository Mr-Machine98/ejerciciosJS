const fs = require('fs');

/**
 * Este archivo explica la ejecuón sincrónica
 */
console.log("Inicio");

console.log('Tareas a realizar...');

console.log('\n 1. Abre el archivo y leelo.');

let file_read = fs.readFileSync('./historioa.txt', {encoding:'utf8', flag:'r'} );

console.log(file_read);

console.log('\n 2. Haz otra cosa');

console.log("Fin");
