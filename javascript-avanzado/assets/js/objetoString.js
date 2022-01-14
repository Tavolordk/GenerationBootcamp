let cadena1 = "Hola";
console.log(cadena1);

let cadena2 = new String("Adiós");
console.log(cadena2);

//includes busca una cadena en otra y regresa true o false
console.log(cadena2.toLowerCase().includes("a"));
//convierte a mayusculas o minusculas
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());
//cohersión y conversión.
//cohersión - Javascript convierte en automático un tipo de dato en otro
console.log(cadena1.toLowerCase());

/* Funcion que recibe una palabra  y la regresa invertida*/
let palabra = "Hola Mundo";
let arreglo = palabra.split("");
console.log(arreglo);

console.log(arreglo.reverse());

let text = document.getElementById("texto");
let b1 = document.getElementById("b1");
let resultado = document.getElementById("resultado");

b1.addEventListener("click",()=>{
    let arreglo = text.value.split("");
    arreglo.reverse();
    let cadenaInvertida = arreglo.join();
    let sinComas = cadenaInvertida.toString().replaceAll(",","");
    resultado.innerHTML=`El texto invertido es: <b>${sinComas}</b>`;
});