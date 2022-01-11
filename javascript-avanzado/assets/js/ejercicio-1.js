let titulo = document.getElementById("titulo");
let b1 = document.getElementById("b1");

b1.addEventListener("click",()=>{
    let newText = prompt('Inserte nombre:');
    titulo.innerHTML = `Hola <i>${newText}</i>`;
});