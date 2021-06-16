'use-strict';

function singleThread() {
    console.log('Título de proceso:');
    console.log('....> ' + process.title);
    console.log('Args >>> '+ process.argv);
};


singleThread();

console.log('Fin');

console.log(global.process.title);