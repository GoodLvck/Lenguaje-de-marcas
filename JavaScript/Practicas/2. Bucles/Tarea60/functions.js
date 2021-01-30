var v = new Array()
v = [9.98, 7.86, 4.53, 8.91, 5.76, 2.31]

for (var i=0; i<v.length; i++){

    for (var j=0; j<v.length; j++) {
        if (v[j]>v[i]) {
            aux=v[i]
            v[i]=v[j]
            v[j]=aux
        }
    }
}

document.write("Numbers = " + v + "<br> <br>");
for (var i=0; i<v.length; i++){
    document.write("Position "+i+ ": "+v[i] + "<br>")
}