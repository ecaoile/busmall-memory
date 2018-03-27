'use strict';

Product.allProducts = [];

var tableLevel = 4; // Prints out 6x6 table

var waitTime = 2000; // time before cards flip
var imgsDisplayed = [];
//find our table id="memory-game"
var memoryTable = document.getElementById('memory-game');

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
new Product ('Bacon Beans', '../img/bacon-beans.jpg', '/products.html#bacon-beans');
new Product ('Banana Slug Mask', '../img/banana-slug-mask.jpg', '/products.html#banana-slug-mask');
new Product ('Cat Butt Gum', '../img/cat-butt-gum.jpg', '/products.html#cat-butt-gum');
new Product ('Creepy Horse Man', '../img/creepy-horse-man.jpg', '/products.html#creepy-horse-man.jpg');
new Product ('Cupcake Lip Balm', '../img/cupcake-lip-balm.jpg', '/product.html#cupcake-lip-balm');
new Product ('Dog Beers', '../img/dog-beers.jpg', '/product.html#dog-beers');
new Product('Donald Trump Toilet Paper', '../img/donald-trump-toilet-paper.jpg', '/product.html#donald-trump-toilet-paper');
new Product('Emergency Unicorn', '../img/emergency-unicorn.jpg', '/product.html#emergency-unicorn');
new Product('Fez Bigfoot', '../img/fez-bigfoot.jpg', '/product.html#fez-bigfoot');
new Product('Glowing Finger Tentacles', '../img/glow-finger-tentacles.gif', '/product.html#glow-finger-tentacles');
new Product('Inflatable Unicorn Horn for Cats', '../img/inflatable-unicorn-horn-cats.jpg', '/product.html#inflatable-unicorn-horn-cats');
new Product('Instant Clip-On Man Bun', '../img/instant-clip-on-man-bun.jpg', '/product.html#instant-clip-on-man-bun');
new Product('Macho Tissues', '../img/macho-tissues.jpg', '/product.html#macho-tissues');
new Product('Nose Flute', '../img/nose-flute.jpg', '/product.html#nose-flute');
new Product('Rubber Chicken Socks', '../img/rubber-chicken-socks-feet.jpg', '/products.html#rubber-chicken-socks-feet');
new Product('Skeleton Scarf', '../img/skeleton-scarf.jpg', '/product.html#skeleton-scarf');
new Product('Squirrel Underpants Ornament', '../img/squirrel-underpants-ornament-spin.gif', '/product.html#squirrel-underpants-ornament');
new Product('Surprise Treasure Box', '../img/surprise-treasure-box.jpg', '/product.html#surprise-treasure-box');
new Product('Tech Monks Teacups', '../img/tech-monks-teacups.jpg', '/product.html#tech-monks-teacups.jpg');
new Product('Tin Foil Hat for Cats', '../img/tin-foil-hat-for-cats.jpg', '/product.html#tin-foil-hat-for-cats');
new Product('Unicorn Hooves', '../img/unicorn-hooves.jpg', '/product.html#unicorn-hooves');
new Product('Unicorn Mints', '../img/unicorn-mints.jpg', '/product.html#unicorn-mints');
new Product('Uranus Soap', '../img/uranus-soap.jpg', '/product.html#uranus-soap');
new Product('World Domination Notebook', '../img/world-domination-notebook.jpg', '/product.html#world-domination-notebook');

//array of table's td
var tableCellsArray = memoryTable.getElementsByTagName('td');

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

  // for loop to fill whole table
  var numUniqueImages = Math.floor(tableCellsArray.length / 2);

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
      randTdElement.innerHTML =
      '<div class="card-container">\
        <div class="card">\
          <div class="side back">\
            <img src="../img/bus-mall-card-over.png" alt="Bus Mall Placeholder">\
          </div>\
          <div class="side">\
            <img src="' + Product.allProducts[randImgIndex].filePath + '" alt="' + Product.allProducts[randImgIndex].imgName + '" />\
          </div>\
        </div>\
      </div>';
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

setTimeout( flipCardsOnLoad, waitTime);
// on click flip card back to show image

memoryTable.addEventListener('click', handleClick1);

function handleClick1(event) {

  if (event.target.nodeName === 'IMG') {
    var cardContainer = event.path[2];
    cardContainer.classList.toggle('card-flip');

    var imgClick1 = event.path[2].children[1].children[0].alt;
    console.log(imgClick1);

    // memoryTable.addEventListener('click', handleClick2);

    // function handleClick2 () {
    //   if (event.target.nodeName === 'IMG') {
    //     var cardContainer = event.path[2];
    //     cardContainer.classList.toggle('card-flip');

    //     imgClick2 = event.path[2].children[1].children[0].alt;

    //     return imgClick2;
    //   }
    //   console.log(imgClick1, imgClick2);
    // }



  }
}

//  add an event lister to the table
//  get name of image on click 1
//  get name of image on click 2
//  compart click 1 and click 2
//  if true stay flipped
// if false flip both back and lives--

