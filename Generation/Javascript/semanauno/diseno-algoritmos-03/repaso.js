/* Arreglos son para almacenar datos y los metodos son para llamar esa información. 
arreglos
const comida: [ "pozole", "quesadilla", "tacos"]
length longitud de nuestro arreglo 
conselo.log (comidas.lengh)
push- agrega al final 
pop - quita un elemento al final
unshift - agrega un elemento del inicio 
shift- quita un elemento del inicio 
comida.push ("torta");
console.log("comidas");
comidas.unshift("pancita")
console.log(comidas);
comidas.pop()
console.log (comidas)
comidas.shift()
console.log(comidas)
For each- nos puede servir para realizar una acción por cada elemento de nuestro arreglo
console.log (comidas [ 0])
console.log (comidas [ 1])
console.log (comidas [ 2])
comidas.forEach (funcion (el){
console.log(el) };
 */
const numeros = [1,4,7,8]
console.log(numeros)
numeros.forEach(function(el)
{
    let suma = el + 1;
    console.log(suma)
})

/*ejercicio
 const arre=[]
function suma (num){
    let sum + 1
};*/
    
    const arr=[1];
    function suma(num) {
        let sumNum= num+1
        return arr.unshift( sumNum);
    }

    suma(3);
    suma(5);
    suma(6);
    suma(2);
    suma(78);

    console.log(arr)