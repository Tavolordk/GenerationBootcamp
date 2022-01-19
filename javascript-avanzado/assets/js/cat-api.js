let $btnGato = document.querySelector('#btnGato');
let resultado = document.querySelector('#resultado');
let $btnPerro = document.querySelector('#btnPerro');
let resultadoPerro = document.querySelector('#resultadoPerro');

$btnGato.addEventListener("click",()=>{
   fetch('https://api.thecatapi.com/v1/images/search')
   .then(resp =>resp.json()).then(data=>{
       console.log(data);
       data.forEach((datos,i)=>{
           resultado.innerHTML = `<img src="${datos.url}" alt="gato"/>`;
       });
   });
});

$btnPerro.addEventListener("click",()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json()).then(data=>{
        console.log(data);
        resultadoPerro.innerHTML = `<img src="${data.message}" alt="perro"/>`;
    });
});