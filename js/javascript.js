var estudiantes = [
    {
        "código":"1-0", "nombre":"María del Carmen García", "nota":90
    },{
        "código":"2-0", "nombre":"Juan José Brenes", "nota":98
    },{
        "código":"3-0", "nombre":"Lidia Mendoza", "nota":80
    },{
        "código":"4-0", "nombre":"Santiago Bermudez", "nota":70
    },{
        "código":"5-0", "nombre":"Estefanía Nieto", "nota":96
    },{
        "código":"6-0", "nombre":"Claudia Aguilar", "nota":75
    },{
        "código":"7-0", "nombre":"Milena Torres", "nota":85
    },{
        "código":"8-0", "nombre":"José Szchumacher", "nota":65
    },{
        "código":"9-0", "nombre":"Esteban Vega", "nota":73
    },{
        "código":"1-1", "nombre":"Eleonora Martinez", "nota":90
    }
]

function leerJSON(json){
    var out = "*-Estudiantes-*";
    var i;
    for(i=0;i<json.length;i++){
        out+="Código: "+json[i].codigo+" - "+"Nombre: "+json[i].nombre+" - "+"Nota: "+json[i].nota+"<br>";
    }
    document.getElementById("estudiantes").innerHTML=out;
}

