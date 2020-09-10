// create a quiz with different different responses
// correct answer continues to next question
// incorrect answer takes 5 seconds off the clock
// must create "for" loop 
// must create the local storage, to save the scores
// have to create the var for the arrays

var questionDiv = document.getElementById("questions");

var counter = document.getElementById("counter");

var playerScore = 0;

var ScoreContainer = document.getElementById("scoreContainer");

var submitButton = document.getElementById("endGame");

// the questions
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
        question: "What is one line of code that can pull elements from an HTML file by Id?",
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
        question: "What can Java Script do for your HTML?",
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

var quesIndex = 0;

var start = document.getElementById("start");

var startButton = document.getElementById("start-btn");

var t = 200

//start button, will initiate the timer and pull up the questions 
startButton.addEventListener('click', startGame);
function startGame() {
    timer001()
    startButton.classList.add('hide')
    start.classList.add('hide')
    currentQuestionIndex = 0
    showQuestions()
}

function showQuestions() {
// regardless of correct or wrong next question will pull up. if wrong 5 seconds will be removed
    var questionText = document.createElement("p")
    questionText.textContent = questions[quesIndex].question
    questionDiv.appendChild(questionText)
    for (letter in questions[quesIndex].choices) {
        var choice = document.createElement("button")
        choice.textContent = questions[quesIndex].choices[letter]
        choice.id = letter
        choice.setAttribute("class", "buttonChoice")
        questionDiv.appendChild(choice)

    }
    var choiceBtn = document.querySelectorAll(".buttonChoice")

    for (var i = 0; i < choiceBtn.length; i++) {
        choiceBtn[i].addEventListener('click', function () {
            var choiceId = this.id
            if (questions[quesIndex].choices[choiceId] == questions[quesIndex].correct) { }
            else { t -= 5 }
            if (choiceBtn.length == 0 || t == 0) { endQuiz() }
            nextQuestion()
        })
    }
}

function nextQuestion() {
    quesIndex++
    questionDiv.innerHTML = ""
    showQuestions()
}
function endQuiz() {
    submitButton.addEventListener('click', 'endGame');
}


function timer001() {
    var update = setInterval(function () {

        t = t - 1;
        if (t < 200); {
            timer.innerHTML = t;
        }
        if (t < 1) {
            window.clearInterval(update);
        }
    }, 1000)
}


