const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'COP'  
    });
    
    return formatter.format(valor);
}

const calcularTotalPagar = (cantidad, plazo) => {
    let total;
    // mientras mayor es la cantidad, menor es el interes
    if(cantidad < 500000 ){
        total = cantidad * 1.5;
    } else if(cantidad => 500000 && cantidad <= 800000) {
        total = cantidad * 1.4;
    } else {
        total = cantidad * 1.3;
    }

    // PLazo - mas plazo, mayor interés
    if(plazo === 6) {
        total *=1.1;
    } else if (plazo === 12) {
        total *= 1.2;
    }else if(plazo === 24) {
        total *= 1.3;
    }else {
        total *= 1.4;
    }
    return total
}

export {
    formatearDinero,
    calcularTotalPagar
}