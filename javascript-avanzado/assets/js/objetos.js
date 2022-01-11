let persona = {
    //pares de clave de valor
    nombre: 'Octavio',
    apellido:'Olea',
    edad: 25,
    direccion:{
        ciudad:'DF',
        estado:'Ciudad de México'
    },
    numero:[4354356123,435645646],
    suma :(num1,num2)=>{
        return num1 + num2;
    }
};

console.log(persona);
console.log(persona.suma(4,5));

let zapato = {
    color:'negro',
    marca:'Adidas',
    Talla: [7,8,9,10,11],
    modelo:{
        serie:'ASDFFD3454',
        anio:2015,
        nombre:'Air Ultra Mega Super Sayayin Fase Dios 5000'
    },
    Region:{
        pais:'USA',
        id:4,
        zona:'Sur'
    },
    disponibilidad:false,
    precio:'$234 USD',
    descripcion:'Colección Adidas 2015'
};

console.log(zapato);
console.log(zapato.modelo.nombre);