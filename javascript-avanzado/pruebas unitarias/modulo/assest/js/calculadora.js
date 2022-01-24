 const sumar = (n1,n2)=>{
    return n1+n2;
}
 const restar = (n1,n2)=>{
    return n1-n2;
}

 const multiplicar =(n1,n2)=>{
    return n1*n2;
}

const dividir = (n1,n2)=>{
    return n1/n2;
}

const mostrarResultado=(operacion,n1,n2,resultado)=>{
    const resultados = document.createElement('p');
    resultados.innerHTML=`La <b>${operacion}</b> de <b>${n1}</b> y <b>${n2}</b> es <b>${resultado}</b>`;
    document.body.appendChild(resultados);
}

module.exports = {
    sumar,restar,multiplicar,dividir
}