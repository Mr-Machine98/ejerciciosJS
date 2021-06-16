'use-strict';
/** 
 * Emisión de eventos node
 *  Patrón -> observador, es un patrón de diseño.
 * el concepto es que hay dos objetos
 * un objeto que publica y otro que escucha.
*/

var EventEmitter = require('events').EventEmitter;

var pub = new EventEmitter();

//Generar eventos en node 
pub.on('myevent', (message) => {
    console.log(message);
});

//Cuando el evento myevent se ejecute una sola vez ejecuta la fun
pub.once('myevent', (message) => {
    console.log('Se emite la primera vez. ' + message);
});

pub.emit('myevent', 'Soy un emisor de eventos.');

//Si se vuelve a emiter once no se vuelve a ejecutar
pub.emit('myevent', 'Volviendo a emitir');

//Para remover los escuchadores de eventos
pub.removeAllListeners('myevent');
//verificamos que no se ejecute este msm
pub.emit('myevent', 'Volviendo a emitir por tercera vez.'); // Este no se ejecutará





