var numeros = [1, 5, 7, 10, 11]

if (numeros.length % 2 == 0){
    var mediana =  (numeros[numeros.length - 1] + numeros[numeros.length]) / 2
} else {
    var mediana = muneros[(numeros.length - 1)/2]
}

document.write("La mediana es: " + mediana)