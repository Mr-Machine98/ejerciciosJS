'use strict';

// Una función auto ejecutable anonima, es una función que se ejecuta sin ser llamada, ejemplo, automaticamente,
// En este caso se ejecuta cuando carga el archivo.
// Con ella podemos exportar

var clock = (function () {
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
    Clock.prototype.theTime = function () {
        let date = new Date();
        let hrs = addZero( date.getHours() );        let min = addZero( date.getMinutes() );
        let sec = addZero( date.getSeconds() );
        let msg = hrs + ':' + min + ':' + sec;
        function addZero(num) {
            return (num < 10) ? ('0'+num):num;
        }

        console.log(msg);
    }

    return Clock;
})();
module.exports = clock;

