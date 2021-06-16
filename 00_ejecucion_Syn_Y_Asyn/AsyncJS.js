const fs = require('fs');

/**
 * Este archivo explica la ejecuón sincrónica
 */
console.log("Inicio");

console.log('\nTareas a realizar...');

console.log('\n 1. Abre el archivo y leelo.');


let file = fs.readFile('./historioa.txt',{encoding:'utf8',flag:'r'},function (err, data) {
    console.log(data);
});


console.log('\n 2. Haz otra cosa');

console.log("Fin de la cosa");
