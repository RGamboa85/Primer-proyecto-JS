var estudiantes1= [
    {
        "código":"A101", "nombre":"María del Carmen García", "nota":90
    },{
        "código":"A201", "nombre":"Juan José Brenes", "nota":98
    },{
        "código":"A301", "nombre":"Lidia Mendoza", "nota":80
    },{
        "código":"A401", "nombre":"Santiago Bermudez", "nota":70
    },{
        "código":"A501", "nombre":"Estefanía Nieto", "nota":96
    },{
        "código":"A601", "nombre":"Claudia Aguilar", "nota":75
    },{
        "código":"A701", "nombre":"Milena Torres", "nota":85
    },{
        "código":"A801", "nombre":"José Szchumacher", "nota":65
    },{
        "código":"A901", "nombre":"Esteban Vega", "nota":73
    },{
        "código":"A111", "nombre":"Eleonora Martinez", "nota":90
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

function estudiantes(){
    leerJSON(estudiantes1);
}


