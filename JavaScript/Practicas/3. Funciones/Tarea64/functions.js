var numerosV = [1, 2, 4, 5]

function desv_media(numeros){
    var media=calcMedia(numeros)
    var suma=0
    for (var i in numeros){
        suma= suma + Math.abs ( numeros[i] - media )
    }
    return suma / numeros.length
}