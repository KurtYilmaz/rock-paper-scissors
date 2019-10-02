// Rock paper scissor class
export class Rps {
  constructor() {
    this.playerScore = 0;
    this.computerScore = 0;
  }

  rand0toX(x) {
    return Math.random() * x;
  }

  computerPlay(input = 0) {
    let result;
    if (input == 0) input = this.rand0toX(3);
    input = Math.ceil(input);
    switch (input) {
      case 1:
        result = 'Rock';
        break;
      case 2:
        result = 'Paper';
        break;
      case 3:
        result = 'Scissors';
        break;
      default:
        result = 'Rock';
    }
    return result;
  }

  comparePlays(playerSelection, computerSelection) {
    let result;
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player == 'rock') {
      if (computer == 'scissors') {
        result = 'w';
      } else if (computer == 'paper') {
        result = 'l';
      } else {
        result = 'd';
      }
    } else if (player == 'scissors') {
      if (computer == 'paper') {
        result = 'w';
      } else if (computer == 'rock') {
        result = 'l';
      } else {
        result = 'd';
      }
    } else if (player == 'paper') {
      if (computer == 'rock') {
        result = 'w';
      } else if (computer == 'scissors') {
        result = 'l';
      } else {
        result = 'd';
      }
    } else {
      result = 'e';
    }
    return result;
  }

  playRound(player, computer) {
    let output;
    let result = this.comparePlays(player, computer);
    if (result == 'w') {
      this.playerScore += 1;
      output = 'You win. ' + player + ' beats ' + computer + '.';
    } else if (result == 'l') {
      this.computerScore += 1;
      output = 'You lose. ' + player + ' loses to ' + computer + '.';
    } else if (result == 'd') output = 'Draw. Both picked ' + player + '.';
    else output = 'Error';
    return output;
  }

  clearScores() {
    this.playerScore = 0;
    this.computerScore = 0;
  }

  game() {
    let player;
    let computer;
    let roundResult;
    while (this.playerScore < 3 && this.computerScore < 3) {
      player = prompt(
        'Type "Rock," "Paper," or "Scissors"\n(Check the console with CTRL+Shift+J for results and game status)'
      );
      computer = this.computerPlay();
      roundResult = this.playRound(player, computer);
      while (roundResult == 'Error') {
        player = prompt(
          'Invalid input. Please type "Rock," "Paper," or "Scissors"'
        );
        computer = this.computerPlay();
        roundResult = this.playRound(player, computer);
      }
      alert(
        roundResult + 'The score is: ' + this.playerScore + ' to ' + this.computerScore + '.'
      );
    }
    let playAgain;
    if (this.playerScore > this.computerScore) {
      playAgain = confirm('You win the set! Play again?');
    } else {
      playAgain = confirm('You lost the set :( Play again?');
    }
    this.clearScores();
    return playAgain;
  }
}
