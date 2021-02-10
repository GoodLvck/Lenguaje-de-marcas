var numeros = [1, 2, 3, 5]
var suma = 0
var media = suma / numeros.length

function desvMedia(){
    for (var i in numeros) {
        var desviacion = Math.abs ( numeros[i] - media )
        suma = suma + desviacion
    }

    var desv_media = suma / numeros.length
    document.write("<br/>La desviación media es igual a : " + desv_media)
}

desvMedia()
