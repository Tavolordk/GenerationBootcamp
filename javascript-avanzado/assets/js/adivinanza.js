/* 

Escribir un documento html el cual debe contener un input y un botón.
Escribir un programa en donde se defina un número secreto.
Se debe leer el valor que el usuario escriba en el input y darle pistas al usuario sobre si adivinó o no el número secreto.

Si el número que escribio el usaurio es igual al número secreto se debe mostrar Felicidades, adivinaste el número secreto
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 5, se debe mostrar Calienteeeeeeee
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 10, se debe mostrar Caliente
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 20, se debe mostrar Tibio
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 30, se debe mostrar Frio
Si la diferencia entre en número ingresado y el número secreto es mayor a 30, se debe mostrar Congelado

*/

const numeroAleatorio = parseInt(Math.random() * 100);
console.log(numeroAleatorio)
const mostrar = document.getElementById('mostrar');
const imagen = document.getElementById('imagen')


function investigar(){
    const entradaNumero = parseInt(document.getElementById('entrada').value);
    const diferencia = entradaNumero-numeroAleatorio;

    if (entradaNumero === numeroAleatorio){
        mostrar.innerHTML = ''
        imagen.src = 'https://th.bing.com/th/id/R.1547d12a030436c05a294e04cce6d70f?rik=cB6PQNusHn07%2bw&riu=http%3a%2f%2f3.bp.blogspot.com%2f_AOYFrN93Dfs%2fS4M2kkfDlxI%2fAAAAAAAAAUE%2fQwXHlAH_x4M%2fw1200-h630-p-k-no-nu%2ffelicidades2.jpg&ehk=fcrskNYYDzUKfNW4WQDAVEIihK7uCoIHFWSFTS%2bWcaA%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
    }
    else if((diferencia) >= -5 && (diferencia) <= 5){
        mostrar.innerHTML = 'Calienteeeeeeee'
    }
    else if((diferencia) >= -10 && (diferencia) <= 10){
        mostrar.innerHTML = 'Caliente'
    }
    else if((diferencia) >= -20 && (diferencia) <= 20){
        mostrar.innerHTML = 'Tibio'
    }
    else if((diferencia) >= -30 && (diferencia) <= 30){
        mostrar.innerHTML = 'Frio'
    }
    else{
        mostrar.innerHTML = 'Congelado'
    }   
}