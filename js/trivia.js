function preguntarUsuario(pregunta, respuestaCorrecta) {
    const respuestaUsuario = prompt(pregunta).toLowerCase();

    if (respuestaUsuario === respuestaCorrecta) {
        alert("¡Respuesta correcta!");
    } else {
        alert(`Respuesta incorrecta. La respuesta correcta es: ${respuestaCorrecta}`);
    }
}

const terminos = confirm("Antes de iniciar con la trivia, ¿Acepta los términos y condiciones?");

if (!terminos) {
    alert("No puedes continuar sin aceptar los términos y condiciones.");
} else {

    const preguntas = [
        "¿Cuál es la capital de Argentina?",
        "¿Cuál es el nombre completo del presidente actual de Argentina?",
        "¿Cuantos paises limitan con Argentina?",
        "¿Cuántas provincias tiene Argentina?"
    ];

    const respuestasCorrectas = [
        "ciudad autonoma de buenos aires",
        "javier gerardo milei",
        "5",
        "23"
    ];

    for (let i = 0; i < preguntas.length; i++)  {
        preguntarUsuario(preguntas[i], respuestasCorrectas[i]);
    }
}