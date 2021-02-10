var numeros = [5, 7, 9, 20, 20]
GestorVectores = {
    getMedia: function(){
        var suma = 0

        for (var i in numeros) {
            suma += numeros[i]
        }

        var media = suma / numeros.length

        return media
    },

    getModa: function(){
        var maximaVecesQueSeRepite = 0;
        var moda = 0;

        for ( i = 0; i < numeros.length; i++) {
            var vecesQueSeRepite = 0;
            for ( j = 0; j < numeros.length; j++) {
                if (numeros[i] == numeros[j])
                    vecesQueSeRepite++;
            }
            if (vecesQueSeRepite > maximaVecesQueSeRepite) {
                moda = numeros[i];
                maximaVecesQueSeRepite = vecesQueSeRepite;
            }
        }

        return moda
    },

    getMediana: function(){

        if (numeros.length % 2 == 0) {
            var mediana =  (numeros[numeros.length / 2 - 1] + numeros[numeros.length / 2])/2;
        } else if (numeros.length % 2 == 1) {
            var mediana = numeros[(numeros.length - 1)/2];
        } else {
            window.alert("Valores incorrectos");
        }
    
        return mediana
    }
}

var media = GestorVectores.getMedia()
document.write("<b> <br>La media es: </b>" + media)

var moda = GestorVectores.getModa()
document.write("<b> <br>La moda es: </b>" + moda)

var mediana = GestorVectores.getMediana()
document.write("<b> <br>La mediana es: </b>" + mediana)