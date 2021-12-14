/**
 * ciclos - bucles - loops
 * 
 * while 
 * do while
 * for
 * 
 */

//while
/**
 * let condicion = 1; - valor inicial
 * while(condicion){
 * tu codigo
 * modificación a nuestro valor inicial
 * } 
 */

//Imprimir todos los números del 1 al 10
let condicion = 1;

while (condicion <= 10) {
    //console.log(condicion);
    console.log('Hola');
    condicion++;
}

/*let numero = 1; //1
console.log(numero);
numero++; //2
console.log(numero);
numero++; //3
console.log(numero);
numero++; //4
console.log(numero);
numero--; //3
console.log(numero);
numero--; //2
console.log(numero);
numero--; //1
console.log(numero);
*/

/**
 * do while
 */
let numero = 1;
do {
    console.log(numero);
    numero++;
} while (numero <= 10);

/**
 * for
 * utiliza contador
 */

for (let control = 1; control == 10; control++) {
    console.log('Hola');
}

const comidas = ['Pozole', 'Tacos', 'Tamales', 'Tortas'];

for (let i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);
}