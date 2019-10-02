import { Rps } from './rps.js';

const rps = new Rps();

function testWin(a, b) {
  expect(rps.comparePlays(a, b)).toBe('w');
  expect(rps.playRound(a, b)).toEqual(expect.stringContaining('You win'));
}

function testLose(a, b) {
  expect(rps.comparePlays(a, b)).toBe('l');
  expect(rps.playRound(a, b)).toEqual(expect.stringContaining('You lose'));
}

function testDraw(a, b) {
  expect(rps.comparePlays(a, b)).toBe('d');
  expect(rps.playRound(a, b)).toEqual(expect.stringContaining('Draw'));
}

function testError(a, b) {
  expect(rps.comparePlays(a, b)).toBe('e');
  expect(rps.playRound(a, b)).toEqual(expect.stringContaining('Error'));
}

//Testing computer pick
test('computer gets < 1', () => {
  expect(rps.computerPlay(0.5)).toBe('Rock');
});

test('computer gets < 2', () => {
  expect(rps.computerPlay(1.99)).toBe('Paper');
});

test('computer gets < 3', () => {
  expect(rps.computerPlay(2.1)).toBe('Scissors');
});

test('computer gets 2', () => {
  expect(rps.computerPlay(2)).toBe('Paper');
});

// Player = rock
test('rock beats scissors', () => {
  let a = 'rock';
  let b = 'scissors';
  testWin(a, b);
});

test('rock loses to paper', () => {
  let a = 'rock';
  let b = 'paper';
  testLose(a, b);
});

test('rock draws rock', () => {
  let a = 'rock';
  let b = 'rock';
  testDraw(a, b);
});

// Player = paper
test('paper beats rock', () => {
  let a = 'paper';
  let b = 'rock';
  testWin(a, b);
});

test('paper loses to scissors', () => {
  let a = 'paper';
  let b = 'scissors';
  testLose(a, b);
});

test('paper draws paper', () => {
  let a = 'paper';
  let b = 'paper';
  testDraw(a, b);
});

// Player = scissors
test('scissor beats paper', () => {
  let a = 'scissors';
  let b = 'paper';
  testWin(a, b);
});

test('scissor loses to rock', () => {
  let a = 'scissors';
  let b = 'rock';
  testLose(a, b);
});

test('scissor draws scissor', () => {
  let a = 'scissors';
  let b = 'scissors';
  testDraw(a, b);
});

// Case sensitivity
test('case sensitivity: all upper', () => {
  let a = 'ROCK';
  let b = 'SCISSORS';
  testWin(a, b);
});

test('case sensitivity: random', () => {
  let a = 'ROcK';
  let b = 'scIsSors';
  testWin(a, b);
});

test('case sensitivity: one upper', () => {
  let a = 'rock';
  let b = 'SCISSORS';
  testWin(a, b);
});

// Garbage Inputs
test('garbage strings', () => {
  let a = 'sadf';
  let b = 'I';
  testError(a, b);
});

test('garbage strings', () => {
  let a = 'HSJDK';
  let b = 'asdf';
  testError(a, b);
});
