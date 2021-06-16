const $card1 = document.querySelector('.card');
console.log($card1);
console.log($card1.className);
console.log($card1.classList);
console.log($card1.classList.contains('rotate-45'));
$card1.classList.add('rotate-45');
console.log($card1.classList.contains('rotate-45'));

console.log($card1.className);
console.log($card1.classList);

/**
 * Con remove quitamos la clase
 * $card1.classList.remove('rotate-45');
 * 
 * con toggle podemos agregar o quitar clases
 * $card1.classList.toggle('rotate-45');
 */
 
//Con replace remplazamos la clase ya existente
$card1.classList.replace('rotate-45','rotate-135');

$card1.classList.add('opacity-80','sepia');

