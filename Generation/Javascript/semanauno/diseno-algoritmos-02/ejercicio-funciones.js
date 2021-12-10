const descuento = () => {
    let totalCompra = parseFloat(prompt('Inserte un precio'));
    if (totalCompra >= 0 && totalCompra < 100) {
        totalConDescuento = totalCompra - (0.1 * totalCompra);
        return totalConDescuento;
    } else if (totalCompra >= 100 && totalCompra < 200) {
        totalConDescuento = totalCompra - (0.2 * totalCompra);
        return totalConDescuento;
    } else if (totalCompra >= 200) {
        totalConDescuento = totalCompra - (0.3 * totalCompra);
        return totalConDescuento;
    }

}

console.log(descuento());