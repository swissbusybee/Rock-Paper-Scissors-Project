<script>


  <!--Game Resets//-->




  <!--Computer plays random options-->

  function computerPlay() {
      let options = ['rock','paper','scissors'];
      let computerInput = options[Math.floor(Math.random()*options.length)];
      return computerInput;
  };

  <!--Capitalization of first and consistent lowercase-->

  function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  <!--Plays single round of game-->

  function playRound(playerSelection, computerSelection) {
       if (playerSelection === computerSelection) {
       return `Draw! You both selected ${playerSelection}!`;
        } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
                   playerSelection === 'scissors' && computerSelection === 'rock' ||
                   playerSelection === 'paper' && computerSelection === 'scissors') {
      computerScore++;
      return `You Lose! ` + capitalize(computerSelection) + ` beats ${capitalize(playerSelection)}!`;
       } else {
      playerScore++;
      return `You Win! ` + capitalize(playerSelection) + ` beats ${capitalize(computerSelection)}!`;
    }
   }

  <!--Plays game and keeps score-->

  function game() {
    let playerSelection = prompt('Enter Rock, Paper, Scissors');
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }

  function results () {
    console.log(`Computer Score: ` + computerScore + ` Player Score: ${playerScore}`);
    if (computerScore > playerScore) {
    console.log('You lose! Computer wins the game!');
    } else {
    console.log('You win the game! Computer loses!');
    }
   }

  let computerScore = 0;
  let playerScore = 0;

  for (let round = 0; round < 5; round++) {
  game();
  }
  results();


 </script>
