'use strict';

Product.allProducts = [];

//find our table id="memory-game"
var memoryTable = document.getElementById('memory-game');

// Create Table

for (var i = 0; i < 6; i++) {
  var trElement = document.createElement('tr');
  for (var j = 0; j < 6; j++) {
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

//array of table's td


