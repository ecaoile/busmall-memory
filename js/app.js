'use strict';

Product.allProducts = [];

var storedUserName = localStorage.getItem('busmall.playername');
var usableUserName = JSON.parse(storedUserName);
if (usableUserName && usableUserName.length) {
  var username = usableUserName;
} else {
  username = 'Dave';
}

var storedDifficulty = localStorage.getItem('busmall.difficulty');
var usableDifficulty = JSON.parse(storedDifficulty);
if (usableDifficulty && usableDifficulty.length) {
  if (usableDifficulty === 'easy') {
    var tableLevel = 2;
  } else if (usableDifficulty === 'medium') {
    tableLevel = 4;
  } else if (usableDifficulty === 'hard') {
    tableLevel = 6;
  }
} else {
  tableLevel = 2;
}

var storedWins = localStorage.getItem('busmall.wins');
var usableWins = JSON.parse(storedWins);
if (usableWins) {
  var wins = usableWins;
} else {
  wins = 0;
}

var storedLosses = localStorage.getItem('busmall.losses');
var usableLosses = JSON.parse(storedLosses);
if (usableLosses) {
  var losses = usableLosses;
} else {
  losses = 0;
}
var storedTimes = localStorage.getItem('busmall.winTimes');
var usableTimes = JSON.parse(storedTimes);
if (usableTimes && usableTimes.length) {
  var winTimes = usableTimes;
} else {
  winTimes = [];
}

var lives = 3;
var livesContainer = document.getElementById('lives');

var beginWaitTime = 2000; // time before cards flip
var flipWaitTime = 1500;
var cardsMatched = 0; // Counter for num cards matched
var imgsDisplayed = [];

var timer = 0;
var timerContainer = document.getElementById('timer');
var runningTime;
function displayTimer() {
  timer++;
  timerContainer.textContent = timer;
}
setTimeout(() => {
  runningTime = setInterval(displayTimer, 1000);
}, beginWaitTime);

//find our table id="memory-game"
var memoryTable = document.getElementById('memory-game');

var imgClick1;
var clickedCard1;
var flipped = false;


// Create Table
for (var i = 0; i < tableLevel; i++) {
  var trElement = document.createElement('tr');
  for (var j = 0; j < tableLevel; j++) {
    var tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
  }
  memoryTable.appendChild(trElement);
}

// Create objects for the images
function Product(imgName, filePath, link) {
  this.imgName = imgName;
  this.filePath = filePath;
  this.link = link;
  Product.allProducts.push(this);
}
// Create Instances
// new Product(imgName, filePath, link);
new Product ('Bacon Beans', '../img/bacon-beans.jpg', './products.html#bacon-beans');
new Product ('Banana Slug Mask', '../img/banana-slug-mask.jpg', './products.html#banana-slug-mask');
new Product ('Cat Butt Gum', '../img/cat-butt-gum.jpg', './products.html#cat-butt-gum');
new Product ('Creepy Horse Man', '../img/creepy-horse-man.jpg', './products.html#creepy-horse-man.jpg');
new Product ('Cupcake Lip Balm', '../img/cupcake-lip-balm.jpg', './products.html#cupcake-lip-balm');
new Product ('Dog Beers', '../img/dog-beers.jpg', './products.html#dog-beers');
new Product ('Donald Trump Toilet Paper', '../img/donald-trump-toilet-paper.jpg', './products.html#donald-trump-toilet-paper');
new Product ('Emergency Unicorn', '../img/emergency-unicorn.jpg', './products.html#emergency-unicorn');
new Product ('Fez Bigfoot', '../img/fez-bigfoot.jpg', './products.html#fez-bigfoot');
new Product ('Glowing Finger Tentacles', '../img/glow-finger-tentacles.gif', './products.html#glow-finger-tentacles');
new Product ('Inflatable Unicorn Horn for Cats', '../img/inflatable-unicorn-horn-cats.jpg', './products.html#inflatable-unicorn-horn-cats');
new Product ('Instant Clip-On Man Bun', '../img/instant-clip-on-man-bun.jpg', './products.html#instant-clip-on-man-bun');
new Product ('Macho Tissues', '../img/macho-tissues.jpg', './products.html#macho-tissues');
new Product ('Nose Flute', '../img/nose-flute.jpg', './products.html#nose-flute');
new Product ('Rubber Chicken Socks', '../img/rubber-chicken-socks-feet.jpg', './products.html#rubber-chicken-socks-feet');
new Product ('Skeleton Scarf', '../img/skeleton-scarf.jpg', './products.html#skeleton-scarf');
new Product ('Squirrel Underpants Ornament', '../img/squirrel-underpants-ornament-spin.gif', './products.html#squirrel-underpants-ornament');
new Product ('Surprise Treasure Box', '../img/surprise-treasure-box.jpg', './products.html#surprise-treasure-box');
new Product ('Tech Monks Teacups', '../img/tech-monks-teacups.jpg', './products.html#tech-monks-teacups.jpg');
new Product ('Tin Foil Hat for Cats', '../img/tin-foil-hat-for-cats.jpg', './products.html#tin-foil-hat-for-cats');
new Product ('Unicorn Hooves', '../img/unicorn-hooves.jpg', './products.html#unicorn-hooves');
new Product ('Unicorn Mints', '../img/unicorn-mints.jpg', './products.html#unicorn-mints');
new Product ('Uranus Soap', '../img/uranus-soap.jpg', './products.html#uranus-soap');
new Product ('World Domination Notebook', '../img/world-domination-notebook.jpg', './products.html#world-domination-notebook');

//array of table's td
var tableCellsArray = memoryTable.getElementsByTagName('td');

// Num images used
var numUniqueImages = Math.floor(tableCellsArray.length / 2);

