// COIN FLIP SIMULATOR
// HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
let onesEl = document.getElementById("one-sided");
let twosEl = document.getElementById("two-sided");
let threesEl = document.getElementById("three-sided");
let foursEl = document.getElementById("four-sided");
let fivesEl = document.getElementById("five-sided");
let sixesEl = document.getElementById("six-sided");

// Count variables
let numHeads = 0;
let numTails = 0;
let numOnes = 0;
let numTwos = 0;
let numThrees = 0;
let numFours = 0;
let numFives = 0;
let numSixes = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", flipCoin);
document.getElementById("button").addEventListener("click", rollDice);

function flipCoin() {
  // generate a random number
  let randNum = Math.random();
  console.log(randNum);

  // Stimulate the coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src= img/heads.png />";
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src= img/tails.png />";
    numTails++;
    tailsEl.innerHTML = numTails;
  }
}

function rollDice() {
  console.log("Rolling dice");
  let randNum = Math.random();
  // Stimulate the coin flip
  if (randNum < 0.17) {
    outputEl.innerHTML = "<img src= img/1.png />";
    numOnes++;
    onesEl.innerHTML = numOnes;
  } else if (randNum < 0.34) {
    outputEl.innerHTML = "<img src= img/2.png />";
    numTwos++;
    twosEl.innerHTML = numTwos;
  } else if (randNum < 0.51) {
    outputEl.innerHTML = "<img src= img/3.png />";
    numThrees++;
    threesEl.innerHTML = numThrees;
  } else if (randNum < 0.68) {
    outputEl.innerHTML = "<img src= img/4.png />";
    numFours++;
    foursEl.innerHTML = numFours;
  } else if (randNum < 0.85) {
    outputEl.innerHTML = "<img src= img/5.png />";
    numFives++;
    fivesEl.innerHTML = numFives;
  } else {
    outputEl.innerHTML = "<img src= img/6.png />";
    numSixes++;
    sixesEl.innerHTML = numSixes;
  }
}
