/* 

Operadores aritméticos nos sirven para hacer operaciones

   + Sirve para sumar o concatenar
   - Sirve para restar numeros
   * Sirve para multiplicar dos numeros
   % modulo nos sirve para obtener el residuo de una division
   / nos sirve para dividir dos numeros;

*/

let numero1 = parseInt(prompt('Ingresa el primer numero'));
let numero2 = parseInt(prompt('Ingresa el segundo numero'));
/*const suma = Number.parseInt(numero1, 10) + Number.parseInt(numero2, 10); activar en caso
de que desde el prompt no use el parseInt
*/
const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;

console.log('Número 1: ' + numero1);
console.log('Número 2: ' + numero2);
console.log('La suma es: ' + suma);
console.log('La resta es: ' + resta);
console.log('La multiplicación es: ' + multiplicacion);
console.log('La división es: ' + division);

console.log(5 % 3);