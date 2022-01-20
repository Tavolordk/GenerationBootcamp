class Animal
{
    nombre;
    especie;
        constructor(nombre, especie)
        {
            this.nombre = nombre;
            this.especie = especie;
        }
        //getters y setters
        get getNombre()
        {
            return this.nombre;
        }
        set setNombre(nombre)
        {
            this.nombre = nombre;
        }
        get getNombre()
        {
            return this.especie;
        }
        set setNombre(especie)
        {
            this.especie = especie;
        }
        //metodos == funcion
        presentarse()
        {
            document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} <br>`);
        }
        cambiarNombre(nuevoNombre)
        {
            this.nombre = nuevoNombre;
            let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`
            return document.write(mensaje);
        }
        //metodos estaticos, se crea dentro de la clase pero no hereda los objetos
        static saludar()
        {
            return console.log('Hola, soy un metodo estatico');
        }
}
const Animal1 = new Animal("Scooby", "perro");
console.log(Animal1);

const Animal2 = new Animal("michiberto", "Gato");
console.log(Animal2);

const Animal3 = new Animal();
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = "Scrapy";
console.log(Animal1.nombre);
console.log(Animal1);

Animal1.cambiarNombre ("Oddie");

/*Getters y Setters 
se utilizan como atributos y se llaman asi por que:*/
//get= nos ayudan a obtener el valor de una variable
//set nos ayudan a fijar y cambiar el valor de una variable
console.log(Animal1.getNombre);
Animal1.setNombre = "Manchas";
console.log(Animal1.getNombre);
console.log(Animal1);

//los metodos estaticos se llaman con el nombre de la clase, y pueden usarse para contar los objetos.
Animal.saludar();