let date1 = document.getElementById('date1');
let date2 = document.getElementById('date2');

date1.addEventListener("change",()=>{
    let fechaObtenida = new Date(date1.value);
    let anioInicial = fechaObtenida.getFullYear();
    
})