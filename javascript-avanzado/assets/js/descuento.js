let cuponDescuento = document.getElementById('descuento');
let b1 = document.getElementById('b1');
let precio = document.getElementById('precio');
let resultado = document.getElementById('resultado');
let descuento;

b1.addEventListener("click",()=>{
    switch(cuponDescuento.value){
        case "Bronce":
            descuento=0.05;
            let resultadoPrecio = parseFloat(precio.value) - (parseFloat(precio.value)*descuento);
            resultado.innerHTML=`El precio con descuento es: ${resultadoPrecio}`;
            break;
        case "Plata":
            descuento=0.10;
            let resultadoPrecioPlata = parseFloat(precio.value) - (parseFloat(precio.value)*descuento);
            resultado.innerHTML=`El precio con descuento es: ${resultadoPrecioPlata}`;
            break;
        case "Oro":
            descuento=0.15;
            let resultadoPrecioOro = parseFloat(precio.value) - (parseFloat(precio.value)*descuento);
            resultado.innerHTML=`El precio con descuento es: ${resultadoPrecioOro}`;
            break;
        case "Platino":
            descuento=0.25;
            let resultadoPrecioPlatino = parseFloat(precio.value) - (parseFloat(precio.value)*descuento);
            resultado.innerHTML=`El precio con descuento es: ${resultadoPrecioPlatino}`;
            break;
        default:
            resultado.innerHTML=`<b>Cupón Erróneo</b>`;
            break;
    }
});