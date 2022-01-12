let num1=document.getElementById('num1');
let num2=document.getElementById('num2');
let sumar=document.getElementById('sumar');
let restar=document.getElementById('restar');
let multiplicar=document.getElementById('multiplicar');
let dividir=document.getElementById('dividir');
let resultado=document.getElementById('resultado');


sumar.addEventListener("click",()=>{
    let sumatoria = parseInt(num1.value) + parseInt(num2.value);
    resultado.innerHTML=`La suma de <b>${num1.value}</b> y <b>${num2.value}</b> es: <b>${sumatoria}</b>`;
});

restar.addEventListener("click",()=>{
    let resta = parseInt(num1.value) - parseInt(num2.value);
    resultado.innerHTML=`La resta de <b>${num1.value}</b> y <b>${num2.value}</b> es: <b>${resta}</b>`;
});

multiplicar.addEventListener("click",()=>{
    let multiplica = parseInt(num1.value) * parseInt(num2.value);
    resultado.innerHTML=`La multiplicación de <b>${num1.value}</b> y <b>${num2.value}</b> es: <b>${multiplica}</b>`;
});

dividir.addEventListener("click",()=>{
    try{
        let divide = parseInt(num1.value) / parseInt(num2.value);
        resultado.innerHTML=`La división de <b>${num1.value}</b> y <b>${num2.value}</b> es: <b>${divide}</b>`;
    }
    catch(error){
        resultado.innerHTML=`La división no es posible`;
        console.error(error);
    }
});