function preguntarUsuario(pregunta, respuestaCorrecta) {
    const respuestaUsuario = prompt(pregunta).toLowerCase();

    if (respuestaUsuario === respuestaCorrecta) {
        alert("¡Respuesta correcta!");
    } else {
        alert(`Respuesta incorrecta. La respuesta correcta es: ${respuestaCorrecta}`);
    }
}

class Pregunta {
    constructor(texto, respuestaCorrecta) {
        this.texto = texto;
        this.respuestaCorrecta = respuestaCorrecta.toLowerCase();
    }
}

const terminos = confirm("Antes de iniciar con la trivia, ¿Acepta los términos y condiciones?");

if (!terminos) {
    alert("No puedes continuar sin aceptar los términos y condiciones.");
} else {

    const preguntas = [
        new Pregunta("¿Cuál es la capital de Argentina?", "ciudad autonoma de buenos aires"),
        new Pregunta("¿Cuál es el nombre completo del presidente actual de Argentina?", "javier gerardo milei"),
        new Pregunta("¿Cuántos países limitan con Argentina?", "5"),
        new Pregunta("¿Cuántas provincias tiene Argentina?", "23")
    ];

    for (let i = 0; i < preguntas.length; i++) {
        preguntarUsuario(preguntas[i].texto, preguntas[i].respuestaCorrecta);
    }
}