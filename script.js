function comprobarRespuesta(respuesta) {
    // Lógica para comprobar si la respuesta es correcta
    // Puedes mostrar un mensaje o cambiar la imagen de la parte de la PC
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    ev.target.appendChild(draggedElement);
    checkCompletion(); // Revisa si se ha completado el armado de la PC
}

function checkCompletion() {
    var placaMadre = document.getElementById('placa_madre');
    var componentes = placaMadre.childNodes;
    var partesFaltantes = ['CPU', 'GPU', 'RAM', 'Placa_Madre', 'Disco_Duro', 'Fuente_Poder']; // Agrega más partes si es necesario
    for (var i = 0; i < componentes.length; i++) {
        var componente = componentes[i];
        var index = partesFaltantes.indexOf(componente.id);
        if (index !== -1) {
            partesFaltantes.splice(index, 1);
        }
    }
    if (partesFaltantes.length === 0) {
        document.getElementById('mensaje_final').textContent = "¡Has armado la PC correctamente!";
    }
}
