var empleado = {
    nombre: "Alba Serrano",
    edad: 47,
    fijo: true,
    estaJubilado: function () {
        if (this.edad>65) {
            return true
        } else {
            return false
        }
    },
    nivelExperiencia: function () {
        if ((this.edad >= 18) && (this.edad <= 25)) {
            return "Junior"
        } 
        else if ((this.edad > 25) && (this.edad <= 45)) {
            return "Asociado"
        }
        else if ((this.edad > 45) && (this.edad <= 60)) {
            return "Senior"
        }
        else if ((this.edad > 60) && (this.edad <= 65)) {
            return "Experto"
        }
        else if (this.edad > 65) {
            return "No aplicable"
        }
        else {
            return "No aplicable a menores de edad"
        }
    }
}

document.write("<b> <br> Nombre: </b>" + empleado.nombre)
document.write("<b> <br> ¿Está jubilado? </b>" + empleado.estaJubilado())
document.write("<b> <br> Nivel de experiencia: </b>" + empleado.nivelExperiencia())