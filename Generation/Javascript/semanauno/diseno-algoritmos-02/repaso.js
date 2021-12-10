/*
condicionales
if(condicion){
    bloque
} else if(condicion){
    bloque
} else{
    bloque
}
*/
/**
  funcion
  Bloque de código reutilizable
  function nombre(parametros){
      return
  }
  nombre(argumentos)
 */
const procesadorDeFrutas = (manzanas, naranjas) => {
    let jugo = `Jugo de ${manzanas} manzanas y ${naranjas} naranjas. `;
    return jugo;
}

let jugoDeManzana = procesadorDeFrutas(4, 0);
console.log(jugoDeManzana);

let jugoDeNaranja = procesadorDeFrutas(0, 5);
console.log(jugoDeNaranja);