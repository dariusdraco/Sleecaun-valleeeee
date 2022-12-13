const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultChoice = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;

possibleChoices.forEach((item) =>
  item.addEventListener("click", (event) => {
    userChoiceDisplay.innerHTML = event.target.id;
    userChoice = event.target.id;
    computersChoice();
    result();
  })
);

function computersChoice() {
  var rn = Math.floor(Math.random() * 3);
  computerChoice = possibleChoices[rn].id;
  computerChoiceDisplay.innerHTML = computerChoice;
}

function result() {
  resultChoice.innerHTML = " ";
  if (computerChoice === userChoice) {
    resultChoice.innerHTML = "Draw";
  }
  if (computerChoice === "Rock" && userChoice === "Scissors") {
    resultChoice.innerHTML = "Computer Win!";
  }
  if (computerChoice === "Scissors" && userChoice === "Rock") {
    resultChoice.innerHTML = "You Win!";
  }
  if (computerChoice === "Scissors" && userChoice === "Paper") {
    resultChoice.innerHTML = "Computor Win!";
  }
  if (computerChoice === "Paper" && userChoice === "Scissors") {
    resultChoice.innerHTML = "You Win!";
  }
  if (computerChoice === "Rock" && userChoice === "Paper") {
    resultChoice.innerHTML = "You Win!";
  }
  if (computerChoice === "Paper" && userChoice === "Rock") {
    resultChoice.innerHTML = "You Win!";
  }
}
