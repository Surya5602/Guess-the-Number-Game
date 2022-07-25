'use strict';
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage= function(message)
{
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
   displayMessage('no number ')
  }
  //when guess is wrong
  else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =guess>number?'too high!':'too low';
      score--;
      document.querySelector('.score ').textContent = score;
    } else {
      displayMessage('Better luck next time')
      document.querySelector('.score ').textContent = 0;
    }
  }
  

  // when player wins
  else {
   displayMessage('correct Number');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = number;

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      document.querySelector('.highscore').value = highscore;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...');
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score ').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  });
});
