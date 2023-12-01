var headerEl = document.querySelector('#header');
var quizboxEl = document.querySelector('#quizbox');
var questionEl = document.querySelector('#question');
var timerEl = document.querySelector('#timer');
var submitEl = document.querySelector('#submit');
var startEl = document.querySelector('#start');
var navEl = document.querySelector('navbar');
var timeleft = '10 Minutes allowed';

// Set CSS styles
headerEl.children[0].children[0].children[0].text = "Bootcamp Quiz";
headerEl.setAttribute('style', 'display: flex;');
timerEl.setAttribute('style', 'display: flex; align-content: center; justify-content: end; padding: 10px;');

questionEl.setAttribute('style', 'display:flex; justify-content:center; padding:20px 0;');

startEl.textcontent = 'Start Quiz!';


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
        answer: "c"
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
        answer: "c"
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
        answer: "b",
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
        answer: "b",
    }
];

//Timer setup
function countdown() {
    var timeleft = 2000;
    timeInterval = setInterval(function () {
        if (timeleft > 1) {
            timerEl.textContent = "Time Remaining: " + timeleft + 'seconds';
            timeleft--;
        } else if (timeleft === 1) {
            timerEl.textContent = timeleft + 'second';
            timeleft--;
        } else {
            timerEl.textContent = 'Times Up!';
            clearInterval(timeInterval);
        }
    }, 1000
    )

} 

function startQuiz() {
    curIdx = 0; //current question index

    questionEl.textContent = questionnaire[curIdx].question
        for(var i=0; i < questionnaire[curIdx].options.length; i++) {
    
            var btn = document.createElement('button');
            btn.textContent = questionnaire[curIdx].options[i];
            btn.dataset.idx = i;
            btn.addEventListener('click', function(Event) {
                if(Event.target.dataset.idx == questionnaire[curIdx].answer) {
                    console.log('correct');
                } else {
                    console.log('incorrect');
                } 
                
                curIdx++;
            });
            quizboxEl.appendChild(btn)
        ;}
}


// Listener on start quiz button
startEl.addEventListener('click', function() {
        countdown();
        startQuiz();
    }
);

