'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);

  //when there is no input
  if (!guess) {
    displayMessage('😞 No Number');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '😞 Number is to big' : '😞 Number is to small'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😞 You lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//restore everything
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
