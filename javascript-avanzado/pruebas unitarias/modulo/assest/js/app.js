import {sumar,multiplicar,restar,dividir, mostrarResultado} from './calculadora.js';

let resultado = sumar(10,20);

let resultadoMultiplicar = multiplicar(32,9);

mostrarResultado('Multiplicación',32,9,resultadoMultiplicar);
mostrarResultado('Suma',10,20,resultado);
console.log(resultado);