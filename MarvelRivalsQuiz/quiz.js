const questions = [
  {
    question: "Q1.What is the main style of game in Marvel Rivals",
    option: ["A.Shooter", "B.Strategy", "C.Sandbox"],
    answer: 0
  },
  {
    question: "Q2.Which of these is not a gamemode?",
    option: ["A.Ranked", "B.Quick Play", "C.Story"],
    answer: 2
  },
  {
    question: "Q3.What class has the most heroes?",
    option: ["A.Vanguards", "B.Duelists", "C.Strategists"],
    answer: 1
  },
  {
    question: "Q4.What class is Peni Parker?",
    option: ["A.Vanguards", "B.Duelists", "C.Strategists"],
    answer: 0
  },
  {
    question: "Q5.What class is Magik?",
    option: ["A.Vanguards", "B.Duelists", "C.Strategists"],
    answer: 1
  },
  {
    question: "Q6.What class is Jeff the Land Shark?",
    option: ["A.Vanguards", "B.Duelists", "C.Strategists"],
    answer: 2
  },
  {
    question: "Q7.Which is the most recent added character as of May 2025?",
    option: ["A.Emma Frost", "B.Ultron", "C.Wolverine"],
    answer: 1
  }
];
//index: 0,1,2
//length:1,2,3

let currentQuestion = 0;
let score = 0;

function startStart() {
  document.getElementById("Start").style.display = "block";
  document.getElementById("Quiz").style.display = "none";
  document.getElementById("Result").style.display = "none";
}

function startQuiz() {
  document.getElementById("Start").style.display = "none";
  document.getElementById("Quiz").style.display = "block";
  document.getElementById("Result").style.display = "none";
  showQuestion();
}

function showQuestion() {
  if (currentQuestion < questions.length) {
    const question_data = questions[currentQuestion];
    document.getElementById("question").innerText = question_data.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    question_data.option.forEach((option, index) => {
      const button = document.createElement("button");
      button.classList.add("button")
      button.innerText = option;
      button.onclick = () => answer(index);
      optionsContainer.appendChild(button);
    });
  } else {
    endQuiz();
  }
}
function answer(selectedIndex) {
  if (selectedIndex === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  showQuestion();
}
function endQuiz() {
  document.getElementById("Quiz").style.display = "none";
  document.getElementById("Result").style.display = "block";
  document.getElementById("score").innerText = `${score}/${questions.length}`;
  const percentage = (score / questions.length) * 100;
  console.log(percentage)
  if (percentage === 100) {
    document.getElementById("message").innerText = "You got them all";
  } else if (percentage >= 75) {
    document.getElementById("message").innerText = "Impressive, but not impressive enough";
  } else if (percentage >= 50) {
    document.getElementById("message").innerText = "You know more than I thought";

  } else if (percentage > 25) {
    document.getElementById("message").innerText = "Not bad, but not good";
  } else if (percentage <= 25) {
    document.getElementById("message").innerText = "Try PLAYing the game, you barely know anything"
  }
}

//CRUD - list 
//Create-let 'list name'=["'item ?'","'item ?'"......]
//Read-console.log('listname'['index no.'])
//Update: 
//Replace-'list name'['index no.']="'item ?'"
//Add-'list name'.push("'item ?'")           
//Delete-'list name'.splice('start:index no.','end:index no.')

//For loop
//running through a list things until a certain condition is met