var randTdIndex = 0;
// first random index number for td
function createRandTdIndex() {
  randTdIndex = Math.floor(Math.random() * tableCellsArray.length);
  return randTdIndex;
}
createRandTdIndex();

var randImgIndex = '';

function createRandImgIndex() {
  randImgIndex = Math.floor(Math.random() * Product.allProducts.length);
  return randImgIndex;
}


function renderGame() {

  livesContainer.textContent = lives;

  // for loop to fill whole table
  numUniqueImages = Math.floor(tableCellsArray.length / 2);

  for (var i = 0; i < numUniqueImages; i++ ) {

    createRandImgIndex();

    while (imgsDisplayed.includes(Product.allProducts[randImgIndex].imgName)) {
      createRandImgIndex();
    }
    for (var j = 0; j < 2; j++) {
      // if it has nothing in it the 'console.log();'
      while (tableCellsArray[randTdIndex].innerHTML) {
        createRandTdIndex();
      }

      var randTdElement = tableCellsArray[randTdIndex];
      // randTdElement.innerHTML
      var divElement1 = document.createElement('div');
      divElement1.className = 'card-container';

      var divElement2 = document.createElement('div');
      divElement2.className = 'card';

      var divElement3 = document.createElement('div');
      divElement3.className = 'side back';

      var placeholderImgEl = document.createElement('img');
      placeholderImgEl.src = '../img/bus-mall-card-over.png';
      placeholderImgEl.alt = Product.allProducts[randImgIndex].imgName;

      divElement3.appendChild(placeholderImgEl);
      divElement2.appendChild(divElement3);

      var divElement4 = document.createElement('div');
      divElement4.className = 'side';

      var randomImgEl = document.createElement('img');
      randomImgEl.src = Product.allProducts[randImgIndex].filePath;
      randomImgEl.alt = Product.allProducts[randImgIndex].imgName;

      var linkEl = document.createElement('a');
      linkEl.href = Product.allProducts[randImgIndex].link;

      divElement4.appendChild(randomImgEl);
      divElement4.appendChild(linkEl);
      divElement2.appendChild(divElement4);
      divElement1.appendChild(divElement2);

      randTdElement.appendChild(divElement1);
    }
    imgsDisplayed.push(Product.allProducts[randImgIndex].imgName);
  }
}
renderGame();

// flip the cards so the placeholder shows
function flipCardsOnLoad() {
  var tdlist = memoryTable.getElementsByTagName('td');
  for (var i = 0; i < tdlist.length; i++) {
    var cardClass = tdlist[i].getElementsByClassName('card')[0];
    cardClass.classList.toggle('card-flip');
    // sideclass.className = 'side back';
  }
}

setTimeout( flipCardsOnLoad, beginWaitTime);
// on click flip card back to show image

var classForClick = document.getElementsByClassName('card');

for ( var k in classForClick){
  classForClick[k].addEventListener('click', handleClick1);
}

function handleClick1(event) {

  if(!flipped) {

    imgClick1 = event.target.alt;
    console.log(imgClick1);

    clickedCard1 = event.path[2];
    clickedCard1.classList.toggle('card-flip');

    clickedCard1.removeEventListener('click', handleClick1);
    flipped = true;

    return imgClick1, clickedCard1;

  } else {

    var imgClick2 = event.target.alt;
    console.log(imgClick1, imgClick2);

    var clickedCard2 = event.path[2];
    clickedCard2.classList.toggle('card-flip');

    if(imgClick1 === imgClick2) {
      console.log('It\'s a match!');
      // keep them flipped
      // change classes on divs
      clickedCard1.className= 'card-matched';
      clickedCard2.className = 'card-matched';

      clickedCard1.removeEventListener('click', handleClick1);
      clickedCard2.removeEventListener('click', handleClick1);

      cardsMatched++;

      if (cardsMatched === numUniqueImages) {
        setTimeout(() => {
          var endGameDiv = document.getElementById('end-of-game');
          endGameDiv.style.display = 'inherit';
          // TODO = Break Line in win message
          var endOfGameMessage = document.getElementById('end-of-game-message');
          endOfGameMessage.innerHTML = username + '</br>You are awesome because you won!! <br/> You finished in ' + timer + ' seconds';

          clearInterval(runningTime);
          wins++;
          winTimes.push(timer);
          saveToLocalStorage();
        }, 1500);
      }

      flipped = false;
      return;

    } else {

      setTimeout(function() {
        clickedCard1.classList.toggle('card-flip');
        clickedCard2.classList.toggle('card-flip');
      }, flipWaitTime);

      clickedCard1.addEventListener('click', handleClick1);
      lives--;
      setTimeout(() => {
        livesContainer.classList.toggle('life-lost');
        livesContainer.textContent = lives;
        // livesContainer.classList.toggle('life-lost');
      }, 1000);

      if (lives === 0) {
        losses++;
        setTimeout(() => {
          var endGameDiv = document.getElementById('end-of-game');
          endGameDiv.style.display = 'inherit';

          var endOfGameMessage = document.getElementById('end-of-game-message');
          endOfGameMessage.innerHTML = username + '<br/>You are awesome but you ran out of lives';

        }, 2000);

        saveToLocalStorage();

      }

      console.log(lives);
      flipped = false;
    }
  }
}

function saveToLocalStorage() {
  var jsonWins = JSON.stringify(wins);
  localStorage.setItem('busmall.wins', jsonWins);

  var jsonLoses = JSON.stringify(losses);
  localStorage.setItem('busmall.losses', jsonLoses);

  var jsonTimes = JSON.stringify(winTimes);
  console.log(jsonTimes);
  localStorage.setItem('busmall.winTimes', jsonTimes);
}



