'use-strict';
//Imports
var EventEmiter = require('events').EventEmitter;
class Clock extends EventEmiter {
    //CONSTRUCTOR
    theTime() {
        function addZero(num){
            return (num < 10) ? ('0' + num) : num;
        };
        setInterval(() => {
            let date = new Date()
            let hrsAmPm = (date.getHours() > 12) ? (date.getHours() - 12) : date.getHours();
            let hrs = addZero( hrsAmPm );
            let min = addZero( date.getMinutes() );
            let sec = addZero( date.getSeconds() );
            let am_pm = (date.getHours() < 12) ? ' am':' pm';
            let msg = hrs + ':' + min + ':' + sec + am_pm;
            this.emit('tictac', msg);
        }, 1000);
    };   
}
module.exports = Clock;