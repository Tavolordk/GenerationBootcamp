/* Function
Es un bloque de código reutilizable.
puede tener o no parámetros de entrada.
puede devolver o no un valor.
*/

function suma(num1,num2){
    // operaciones o código a utilizar
    console.log('Hola desde la función');
    return num1 + num2;
}

function resta(num1,num2){
    return num1 - num2;
}

let num1 = parseInt(prompt('Inserte primer número:'));
let num2 = parseInt(prompt('Inserte segundo número:'));
let sumar = suma(num1,num2);
let restar = resta(num1,num2);
document.write(`La suma de ${num1} y ${num2} es ${sumar}`);
/// tambien podemos ocupar etiquetas de html, aqui ocupa el javascript junto con el html es una froma abrevida   ${}  de utilizar y la forma de abajo se utiliza concatenat
//document.write('La suma de ' + suma1 + ' y ' + suma2 + ' es ' + sumar);

document.write(`La resta de ${num1} y ${num2} es ${restar}`);