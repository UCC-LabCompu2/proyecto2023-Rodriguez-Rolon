//Seleccionamos los elementos del documento HTML utilizando document.querySelector() y los asignamos a
// las variables correspondientes

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const contadorpreguntas = document.querySelector(".contadorpreguntas");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

//Importamos "questions.js" que contiene un array de preguntas y respuestas.
import questions from "./questions.js";

//Inicializamos las variables
let currentIndex = 0;
let questionsCorrect = 0;

//Asignamos un evento de clic al botón btnRestart que se activa cuando se hace clic en él.
// El evento restablece los valores de las variables currentIndex
// y questionsCorrect a 0, y luego carga la primera pregunta llamando a la función loadQuestion()
btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
};
//Definimos la función nextQuestion(e) que se ejecuta cuando se hace clic en una respuesta. Verificamos si la respuesta es
// correcta utilizando el atributo data-correct del elemento clicado.
// Si es correcta, incrementamos el contador questionsCorrect. Luego, verificamos si hay más preguntas para cargar o si
// se ha alcanzado la última pregunta. Si hay más preguntas, incrementamos el currentIndex y cargamos la siguiente
// pregunta llamando a loadQuestion(). De lo contrario, llamamos a la función finish().
function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }
}
//Definimos la función finish() que se llama cuando se han respondido todas las preguntas. Actualizamos el contenido del
// elemento textFinish para mostrar la cantidad de preguntas que se acertaron. Ocultamos el elemento content
// que muestra las preguntas y respuestas, y mostramos el elemento contentFinish que muestra el mensaje final.
function finish() {
    textFinish.innerHTML = `Has acertado ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}
//Definimos la función que carga y muestra la pregunta y respuestas correspondientes según el índice actual
// (currentIndex). Actualizamos el contenido del elemento para mostrar el número de pregunta actual. Luego, recorremos
// las respuestas de la pregunta actual y creamos botones para cada respuesta utilizando elementos <div>. Asignamos el atributo
// data-correct a cada botón según si es la respuesta correcta o no. Agregamos los botones al elemento answers. Finalmente,
// asignamos un evento de clic a cada botón para llamar a la función nextQuestion() cuando se haga clic en ellos.
function loadQuestion() {
    contadorpreguntas.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
}

loadQuestion();
