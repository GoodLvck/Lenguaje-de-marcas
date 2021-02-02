function calcularDesviacionMedia(vector_valores){
    var media=calcularMedia(vector_valores)
    var suma=0
    for (var pos in vector_valores){
        suma= suma + Math.abs (  vector_valores[pos] - media  )
    }
    return suma / vector_valores.length
}