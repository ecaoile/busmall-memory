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


