'use strict';

var productImages = document.getElementsByClassName('prod-img-container');
var fullSizeImageContainer = document.getElementById('full-prod-img');
var imgElement = document.createElement('img');
for (var i = 0; i < productImages.length; i++) {
  productImages[i].addEventListener('click', imageClick);
}

function imageClick(event) {
  console.log(event.target);
  console.log(event.target.src);
  if (event.target.src) {
    imgElement.src = event.target.src;
    fullSizeImageContainer.style.display = 'inherit';
    fullSizeImageContainer.appendChild(imgElement);
  }
}

var closeX = document.getElementById('close-x');
closeX.addEventListener('click', xClick);

function xClick(event) {
  if (event.target) {
    fullSizeImageContainer.style.display = 'none';
  }
}