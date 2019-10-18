import { Rps } from "./rps.js";

const rps = new Rps();
// All player area queries
const playerHands = document.querySelectorAll(".playerHand");
// All score area queries
const computerScoreFill = document.querySelector("#computerScoreFill");
const computerScoreText = document.querySelector("#computerScoreText");
const playerScoreFill = document.querySelector("#playerScoreFill");
const playerScoreText = document.querySelector("#playerScoreText");
const infoBox = document.querySelector("#infoBox");
init();

// Event listeners
playerHands.forEach(playerHand =>
  playerHand.addEventListener("click", function() {
    playOneRound(playerHand.id);
  })
);

function init() {
  playerScoreText.textContent = "0";
  computerScoreText.textContent = "0";
  playerScoreFill.style.width = "0%";
  computerScoreFill.style.width = "0%";
  infoBox.innerText = "";
}

function playOneRound(id) {
  let playerChoice;
  if (id.includes("Rock")) {
    playerChoice = "rock";
  } else if (id.includes("Paper")) {
    playerChoice = "paper";
  } else {
    playerChoice = "scissors";
  }
  if (rps.playerScore >= 5 || rps.computerScore >= 5) {
    rps.clearScores();
    init();
  }
  let result = rps.playRound(playerChoice, rps.computerPlay());
  playerScoreText.textContent = rps.playerScore + "";
  computerScoreText.textContent = rps.computerScore + "";
  playerScoreFill.style.width = 20 * rps.playerScore + "%";
  computerScoreFill.style.width = 20 * rps.computerScore + "%";
  infoBox.innerText += result + "\n\n";
  if (rps.playerScore == 5) {
    infoBox.innerText += "You win the set! Click a hand to play again!";
  } else if (rps.computerSCore == 5) {
    infoBox.innerText += "You lost the set :(. Click a hand to play again.";
  }
}
