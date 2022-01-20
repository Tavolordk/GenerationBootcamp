/* class Carro{
    constructor(marca,color,modelo,numeroPuertas,velocidad){
          this.marca = marca;
          this.color = color;
          this.modelo = modelo;
          this.numeroPuertas =numeroPuertas;
          this.velocidad = velocidad;
    }

    acelerar(){
        this.velocidad++;
    }

    frenar(){
        this.velocidad=0;
    }

    reversa(){
        this.velocidad--;
    }

    get toString(){
        return `${this.marca} ${this.color} ${this.modelo} ${this.numeroPuertas} ${this.velocidad}`;
    }
}

const carro = new Carro('Nissan','Rojo','Suru',4,30);

carro.acelerar();

console.log(carro.toString);

carro.frenar();

console.log(carro.toString);

const carro2 = new Carro('Nissan','Rojo','Suru',4,100);
carro2.reversa();
console.log(carro2.toString);
 */

/* 

Crear una clase carro, el carro va a tener los atributos: marca, color, modelo, velocidad y NumeroPuertas.
Debe tener los métodos: acelerar(), frenar(), reversa().

Debe tener un método llamado toString() que muestre los datos del auto y la velocidad actual.

Cáda vez que se use el método acelerar, se aumentará uno en velocidad, cada vez que se use el método reversa se restará 1.
(la velocidad puede ser negativa). Al usar el método frenar, se fijará la velocidad en 0.

*/


class Carro{
    constructor(marca,color,modelo,velocidad,numeroPuertas){
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.numeroPuertas = numeroPuertas;

    }

    acelerar(){
        this.velocidad += 1
    }

    frenar(){
        this.velocidad = 0
    }

    reversa(){
        this.velocidad -= 1
    }

    get toString(){
        const mensaje = `Modelo: ${this.modelo}, Color: ${this.color}, Marca: ${this.marca}, Velocidad: ${this.velocidad} <br>`
        return mensaje;
    }

}


const miCarro = new Carro('Nissan', 'Negro', 'Sentra' , 0, 4)
console.log(miCarro)
let mensaje = miCarro.toString
document.write(mensaje)

miCarro.acelerar()
miCarro.acelerar()
miCarro.acelerar()
mensaje = miCarro.toString
document.write(mensaje)

miCarro.reversa()
mensaje = miCarro.toString
document.write(mensaje)

miCarro.frenar()
mensaje = miCarro.toString
document.write(mensaje)