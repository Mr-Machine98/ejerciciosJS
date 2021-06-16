'use-strict';
var EventEmiter = require('events').EventEmitter;
var inherits = require('util').inherits;
//Objeto
//Esto funciona como Clase
var Clock = function () {
    //Que apunte al contexto de clock
    var self = this;
    setInterval(() => {
        //console.log('Hola');
        self.emit('tictac');
    }, 1000);
}
//La Clase clock necista heredar dela clase padre EventEmiter para que clock pueda ser un emisor
inherits(Clock, EventEmiter);
//Extender el prototipo Clock y le agrega un nuevo método llamado theTime
Clock.prototype.theTime = function() {
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let msg = hrs +':'+ min +':'+ sec;
    console.log(msg); 
}
var cucu = new Clock();
cucu.on('tictac', () => {
    cucu.theTime();
});
