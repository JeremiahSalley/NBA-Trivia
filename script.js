// grab start button 
//grab wrong and correct button 

let start = document.querySelector(".start")
let wrongAnswer = document.querySelectorAll(".wrong")
let correctAnswer = document.querySelectorAll(".correct")
let getQuestion = document.querySelectorAll(".question")
let next = document.querySelector(".next")
let results = document.querySelector("results");
let restart = document.querySelector("restart");
let counter = 0
let score = 0
let questionAnswered = 0

// add event listener to start button 
// that hides the main screen and show one question at a time 

start.addEventListener("click", function () {
    document.querySelector('header').style.display = "none"
    question()
    console.log("working salley")
})

correctAnswer.forEach(function (correctAnswer) {
    correctAnswer.addEventListener("click", function () {
        console.log("next question")
        counter++
        question()
        rightAnswer()
        
        console.log("lucky guess")
    })
})

wrongAnswer.forEach(function (wrongAnswer) {
    wrongAnswer.addEventListener("click", function () {
        console.log("next question")
        counter++
        question()
        incorrectAnswer()
       
        console.log("Wrong")
    })
})


function question() {
    questionAnswered ++
    if (counter == 10) {
        checkScore()
    } else if (counter != 10){
        getQuestion[counter].classList.add("show")
    }
    
    if (counter >= 1) {
        getQuestion[counter - 1].classList.remove("show")
    }
}

function rightAnswer(e){
    score = score += 1
    document.querySelector(".score").innerText = 'Score:' + " " + score;  
    console.log(questionAnswered)
}

function checkScore (){
    console.log("working...")
    console.log(questionAnswered)
    if (questionAnswered >= 11) {
        if(score >= 7) {
            document.querySelector(".winner").classList.add("show")
        } else if (score >= 5){
            document.querySelector(".average").classList.add("show")
        } else {
            document.querySelector(".help").classList.add("show")
        }
    }
}

function incorrectAnswer(e){
    document.querySelector(".score").innerHTML = 'score:' + score;
    console.log(questionAnswered)
}

function refreshPage() {
    window.location.reload()
}






