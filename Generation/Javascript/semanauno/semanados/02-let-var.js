/*
variable var se utilizaba anteriormente, son variables globales.
variable let es una variable de contexto, solo vive en un bloque de código.
*/

var numero = 40;
console.log(numero);

if (true) {
    var numero = 50;
    console.log(numero);
}

console.log(numero);

var texto = 'Bootcamp Java';
console.log(texto);

if (true) {
    let texto = 'Cohorte 8';
    console.log(texto);
    let numeroFavorito = 76;
}

//console.log(numeroFavorito); marca error porque no está definida aquí
console.log(texto);