let fechaNacimiento = document.getElementById('fnacimiento');
let b1 = document.getElementById('b1');
let fechaActual = new Date();
let anioActual = fechaActual.getFullYear();
let resultado = document.getElementById('resultado');
console.log(anioActual);
console.log(fechaActual);

b1.addEventListener("click",()=>{
    console.log(fechaNacimiento.value);
    let fechaObtenida = new Date(fechaNacimiento.value);
    let edad = fechaActual.getFullYear() - fechaObtenida.getFullYear();
    let meses = fechaActual.getMonth() - fechaObtenida.getMonth();
    if(meses < 0 || (meses === 0 && fechaActual.getDate()<fechaNacimiento.getDate())){
        edad--;
    }
    console.log(edad);
    resultado.innerHTML=`Tu edad es: <b>${edad}</b> años`;
    return edad;
});