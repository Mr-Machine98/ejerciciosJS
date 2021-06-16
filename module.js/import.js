'use strict';
const data = require('./export');
const Clock = require('../EventEmmiter.js/reloj_Paradigma_prototype.js');
const Reloj = require('../EventEmmiter.js/reloj_Paradigma_POO.js');




//Imprime las variables importadas
console.log(data.name, data.email, data._phone);

/**
 * Con prototype
 * var cucu = new Clock();
    cucu.on('tictac', () => {
    cucu.theTime();
    });
 */

/**
 * Con POO
 * //Cree un nuevo obj
let cucu = new Reloj();
cucu.theTime();
//Prenda el evento
cucu.on('tictac', (hora) => {
    console.log(hora);
});
 * 
 * 
 * 
 */

//Cree un nuevo obj
let cucu = new Reloj();
cucu.theTime();
//Prenda el evento
cucu.on('tictac', (hora) => {
    console.log(hora);
});

