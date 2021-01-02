'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent =
    message;
}
document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
    displayMessage('No number! ');
    
    //when player win.
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = 
        secretNumber;

        document.querySelector('body').
        style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = 
        '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').
            textContent = highscore;
        }    

        //when guess is different
    } else if(guess !== secretNumber) {
        if (score > 1 )  {
            score--;
            displayMessage(guess > secretNumber ? ' too high!' : ' too low!');
            document.querySelector('.score').textContent = 
            score;
        } else {
            displayMessage('you lost the game');
            document.querySelector('.score').textContent =
            0;
        }        
    }
});          


document.querySelector('.again').addEventListener('click',function() {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...')
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = null ;
    document.querySelector('.number').style.width = '15rem';

});

