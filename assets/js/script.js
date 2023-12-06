var headerEl = document.querySelector('#header');
var quizboxEl = document.querySelector('#quizbox');
var questionEl = document.querySelector('#question');
var timerEl = document.querySelector('#timer');
var submitEl = document.querySelector('#submit');
var startEl = document.querySelector('#start');
var navEl = document.querySelector('navbar');

// Set CSS styles
headerEl.children[0].children[0].children[0].text = "Bootcamp Quiz";
headerEl.setAttribute('style', 'display:flex; align-content:center')
headerEl.children[0].setAttribute('style', 'display: flex; font-size:40px; color:cyan; margin-left: 20px');
timerEl.textContent = '10 Minutes Allowed';
timerEl.setAttribute('style', 'display: flex; align-content: center; justify-content: end; padding: 10px;');
quizboxEl.children[0].setAttribute('style', 'font-size: 20px; display: flex; justify-content: center; padding: 20px')
startEl.textcontent = 'Start Quiz!';
submitEl.setAttribute('style', 'display:flex; justify-content:center');
submitEl.children[0].setAttribute('style', 'padding: 10px; background:lightgreen;')


//constant containing questions and answers for quiz in arrays.
const questionnaire = [
    {
        //question 0
        question: "What is the full name for HTML?",
        options: [
            "a: Hyper Type Markup Location",
            "b: High Text Makeup Language",
            "c: Hyper Text Markup Language",
            "d: Hyper Text Markup Location"
        ],
        answer: "2"
    },

    //question 2
    {
        question: "What does CSS stand for?",
        options: [
            "a: Cascading Style Sheets",
            "b: Compact System Storage",
            "c: Cascading Storage System",
            "d: Compact Style Sheets",
        ],
        answer: "0"
    },

    //question 3
    {
        question: "What symbol is used when defining an array?",
        options: [
            'a: " "',
            "b: []",
            "c: {}",
            "d: ()",
        ],
        answer: "1",
    },

    //question 4
    {
        question: "What symbol represents an ID selector?",
        options: [
            "a: no symbol",
            "b: #",
            "c: .",
            "d: ,",
        ],
        answer: "1",
    }
];
// Listener on start quiz button
startEl.addEventListener('click', function () {
    startEl.setAttribute('style', 'display:none;')
    startQuiz();
}
);
function createQuestion() {
    var curIdx = 0;
    for (var i = 0; i < questionnaire[curIdx].options.length; i++) {
        // Populate QuestionEl with current index question
        questionEl.textContent = questionnaire[curIdx].question;
        questionEl.setAttribute('style', 'font-size:20px; display:flex; justify-content:center; padding: 20px;');
        //Create a button for each option for the current index
        var btn = document.createElement('button');
        btn.textContent = questionnaire[curIdx].options[i];
        btn.setAttribute('style', 'justify-content:center; padding:20px; width:100%;');
        btn.dataset.idx = i;
        btn.addEventListener('click', function (event) {
            if (event.target.dataset.idx == questionnaire[curIdx].answer) {
                console.log('correct');
                curIdx++;
            } else {
                console.log('incorrect');
                curIdx++;
            };
            quizboxEl.remove(btn);
            console.log(curIdx);

        })
        quizboxEl.appendChild(btn);
    }
}
function startTimer() {
    var timeLeft = 600;
    var x = setInterval(function () {  //set interval
        //Calculates seconds and minutes from time left Variable
        var minutes = Math.floor((timeLeft / 60));
        var seconds = Math.floor(timeLeft % 60);
        //Set if statement to properly decrement timer
        if (minutes > 0 && seconds >= 10) {
            timerEl.textContent = minutes + ':' + seconds;
            timeLeft--;
        } else if (minutes > 0 && seconds == 0) {
            timerEl.textContent = minutes + ':' + '00';
            timeLeft--;
        } else if (minutes > 0 && seconds < 10) {
            timerEl.textContent = minutes + ':' + '0' + seconds;
            timeLeft--;
        } else if (minutes = 0 && seconds >= 10) {
            timerEl.textContent = '00' + ':' + seconds;
            timerEl.setAttribute('style', 'color:red;')
            timeLeft--;
        } else if (minutes = 0 && seconds < 10) {
            timeLeft.textContent = '00' + ':' + '0' + seconds;
            timeLeft--;
        } else {
            timerEl.textContent = 'Times Up!';
            clearInterval(x);
        }
    }, 1000)
}
// Function to start quiz
function startQuiz() {
    startTimer();
    // Populate questions and options
    createQuestion();
}