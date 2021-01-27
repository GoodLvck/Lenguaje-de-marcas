var amigos  = ["pedro","maria","joan","pili"];


// 1- queremos que escriba "mis amigos son maria y joan. rellena los huecos."
document.write("mis amigos son "+ "<b>" + amigos[1] + "</b>" + "  y <b>" + amigos[2]+"</b>");

 
// 2- ¿dónde está el fallo?
var enemigos = ["scipion", "scorpio", "black"];

 
// 3- escribe en el documento web "scorpio es peor que black" de modo que scorpio esté en negrita y la letra sea de color rojo.
document.write("<br>");
document.write("<b style='color:red;font-weight:bold;'>" + enemigos[1] + "</b>" + " es peor que " + enemigos[2]);
 
// 4- escribe una instrucción que devuelva la longitud del array amigos sea cual sea el número de datos almacenados en su interior.
document.write("<br>");
document.write(amigos.length);
 
// 5- "aitana" es también tu amiga. Escribe una instrucción que la añada al final de la lista amigos
amigos[amigos.length] = "aitana";
 
// 6 - "pedro" ha cambiado de nombre. ahora se llama "nacho". actualiza con una instrucción tu lista de amigos
amigos[0] = "nacho";
 
// 7 - "tor" es ahora tu enemigo. añádelo con una instruccion al final de tu lista de enemigos.
enemigos[enemigos.length] = "tor";
