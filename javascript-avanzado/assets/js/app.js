let titulo = document.getElementById('titulo');
titulo.addEventListener("click",()=>{
    titulo.textContent = "Modificando con Eventos de JS";
})

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);
/*
parrafos[0].textContent = 'parrafos escritos desde javascript'; */
/*la manera de cambiar un parrafo desde JS con arreglos el cero es el numero de la linea de parrafo */

// for(let i=0; i<parrafos.length; i++)
// {
//     parrafos[i].addEventListener("click",()=>{
//         parrafos[i].innerHTML = `Párrafo ${i+1} dice <b>Shrek va a matarte</b> :D`;
//     })
// }
/*para cambiar el texto de todos los parrafos */

let email = document.getElementById("email");
let password = document.getElementById("password");

function getInformation()
{
    console.log(email.value);
    console.log(password.value);
}


