let userScore = 0;
let computerScore = 0;
let drawScore = 0;

function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * 3);

  const computerChoice = choices[randomIndex];

  document.getElementById("userChoice").innerText = userChoice;
  document.getElementById("computerChoice").innerText = computerChoice;

  let result = "";

  if (userChoice === computerChoice) {
    result = "🤝 Match Draw";
    drawScore++;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "🎉 Congratulations! You Won";
    userScore++;
  } else {
    result = "Computer Won";
    computerScore++;
  }

  document.getElementById("resultText").innerText = result;

  document.getElementById("userScore").innerText = userScore;
  document.getElementById("computerScore").innerText = computerScore;
  document.getElementById("drawScore").innerText = drawScore;
}
