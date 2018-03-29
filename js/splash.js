'use strict'

function localStorageCheck() {
  var jsonUserName = localStorage.getItem('busmall.playername');
  var usableStoredUserName = JSON.parse(jsonUserName);
  if (usableStoredUserName && usableStoredUserName.length) {
    var initGreeting = document.getElementById('first-greeting');
    initGreeting.innerHTML = 'Welcome back, ' + usableStoredUserName + '! <br> Wanna play again?';

    var placeholderText = document.getElementById('player-name');
    placeholderText.placeholder = 'Wanna change your name ?';

    var resultsButton = document.getElementById('results');
    resultsButton.style.display = 'inline-block';
  }
}
localStorageCheck();

var userName;
var difficulty;

var signInForm = document.getElementById('sign-in-form');
signInForm.addEventListener('submit', userInput);

function userInput(event) {
  event.preventDefault();
  userName = event.target.userName.value;
  difficulty = event.target.difficulty.value;


  var usableUserName = JSON.stringify(userName);
  var usableDifficulty = JSON.stringify(difficulty);
  localStorage.setItem('busmall.playername', usableUserName);
  localStorage.setItem('busmall.difficulty', usableDifficulty);

  window.location = './html/game.html#memory-game';

}

