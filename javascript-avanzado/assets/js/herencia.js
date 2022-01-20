class Pokemon{
    constructor(nombre,tipo){
        this.nombre=nombre;
        this.tipo=tipo;
    }
    //métodos
    atacar(){
        return console.log(`${this.nombre} está atacando`);
    }
}

class Electrico extends Pokemon{
    constructor(nombre,tipo,edad){
        super(nombre,tipo);
        this.edad = edad;
    }

    //métodos
    evolucionar(){
        return console.log(`${this.nombre} está evolucionando`);
    }
}

const pikachu_uno=new Electrico('Pikachu','Eléctrico',254);
pikachu_uno.atacar();
pikachu_uno.evolucionar();

const pokemon_uno = new Pokemon('Charmander','Fuego');
pokemon_uno.atacar();