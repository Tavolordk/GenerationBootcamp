/*DATOS SACADOS DE ESTA LECTURA 
https://lenguajejs.com/javascript/dom/seleccionar-elementos-dom/ */
 /*let titulo = document.getElementById("titulo");
titulo.textContent ="Titulo escrito desde JS"; */
/*textcontent accede al contenido de texto de la etiqueta */

/Las variables que se conectan al DOM si tiene este signo $/

/*Especifa el tipo de elemento que hace referencia 
querySelector utilizado para una classe id o una etiqueta se tiene que aplicar un #id .class y si no se coloca nada se selecciona una etiqueta
saca el primer elemento que encuentre 
querySelectorAll es para todos los parrafos que encuentre*/

let $titulo = document.querySelector("#titulo");
$titulo.textContent = "Titulo escrito desde JS";

let $parrafo = document.querySelector('p');
console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll ('p');
console.log($parrafos[1].textContent);

let subtitulo = document.createElement('h3');
subtitulo.innerHTML = 'Este es un subtitulo desde JS';
// document.body.append(subtitulo);
$titulo.insertAdjacentElement("afterend",subtitulo);
$titulo.remove();

let $contenido = document.querySelector('#contenido');
/* console.log($contenido.textContent = '<br>');
console.log($contenido.innerHTML = '<br>'); */
let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo';
$contenido.appendChild(contenidoParrafo);