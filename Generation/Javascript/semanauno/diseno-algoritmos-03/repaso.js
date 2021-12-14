/**
 * Arreglos
 */

const comidas = ['Pozole', 'Quesadillas', 'Tacos'];

/**
 * length
 */
console.log(comidas.length);

/**
 * push - agrega al final
 * pop - quita un elemento del final
 * unshift - agrega al inicio
 * shift - quita un elemento del inicio
 */

comidas.push('Torta');
console.log(comidas);

comidas.unshift('Pancita');
console.log(comidas);

comidas.pop();
console.log(comidas);

comidas.shift();
console.log(comidas);

/**
 * forEach - nos puede ayudar a realizar una acción por cada elemento de nuestro
 * arreglo de una forma automática.
 */

console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);

comidas.forEach((elementos) => {
    console.log(elementos);
});

const numeros = [1, 4, 7, 8];
console.log(numeros);

numeros.forEach((elementosNumeros) => {
    console.log(elementosNumeros);
});


/**
 * ejercicio
 */
const arr = [];

const suma = (num) => {
    let sumNum = num + 1;
    //return arr.push(sumNum);
    return arr.unshift(sumNum);
}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78);

console.log(arr);