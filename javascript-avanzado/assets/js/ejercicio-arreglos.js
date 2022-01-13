const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let suma=0;
let promedio;
numeros.forEach((numero)=>{
    suma += numero;
});
document.write(`La suma total es <b>${suma}</b>`);
promedio = suma/numeros.length;
document.write(`<br/> El promedio es: <b>${promedio}</b>`);