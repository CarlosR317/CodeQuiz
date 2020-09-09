// create a quiz with different different responses
// correct answer continues to next question
// incorrect answer takes 5 seconds off the clock
// must create "for" loop 
// must create the local storage, to save the scores
// have to create the var for the arrays


// pretty sure this will be used to get the start button to actually get the game going. this was provided by youtube.



//How do I make it so that the timer starts when the start btn is clicked 
var start = document.getElementById("start");
// startButton.addEventListener('click', startGame);
// function startGame() {
//     console.log('Started')
//     startButton.classList.add('hide')
//     questionContainerElement.classList.remove('hide')
//     setNextQuestion()
// function setNextQuestion() {

// // }
// function selectAnswer() {

var startButton = document.getElementById("start-btn");

startButton.addEventListener('click', startGame);
function startGame() {
    t = 200
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var startButton = document.createElement('start-btn')
        startButton.innerText = answer.innerText
        startButton.classList.add('btn')
        if (answer.correct) {
            startButton.dataset.correct = answer.correct
        }
        startButton.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
     var selectButton = e.target
     var correct = selectButton.dataset.correct
     setStatusClass(document.body, correct)
     Array.from(answerButtonsElement.children).forEach(button => {
         setStatusClass(button, button.dataset.correct)
     })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
    element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// this timer seems to work well, starts at 200 and counts down when start btn is pushed provided by youtube

// still have to figure out how to take time away when a question is wrong


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

// not sure if this code will be needed since the timer is already pulled up
// var timer = document.getElementById("timer");

// this timer starts at 1 and counts down right away, can't seem to change the time. provided by youtube.
// var total_seconds = 100;
// var c_seconds = parseInt(total_seconds/100);
// function CheckTime() {document.getElementById("timer").innerHTML
// ='Timer: ' + c_seconds + ' seconds';
// if(total_seconds <=0){
//     setTimeout('document.quiz.submit()', 1);
//     } else{
//         total_seconds = total_seconds -1;
//         c_seconds = parseInt(total_seconds/100);
//         setTimeout("CheckTime()", 1000); 
//     }}
//     setTimeout("CheckTime()", 1000);
// do I need the counter or it going to be be part of the timer and/or scoreContainer
var question = document.getElementById("question");

var counter = document.getElementById("counter");

var playerScore = 0;

var ScoreContainer = document.getElementById("scoreContainer");

var submitButton = document.getElementById("endGame")

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


// pretty sure this for loop will be used to at some point to cycle through the questions? I am not really sure
// var score = 0

// for (var i = 0; i < question.length; i++)


