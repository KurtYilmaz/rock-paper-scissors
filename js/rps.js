// Rock paper scissor class
export class Rps {
  constructor() {
    this.playerScore = 0;
    this.computerScore = 0;
    this.round = 1;
  }

  computerPlay(input = 0) {
    let result;
    if (input == 0) input = Math.random() * 3;
    input = Math.ceil(input);
    switch (input) {
      case 1:
        result = "rock";
        break;
      case 2:
        result = "paper";
        break;
      case 3:
        result = "scissors";
        break;
      default:
        result = "rock";
    }
    return result;
  }

  comparePlays(player, computer) {
    let result;
    if (player == "rock") {
      if (computer == "scissors") {
        result = "w";
      } else if (computer == "paper") {
        result = "l";
      } else {
        result = "d";
      }
    } else if (player == "scissors") {
      if (computer == "paper") {
        result = "w";
      } else if (computer == "rock") {
        result = "l";
      } else {
        result = "d";
      }
    } else if (player == "paper") {
      if (computer == "rock") {
        result = "w";
      } else if (computer == "scissors") {
        result = "l";
      } else {
        result = "d";
      }
    } else {
      result = "e";
    }
    return result;
  }

  playRound(player, computer) {
    let output;
    let result = this.comparePlays(player, computer);
    if (result == "w") {
      this.playerScore += 1;
      output =
        "Round " +
        this.round +
        ": Win! Your " +
        player +
        " beats Computer's " +
        computer +
        ".";
    } else if (result == "l") {
      this.computerScore += 1;
      output =
        "Round " +
        this.round +
        ": Loss. Computer's " +
        computer +
        " beats your " +
        player +
        ".";
    } else if (result == "d")
      output =
        "Round " + this.round + ": Draw. Both picked " + player + ".";
    else output = "Error";
    this.round++;
    return output;
  }

  clearScores() {
    this.playerScore = 0;
    this.computerScore = 0;
    this.round = 1;
  }
}
