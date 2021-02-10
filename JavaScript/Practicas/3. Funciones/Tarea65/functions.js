var numeros = [1, 5, 7, 9, 10, 11]

function mediana(){
    numeros.sort
    
    if (numeros.length % 2 == 0) {
        var mediana =  (numeros[numeros.length / 2 - 1] + numeros[numeros.length / 2])/2;
    } else if (numeros.length % 2 == 1) {
        var mediana = numeros[(numeros.length - 1)/2];
    } else {
        window.alert("Valores incorrectos");
    }

    document.write("La mediana es: " + mediana );
    
}

mediana()