const {sumar,restar,dividir,multiplicar} = require('./calculadora');

describe('Pruebas en el componente calculadora',()=>{
    test('Pruebas en la función sumar',()=>{
        expect(sumar(3,5)).toBe(8);
    });
});

describe('Pruebas en el componente calculadora',()=>{
    test('Pruebas en la función restar',()=>{
        expect(restar(-10,5)).toBe(-15);
    });
});

describe('Pruebas en el componente calculadora',()=>{
    test('Pruebas en la función restar',()=>{
        expect(dividir(1,0)).toBe(Infinity);
    });
});

describe('Pruebas en el componente calculadora',()=>{
    test('Pruebas en la función restar',()=>{
        expect(multiplicar(-10,5)).toBe(-50);
    });
});