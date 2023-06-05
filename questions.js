//Creamos los 4 contenedores con las preguntas y respuestas (tanto falsas como correctas)
export default [
    {
        question: "Como se llamaba originalmente Pacman?",
        answers: [
            {option: "Puckman", correct: true},
            {option: "Pacson", correct: false},
            {option: "Tapman", correct: false},
        ],
    },
    {
        question: "Donde se creo?",
        answers: [
            {option: "China", correct: false},
            {option: "Japon", correct: true},
            {option: "Estados Unidos", correct: false},
        ],
    },
    {
        question: "En que anio se creo?",
        answers: [
            {option: "1995", correct: false},
            {option: "1990", correct: false},
            {option: "1980", correct: true},
        ],
    },
    {
        question: "De que color es el fantasma Blinky?",
        answers: [
            {option: "Rosa", correct: false},
            {option: "Amarillo", correct: false},
            {option: "Rojo", correct: true},
        ],
    },
];
