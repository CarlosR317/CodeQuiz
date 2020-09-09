// create a quiz with different different responses
// correct answer continues to next question
// incorrect answer takes 5 seconds off the clock
// must create "for" loop 
// must create the local storage, to save the scores
// have to create the var for the arrays


// pretty sure this will be used to get the start button to actually get the game going. this was provided by youtube.
var quesIndex = 0;


//How do I make it so that the timer starts when the start btn is clicked 
var start = document.getElementById("start");


var startButton = document.getElementById("start-btn");

startButton.addEventListener('click', startGame);
function startGame() {
    t = 200
    startButton.classList.add('hide')
    currentQuestionIndex = 0
    questionElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    var currentques = questions[quesIndex]
    var question = document.getElementById("question");
    question.textContent = currentques.question;

    for (var i = 0; i < choices.length; i++) {
        var choice = document.createElement("button");
    userChoices.append(choice)
    choice.onclick = selectAnswer

    }
}
function showQuestions() {

}
// timer works when this is commented out 
// function selectAnswer(e) {
//     var selectButton = e.target
//     if (selectButton !== questions[quesIndex].correct) {
//         t = - 5;
//     }
// }
// if (selectButton == questions[quesIndex].correct) {
//     question

// }

// still have to figure out how to make the above code work, it is supposed to take 5 seconds off the clock when an answer is wrong but when the code is in place it does not let the timer work.


function timer001() {
    t = t - 1;
    if (t < 200); {
        timer.innerHTML = t;
    }
    if (t < 1) {
        window.clearInterval(update);
    }
}
update = setInterval("timer001()", 1000);


var question = document.getElementById("question");

var counter = document.getElementById("counter");

var playerScore = 0;

var ScoreContainer = document.getElementById("scoreContainer");

var submitButton = document.getElementById("endGame");

var userChoices = document.getElementById("choices");

var questions = [
    {
        question: "What is a String?",
        choices: ["Holds either true or False value", "Something cats play with", "Collection of characters", "Holds everything together"],
        correct: "Collection of characters"
    }, {
        question: "What are Booleans?",
        choices: ["Can float on water", "can be seen a mile away", "Collection of characters", "Holds either true or False value"],
        correct: "Holds either true or False value"
    }, {
        question: "What is an Array?",
        choices: ["Essentially a list", "Can be seen up in the sky", "Hold either true or false values", "Collection of character"],
        correct: "Essentially a list"
    }, {
        question: "What are Variables used for?",
        choices: ["Part of the math world", "Can be used to save bits of info to be used later", "Essentially a list", "Holds either true or False value"],
        correct: "Can be used to save bits of info to be used later"
    }, {
        question: "What is one line of code that can pull elements from an HTML file by ID?",
        choices: ["function()", "if {} else {}", "document.getElementById()", "var element="],
        correct: "document.getElementById()"
    }, {
        question: "How do you end a executable statement in Java Script?",
        choices: [";", "You don't", ".", ":"],
        correct: ";"
    }, {
        question: "What line of code initiates a conditional?",
        choices: ["document.getElementById()", "function()", "if {} else {}", "for (var i = 0; i < #; i++)"],
        correct: "if {} else {}"
    }, {
        question: "What can Java Script do for you HTML?",
        choices: ["Can give it coffee", "provides the HTML with actions that can respond to the user and help improve user experience", "Makes it look pretty", "creates the HTML"],
        correct: "provides the HTML with actions that can respond to the user and help improve user experience"
    }, {
        question: "What line of code is an example of a for loop",
        choices: ["for (var i = 0; i < #; i++)", "if {} else {}", "function()", "document.getElementById()"],
        correct: "for (var i = 0; i <#; i++)"
    }, {
        question: "What symbol tells you this is an array?",
        choices: [";", "?", "{}", "[]"],
        correct: "[]"
    },
];


