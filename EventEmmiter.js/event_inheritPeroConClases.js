'use-strict';
//Imports
var EventEmiter = require('events').EventEmitter;
class Clock extends EventEmiter{
    //CONSTRUCTOR
    theTime(){
        setInterval(() => {
            let date = new Date()
            let hrs = date.getHours()
            let min = date.getMinutes()
            let sec = date.getSeconds()
            let msg = hrs +':'+ min +':'+ sec;
            this.emit('tictac', msg); 
        }, 1000);
    };
}
//Cree un nuevo obj
let cucu = new Clock();
cucu.theTime();
//Prenda el evento
cucu.on('tictac', (hora) => {
    console.log(hora);
});


