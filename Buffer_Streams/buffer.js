/**
 * Buffers
 *  Son una tira de bytes
 *  (Datos binaruis).
 *  Similar a un array de enteros de tamaño fijo
 * 
 * Manipula datos directamente;
 *      Sockets
 *      Streams
 *      Implementar protocolos complejos.
 * Manipulación de ficheros/Imágenes.
 * Criptografía
 */

'use-strict';

let buff = new Buffer(100);
let buff1 = new Buffer(26); 
let str = '\u00bd + \u00bc = \u00be';

buff.write('abcde',0,4,'ascii');

console.log("str -> ", str);

console.log(
    buff,
    buff.toString('ascii'),
    buff.length
);
console.log();
console.log('La cadena str tiene: '+str.length);
console.log(Buffer.byteLength(str, 'utf8') + ' Bytes.');

console.log();

for (let index = 0; index < buff1.length; index++) {
    buff1[index] = index + 97;
}
console.log(buff1);
console.log(buff1.toString('ascii'));


    



