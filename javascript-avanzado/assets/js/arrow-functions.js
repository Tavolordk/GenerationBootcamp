let num1 = parseInt(prompt('Inserte primer número:'));
let num2 = parseInt(prompt('Inserte segundo número:'));

const sumar = (num1,num2)=>{
    return num1 + num2;
}

let sumatoria = sumar(num1,num2);
document.write(`La suma de ${num1} y ${num2} es ${sumatoria} <br/>`);