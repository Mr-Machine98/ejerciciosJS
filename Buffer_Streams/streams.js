'use-strict';

/**
 * Streams:
 * 'Chorros' de información que se transmiten en
 * 'pedazos'(Chunks)
 * 3 tipos: Lectura/Escritura/Duplex
 * Instancias de EventEmitter
 * Acceso asíncrono
 * Es raro crear streams directamente
 * pero muchos recursos nos ofrecen este interfaz detrás de muchos mecanismo de Node.JS
 * stfin/stout
 * request de HTTP
 * Sockets
 * Manipulación de ficheros/imágenes
 */

//Import fs
const fs = require('fs');

//Created a file .txt
let readStream = fs.createReadStream('./Assets/names.txt');
//created a new file .txt
let writeStream = fs.createWriteStream('./Assets/names_copy.txt');

//the content readstream go to writestream
readStream.pipe(writeStream);

//event readstream, get chunks and say the chunk length
readStream.on('data', function (chunk) {
    console.log(`He leído: ${chunk.length} caracteres.`);
    console.log(chunk.toString());
});
readStream.on('end', () =>{
    console.log('Termine de leer el archivo.');
});



