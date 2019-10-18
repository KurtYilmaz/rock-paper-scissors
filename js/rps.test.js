import { Rps } from "./rps.js";

const rps = new Rps();

function testWin(a, b) {
  expect(rps.comparePlays(a, b)).toBe("w");
  expect(rps.playRound(a, b)).toEqual(expect.stringContaining("Win"));
}

function testLose(a, b) {
  expect(rps.comparePlays(a, b)).toBe("l");
  expect(rps.playRound(a, b)).toEqual(expect.stringContaining("Loss"));
}

function testDraw(a, b) {
  expect(rps.comparePlays(a, b)).toBe("d");
  expect(rps.playRound(a, b)).toEqual(expect.stringContaining("Draw"));
}

function testError(a, b) {
  expect(rps.comparePlays(a, b)).toBe("e");
  expect(rps.playRound(a, b)).toEqual(expect.stringContaining("Error"));
}

//Testing computer pick
test("computer gets < 1", () => {
  expect(rps.computerPlay(0.5)).toBe("rock");
});

test("computer gets < 2", () => {
  expect(rps.computerPlay(1.99)).toBe("paper");
});

test("computer gets < 3", () => {
  expect(rps.computerPlay(2.1)).toBe("scissors");
});

test("computer gets 2", () => {
  expect(rps.computerPlay(2)).toBe("paper");
});

// Player = rock
test("rock beats scissors", () => {
  let a = "rock";
  let b = "scissors";
  testWin(a, b);
});

test("rock loses to paper", () => {
  let a = "rock";
  let b = "paper";
  testLose(a, b);
});

test("rock draws rock", () => {
  let a = "rock";
  let b = "rock";
  testDraw(a, b);
});

// Player = paper
test("paper beats rock", () => {
  let a = "paper";
  let b = "rock";
  testWin(a, b);
});

test("paper loses to scissors", () => {
  let a = "paper";
  let b = "scissors";
  testLose(a, b);
});

test("paper draws paper", () => {
  let a = "paper";
  let b = "paper";
  testDraw(a, b);
});

// Player = scissors
test("scissor beats paper", () => {
  let a = "scissors";
  let b = "paper";
  testWin(a, b);
});

test("scissor loses to rock", () => {
  let a = "scissors";
  let b = "rock";
  testLose(a, b);
});

test("scissor draws scissor", () => {
  let a = "scissors";
  let b = "scissors";
  testDraw(a, b);
});

test("bad input", () => {
  let a = "ssadf";
  let b = 3;
  testError(a, b);
});
