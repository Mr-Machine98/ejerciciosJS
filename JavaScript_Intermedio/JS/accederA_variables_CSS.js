
/**
 * esto sirve para modificar el código html o css 
 * desde el js 
 */

let linkDOM = document.querySelector('.link-dom');
let p = document.querySelector('h3');
p.innerHTML = 'Learn list';

console.log(linkDOM.style);
console.log(linkDOM.getAttribute('style'));
console.log(linkDOM.style.color);
console.log(window.getComputedStyle(linkDOM).getPropertyValue('color'));


//Establecer valores al css
linkDOM.style.setProperty('text-decoration','none');
linkDOM.style.setProperty('display','block');
linkDOM.style.setProperty('width','50%');
linkDOM.style.textAlign = 'center';
linkDOM.style.setProperty('margin-left','auto');
linkDOM.style.setProperty('margin-right','auto');
linkDOM.style.padding = '1rem';
linkDOM.style.borderRadius = '1rem';
linkDOM.style.marginTop = '1rem';


console.log(linkDOM.style);
console.log(linkDOM.getAttribute('style'));
console.log(getComputedStyle(linkDOM));


//Variables CSS -Custom Properties CSS
//Acceder a la etiqueta html
const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');

let varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');
//Imprime el valor de las variables css
console.log(varDarkColor);
console.log(varYellowColor);

//Aplicar al body
$body.style.setProperty('background-color', varDarkColor);
$body.style.color = varYellowColor;


/**
 * Modificar las variables css
 * 
 */
$html.style.setProperty('--dark-color', '#000');
varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');
$body.style.setProperty('background-color',varDarkColor);

