let dias = document.getElementById("dias");
let b1 = document.getElementById("b1");
let resultado = document.getElementById("resultado");

b1.addEventListener("click",()=>{
    console.log(dias.value);
    if(dias.value==null || dias.value==undefined){
        event.preventDefault;
    }
    let suma =0;
    for(let i=0;i<dias.value;i++){
        suma += (i+1);
    }
    if(suma!=0){
        resultado.innerHTML = `Resultado es: <b>${suma} peso(s)</b> en <b>${dias.value} día(s)</b>`;
    }
});