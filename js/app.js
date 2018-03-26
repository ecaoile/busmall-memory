'use strict';

Product.allProducts = [];

var tableLevel = 6; // Prints out 6x6 table

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
createRandImgIndex();


function renderGame() {
  // if it has nothing in it the 'console.log();'
  if (tableCellsArray[randTdIndex].innerHTML) {
    console.log('THis td has stuff');
    createRandTdIndex();
  }



  var randTdElement = tableCellsArray[randTdIndex];
  randTdElement.innerHTML = '<img src="' + Product.allProducts[randImgIndex].filePath + '" alt="' + Product.allProducts[randImgIndex].imgName + '" />';
}
renderGame();

// first cannot equal second

// random for img

// use first random index to place image in first td

// use second random index to place image in second td

// while (!tableCellsArray[randTdIndex].innerHTML === '') {
//   // then run random number again
// }



// one picture in a random td

// same picture in another random td

// random td can't equal last td



