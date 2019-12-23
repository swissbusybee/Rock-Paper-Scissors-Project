//Game Resets
window.onload = function() {
function reset() {
    const resultsDiv = document.querySelector("#results");
    const playerDiv = document.querySelector("#player-score");
    const computerDiv = document.querySelector("#comp-score");
    const hiddenDiv = document.querySelector(".hidden");
    resultsDiv.textContent = "Choose Your Weapon!";
    playerDiv.textContent = "0";
    computerDiv.textContent = "0";

    hiddenDiv.style.visibility = "hidden";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}
//Computer plays random options

function computerPlay() {
    let options = ['rock','paper','scissors'];
    let computerInput = options[Math.floor(Math.random()*options.length)];
    return computerInput;
};

//Capitalization of first and consistent lowercase

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

//Plays game and keeps score

const resultDiv = document.querySelector("#results");
const playerDiv = document.querySelector("#player-score");
const computerDiv = document.querySelector("#comp-score");
let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
     if (playerSelection === computerSelection) {
     resultDiv.textContent = `Draw! You both selected ${playerSelection}!`;

   } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
              playerSelection === 'scissors' && computerSelection === 'rock' ||
              playerSelection === 'paper' && computerSelection === 'scissors') {

    computerDiv.textContent = Number(computerDiv.textContent) + 1;
    resultDiv.textContent = `You Lose! ` + capitalize(computerSelection) + ` beats ${capitalize(playerSelection)}!`;
   } else {
    playerDiv.textContent = Number(playerDiv.textContent) + 1;
    resultDiv.textContent = `You Win! ` + capitalize(playerSelection) + ` beats ${capitalize(computerSelection)}!`;
   }
     for (let round = 0; round < 5; round++) {
     if (playerDiv.textContent == 5 || computerDiv.textContent == 5) {
       const hiddenDiv = document.querySelector(".hidden");
       hiddenDiv.style.visibility = "visible";
       rockButton.disabled = true;
       paperButton.disabled = true;
       scissorsButton.disabled = true;
     if (computerScore > playerScore) {
       resultDiv.textContent = 'You lose! Computer wins the game!';
       } else {
       resultDiv.textContent ='You win the game! Computer loses!';
  }
}
}
}
//Event Listener

const rockButton = document.querySelector("#rbtn");
const paperButton = document.querySelector("#pbtn");
const scissorsButton = document.querySelector("#sbtn");
const resetButton = document.querySelector("#reset");

rockButton.addEventListener("click", () => playRound("rock", computerPlay()));
paperButton.addEventListener("click", () => playRound("paper", computerPlay()));
scissorsButton.addEventListener("click", () => playRound("scissors", computerPlay()));
resetButton.addEventListener("click", reset);
}
