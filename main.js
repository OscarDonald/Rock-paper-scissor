// Du använder dig av DOM:en för att interagera med HTML/CSS. Du använder enbart Vanilla JavaScript (inget ramverk/bibliotek).

// Du skapar ett enkelt UI där användaren klickar på sten, sax, eller påse - samtidigt som "datorn" slumpar mellan sten, sax eller påse. Vinnaren i nuvarande omgång visas och du bygger en poängräknare där totalvinnaren är den som först når till fem vinster.

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const scoreText = document.querySelector("#scoreText");

let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;

resetGame();

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    // Extract the choice without the additional text
    player = button.textContent.trim();
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    result = checkWinner();
    resultText.textContent = `Result: ${result}`;
    updateScore();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSOR";
      break;
  }
}

function checkWinner() {
  if (player === computer) {
    return "Draw";
  } else if (
    (player === "ROCK" && computer === "SCISSOR") ||
    (player === "PAPER" && computer === "ROCK") ||
    (player === "SCISSOR" && computer === "PAPER")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}

function updateScore() {
  scoreText.textContent = `Score: Player ${playerScore} - Computer ${computerScore}`;

  if (playerScore === 5) {
    setTimeout(() => {
      alert("Congratulations! You have reached 5 points. You win");
      resetGame();
    }, 0);
  } else if (computerScore === 5) {
    setTimeout(() => {
      alert("Sorry! Computer reached 5 points. You lose!");
      resetGame();
    }, 0);
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
}
