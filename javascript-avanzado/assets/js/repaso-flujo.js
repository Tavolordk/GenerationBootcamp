let edad = 17;

(edad >= 18 )
    ? console.log("Mayor de edad")
    : console.log("Menor de edad");
    /*todo lo que esta despues de los dos puntos es lo que se imprimira si no se cumple con la primera condicion */

/esta es otra forma de usar el operador ternario/
let edad1 = 17;
let pregunta = (edad1>=18)
    ?"Mayor de edad"
    :"Menor de edad";
console.log(pregunta);

/*otra forma de usar un operador ternario */
let preguntaEdad =`Tengo ${edad1} años y soy ${(edad1 >= 18) ? "Mayor" : "Menor"} de edad`;
console.log(preguntaEdad);

/* para mandar un menu de opciones 
domingo =0 lunes =1 martes =2 miercoles =3 jueves =4 viernes =5 sabado =6 */
let dia =5;
/* if(dia === 0)
{
    console.log("Domingo");
}
else if(dia === 1)
{
    console.log("lunes");
}
else if(dia == 2)
{
    console.log("Martes");
}
else if(dia === 3)
{
    console.log("Miercoles");
}
else if(dia === 4)
{
    console.log("Jueves");
}
else if(dia === 5)
{
    console.log("Viernes");
}
else if(dia === 6)
{
    console.log("Sabado");
}
else
{
    console.log("Ese no es un dia");
}
 */
//Estructura switch

/* switch - case
switch (variable a evaluar)
{
    case valor:
        -codigo a ejecutar-
    break;
    case valor:
        -codigo a ejecutar-
    break;
    default:
        -codigo a ejecutar si sale de las opciones-
    break;
}
*/

switch(dia)
{
    case 0:
        console.log("Domingo");
    break;
    case 1:
        console.log("Lunes");
    break;
    case 2:
        console.log("Martes");
    break;
    case 3:
        console.log("Miercoles");
    break;
    case 4:
        console.log("Jueves");
    break;
    case 5:
        console.log("Viernes");
    break;
    case 6:
        console.log("Sabado");
    break;
    default:
        console.log("Este no es un dia");
    break;
}

let cuponDescuento;
let descuento;

switch(cuponDescuento){
    case "Bronce":
        descuento=0.05;
        break;
    case "Plata":
        descuento=0.10;
        break;
    case "Oro":
        descuento=0.15;
        break;
    case "Platino":
        descuento=0.25;
        break;
    default:
        console.log("Cupón erróneo");
        break;
}