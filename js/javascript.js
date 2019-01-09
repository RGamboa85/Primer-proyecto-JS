var estudiantes1= [
    {
        "codigo":"A101", "nombre":"María del Carmen García", "nota":90
    },{
        "codigo":"A201", "nombre":"Juan José Brenes", "nota":98
    },{
        "codigo":"A301", "nombre":"Lidia Mendoza", "nota":80
    },{
        "codigo":"A401", "nombre":"Santiago Bermudez", "nota":70
    },{
        "codigo":"A501", "nombre":"Estefanía Nieto", "nota":96
    },{
        "codigo":"A601", "nombre":"Claudia Aguilar", "nota":75
    },{
        "codigo":"A701", "nombre":"Milena Torres", "nota":85
    },{
        "codigo":"A801", "nombre":"José Szchumacher", "nota":65
    },{
        "codigo":"A901", "nombre":"Esteban Vega", "nota":73
    },{
        "codigo":"A111", "nombre":"Eleonora Martinez", "nota":90
    }
]

function leerJSON(json){
    var out = "----------Estudiantes---------<br>";
    var i;
    for(i=0;i<json.length;i++){
        out+= "Código: "+json[i].codigo+" - "+"Nombre: "+json[i].nombre+" - "+"Nota: "+json[i].nota+"<br>";
    }
    document.getElementById("estudiantes").innerHTML=out;
}

function sumar(json){
    var suma=0;
    for(var i=0;i<json.length;i++){
        suma+=parseInt(json[i].nota);
    }
    document.getElementById("promedio").innerHTML="El promedio de la clase es de: "+suma;
}

function estudiantes(){
    leerJSON(estudiantes1);
}

function promedio(){
    sumar(estudiantes1);
}

