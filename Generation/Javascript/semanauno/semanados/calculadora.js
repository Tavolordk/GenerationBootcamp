const sumar = (a, b) => {
    let suma = a + b;
    return suma;
}

const restar = (a, b) => {
    let resta = a - b;
    return resta;
}

const multiplicar = (a, b) => {
    let multiplicacion = a * b;
    return multiplicacion;
}

const dividir = (a, b) => {
    try {
        let division = a / b;
        return division;
    } catch (error) {
        console.error(error);
    }
}