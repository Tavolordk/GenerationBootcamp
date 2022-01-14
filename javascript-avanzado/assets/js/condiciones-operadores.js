/* Operadores aritméticos */
/*
 + - / * % ()
*/
let operacion = 3 * 5 + (10-5);
console.log(operacion);
let operacion2 = 3 - 5 / 2 * 4;
console.log(operacion2);

/* Operadores relacionales 
<,>,>=,<=,==,===,!=,!==
boolean true false
*/
console.log(7<=7);
console.log(7<=7);
console.log(7 == '7');
console.log(7 === '7');
console.log(7!='7');
console.log(7!=='7');
/* Incremento y decremento
+=, -=, *=, /=
*/
let incremento = 5;
//incremento +=5;
incremento = incremento + 5;
console.log(incremento);

incremento -= 5;
console.log(incremento);

incremento *= 5;
console.log(incremento);

incremento /= 5;
console.log(incremento);

/* Operador unario 
++, --
sumar uno, restar uno
*/
let sumar =0;
console.log(sumar + "linea 49");
sumar++;
console.log(sumar + "linea 50");
sumar++;
console.log(sumar);
sumar--;
sumar--;
sumar--;
console.log(sumar);

/* ++variable preincremento - primero modifica el valor
y ya después hace uso de la variable.
 variable++ = posincremento - primero usa la variable y después hace uso de la 
 variable.
*/
let num = 5;
console.log(num++);
console.log(num);

for(let i =0; i<5;i++){
    console.log(`ciclo padre`);
    for(let j=0;j<5;j++){
        console.log(`ciclo hijo`);
    }
}