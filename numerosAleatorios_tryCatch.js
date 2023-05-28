

function generarNumeroAleatorio(minimo, maximo) {
    if (typeof minimo !== 'number' || typeof maximo !== 'number') {
      throw TypeError('Ambos argumentos deben ser numéricos.');
  }
  
    return Math.random() * (maximo - minimo) + minimo;
  }
  
  try {
    console.log(generarNumeroAleatorio(1, 10000));
    console.log(generarNumeroAleatorio(1, 10));
    console.log(generarNumeroAleatorio(1, 10000));
    console.log(generarNumeroAleatorio(1, 1000));
    console.log(generarNumeroAleatorio(1, 10));
  } catch (err) {
    console.error("Hemos tenido un error");
  }