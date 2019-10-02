import { Rps } from './rps.js';

let playAgain;
const rps = new Rps();
do {
  playAgain = rps.game();
} while (playAgain);
