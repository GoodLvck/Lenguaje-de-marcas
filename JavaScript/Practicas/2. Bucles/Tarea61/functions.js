var numeros = [0, 10]
var suma = 0

for (var i in numeros) {
    suma += numeros[i]
}

var media = suma / numeros.length

document.write("<br>" + "La media es: " + media)