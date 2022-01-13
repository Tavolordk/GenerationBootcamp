let numeros = [1, 3, 15, 23, 324, 34, 34, 34, 34, 32, 232];

/*para imprimir los elementos de un arreglo */
numeros.forEach(function (elemento)
{
    document.write(elemento + ', ');
});

/* nos sirve para crear un arreglo diferente sin modificar el primer arreglo */
/*
let numeros2= numeros.map(function(elemento)
{
    return elemento * 2;
});

document.write('<br>' + numeros2); */

let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas.map(function(elemento)
{
    return elemento;
});

/*let frutas = ['mango', 'uva', 'piña'];
frutas2= frutas; */ //de esta manera se crea un arreglo  nuevo que se modificara si se le agrega un elemento nuevo a frutas por eso es que se usa map

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas.push('pera'); //se puede notar que se agrega pera a frutas y gracias a .map no se modificara frutas 2

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

//includes()
/la funcion includes, busca si hay un elemento hola dentro del arreglo si no esta manda un false o un true si esta como en el caso del 1/
document.write('<br>' + numeros.includes('Hola') + '<br>');
document.write('<br>' + numeros.includes(1) + '<br>');

//filter()
/la funcion filter sirve para que filtre los elementos de un arreglo en este caso filtraremos los numeros pares y los agregaremos al nuevo arreglo numerosPares/
let numerosPares = numeros.filter((elemento) =>
{
    //esta es una foroma de indicar que devuelva solo los pares
    return elemento % 2 == 0;//los valores que retorna son el boleano pero con esta condicion se analiza y los va a agregando al nuevo arreglo si el elemento es true.. ya que la condiiciones si se cumplen son true

    //esta es otra forma de devolver los pares analizando los valores true y false
    /*
    if(elemento % 2 ==0)
    {
        return true;
    }
    else
    {
        return false
    }
    */
});
document.write('<br>' + numerosPares + '<br>');

/*para filtrar con string */
let frutast = ['Mango', 'uva', 'piña', 'mandarina', 'Manzana', 'aguacate'];
let frutasFiltro = frutast.filter((frutat)=>
{
    //primer manera de imprimir las frutas que contienen la m
    /return frutat.includes('m');/

    //segunda manera de imprimir las frutas que contienen la m
    /*if(fruta.includes('m') == true)
    {
        return true;
    }*/

    //con este metodo reconoce las mayusculas como si fueran minusculas, debido a que frutat es un string se le aplica la funcion toLowerCase
    return frutat.toLowerCase().includes('m');

    //con este metodo reconoce las minusculas como si fueran mayusculas, debido a que frutat es un string se le aplica la funcion toLowerCase
    /return frutat.toUpperCase.includes('M');/
});
document.write('<br>' + frutasFiltro + '<br>');

/* sort */
document.write(`Sort: <br/>${numeros.sort()}`);

/* Reverse invierte el orden de los elementos de un arreglo */
document.write(`<br/> Reverse: <br/> ${numeros.reverse()}`);

/* find */
let frutaEncontrada = frutas.find((elemento)=>{
    return elemento.toLowerCase().includes('ma');
});

document.write(`<br/> Fruta encontrada: <b>${frutaEncontrada}</b>`);