let time = document.getElementById('time');

time.addEventListener("change",()=>{
    console.log(time.value);
    let hora = new Date();
    hora.setHours(parseFloat(time.value));
    console.log(hora.getHours());
    let resultado = document.getElementById('resultado');
    if(hora.getHours()>=0 && hora.getHours()<=5){
        resultado.innerHTML = `<b>Dejame dormir</b>`;
        }else if(hora.getHours()>=6&&hora.getHours()<=11){
            resultado.innerHTML = `<b>Buenos días</b>`;
        }else if(hora.getHours()>=12&&hora.getHours()<=18){
            resultado.innerHTML=`<b>Buenas tardes</b>`;
        }else if(hora.getHours()>=19&&hora.getHours()<=23){
            resultado.innerHTML= `<b>Buenas noches</b>`;
        }else{
            resultado.innerHTML= `<b>Ocurrió un error</b>`;
        }
});