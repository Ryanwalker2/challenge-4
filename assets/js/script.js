var headerEl = document.querySelector('#header');
var quizboxEl = document.querySelector('#quizbox');
var questionEl = document.querySelector('#question');
var timerEl = document.querySelector('#timer');
var submitEl = document.querySelector('#submit');
var startEl = document.querySelector('#start');
var navEl = document.querySelector('navbar');
var score;

// Set CSS styles
headerEl.children[0].children[0].children[0].text = "Bootcamp Quiz";
headerEl.setAttribute('style', 'display:flex; align-content:center')
headerEl.children[0].setAttribute('style', 'display: flex; font-size:60px; color:cyan; margin-left: 20px');
timerEl.textContent = '10 Minutes Allowed';
timerEl.setAttribute('style', 'display: flex; align-content: center; justify-content: end; padding: 10px;');
quizboxEl.children[0].setAttribute('class', 'container')
quizboxEl.children[0].setAttribute('style', 'font-size: 50px; display: flex; justify-content: center; padding: 40px')
startEl.textcontent = 'Start Quiz!';
submitEl.setAttribute('style', 'display:flex; justify-content:center');
submitEl.children[0].setAttribute('style', 'padding: 20px; background:lightgreen; font-size: 30px; border-radius:50px')


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
    submitEl.innerHTML = '';
    startQuiz();
});

function createQuestion(curIdx) {
    console.log(curIdx);
    var answerBoxEl = document.createElement('div');
    answerBoxEl.setAttribute('class', 'answers');
    quizboxEl.appendChild(answerBoxEl);
    if (curIdx >= questionnaire.length) {
        questionEl.remove();
        var scoreEl = document.createElement('h3');
        scoreEl.setAttribute('class', 'score');
        scoreEl.textContent = `Quiz Complete! Final Score: ${score}`;
        quizboxEl.appendChild(scoreEl);
        console.log(`Quiz Complete! Score: ${score}`);
        var restartEl = document.createElement('button');
        restartEl.setAttribute('class', 'btn');
        restartEl.setAttribute('style', 'padding: 20px; background:lightgreen; font-size: 30px; border-radius:50px; justify-content: center')
        restartEl.textContent = 'Click to restart Quiz';
        restartEl.addEventListener('click', function() {
            window.location.reload()
        });
        submitEl.appendChild(restartEl);
        
    } else {
        for (var i = 0; i < questionnaire[curIdx].options.length; i++) {
            // Populate QuestionEl with current index question
            questionEl.textContent = questionnaire[curIdx].question;
            questionEl.setAttribute('style', 'font-size:30px; display:flex; justify-content:center; padding: 40px 0;');
            //Create a button for each option for the current index
            var btn = document.createElement('button');
            btn.textContent = questionnaire[curIdx].options[i];
            btn.setAttribute('class', 'btn');
            btn.setAttribute('style', 'font-size: 30px; justify-content:center; padding:20px; margin:20px 0; width:100%;');
            btn.dataset.idx = i;
            answerBoxEl.appendChild(btn);
            btn.addEventListener('click', function (event) {
                if (event.target.dataset.idx == questionnaire[curIdx].answer) {
                    console.log('correct');
                    score++;
                } else {
                    console.log('incorrect');
                };
                answerBoxEl.remove();
                curIdx++;
                createQuestion(curIdx);
            })
        }
    }
};
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
    score = 0;
    startTimer();
    // Populate questions and options
    var curIdx = 0
    createQuestion(curIdx);
}