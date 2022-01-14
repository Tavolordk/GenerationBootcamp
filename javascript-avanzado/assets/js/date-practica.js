/* Dada una fecha insertada por el usuario que muestra en otro input al seleccionarla la misma fecha
pero dentro de un año */
/* Por ejemplo si hoy es 13 de enero del 2022 que muestre en el otro input
13 de enero del 2023 */
let date1 = document.getElementById('date1');
let date2 = document.getElementById('date2');

date1.addEventListener("change",(e)=>{

    let fechaInicial = e.target.value;
    console.log(`Fecha inicial: ${fechaInicial}`);
    let anioInicial = parseInt(e.target.value);
    let anioFinal=++anioInicial;
    let anioFinalString=anioFinal.toString();
    let subStringFechaFinal=fechaInicial.substr(4,9);
    let fechaFinalString = anioFinalString.concat(subStringFechaFinal);
    console.log(subStringFechaFinal);
    console.log(typeof(anioFinalString));
    console.log(`Año final: ${anioFinal}`);
    date2.value = fechaFinalString;
    console.log(date2.value);
});