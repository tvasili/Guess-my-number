'use strict';
//Selecting an element in javascript
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "Correct Number!"
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = "No number";
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = "Correct Number!"
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secretnumber ? "Too high!" : "To low"

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '0'
    }
  }
})

/*Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('.number').textContent = "?";
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})