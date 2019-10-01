// Required to pass around string values
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
    if (input == 0) input = rand0toX(3);
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

  comparePlays(player, computer) {
    let result;
    player = player.toLowerCase();
    computer = computer.toLowerCase();
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
    if (result == 'w') output = 'You win. ' + player + ' beats ' + computer;
    else if (result == 'l') output = 'You lose. ' + player + ' loses to ' + computer;
    else if (result == 'd') output = 'Draw. Both picked ' + player;
    else output = 'Error, no result.';
    return output;
  }

  confirmSelection() {}

  playBestOf5() {}
}
