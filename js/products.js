'use strict';

Product.allProducts = [];

// Create objects for the images
function Product(imgName, filePath, id, desc) {
  this.imgName = imgName;
  this.filePath = filePath;
  this.id = id;
  this.desc = desc;
  Product.allProducts.push(this);
}
// Create Instances
// new Product(imgName, filePath, link);
new Product('Bacon Beans', '../img/bacon-beans.jpg', 'bacon-beans', 'Do you like bacon and jellybeans? You can get the best of both worlds with bacon beans! Now you can clog your arteries and get diabetes (or as Wilford Brimley would say it: DIABEETUS) at the same time!');
new Product('Banana Slug Mask', '../img/banana-slug-mask.jpg', 'banana-slug-mask', 'Sometimes, you might be feeling sluggish and want to show how you feel to the whole world. With this banana slug mask, you\'ll be the life of the party, or should I say the slug of the party?!');
new Product('Bigfoot Rescue Team Fez', '../img/fez-bigfoot.jpg', 'bigfoot-rescue-fez', 'Show your pride in bigfoot\'s research and rescue unit with this classy fez! Color is red, so people know you mean business. We can\'t guarantee that this fez will actually help you find bigfoot, but we can guarantee it\'ll make you look special.');
new Product('Cat Butt Gum', '../img/cat-butt-gum.jpg', 'cat-butt-gum', 'It sounds nasty, but sometimes you want gum that has as bad of an attitude as you do on cranky days. You can also give it as a present to that special someone who needs to know how you feel about them.');
new Product('Creepy Horse Man', '../img/creepy-horse-man.jpg', 'creepy-horse-man', 'Once an ordinary office worker, this man had a terrible accident involving a horse and some glue. Behold: Creepy Horse Man! Dressed in a tuxedo and holding a suitcase full of mysterious goodies, Creepy Horse Man is always ready for action! You ever see Kingsman? Yeah...');
new Product('Cupcake Lip Balm', '../img/cupcake-lip-balm.jpg', 'cupcake-lip-balm', 'When you put lip balm on your lips, sometimes you want something tastier than the bland residue from generic lip balms. Look no further! With a cupcake lip balm, it\'ll feel like there\'s a party waiting to enter your mouth!');
new Product('Dog Beers Sign', '../img/dog-beers.jpg', 'dog-beers', 'Make a statement about how much you love beer with this amazing sign! With its vintage look, this sign looks like it could actually come from the Prohibition era.');
new Product('Donald Trump Toilet Paper', '../img/donald-trump-toilet-paper.jpg', 'donald-trump-toilet-paper', 'For folks who aren\'t really fans of Donald Trump, now you have a way of showing him how you feel every time you use the toilet! Etched on every piece of toilet paper is a picture of #45\'s lovely mug. Since the toilet paper is triple ply, you can really dig in and express your true love.');
new Product('Emergency Unicorn', '../img/emergency-unicorn.jpg', 'emergency-unicorn', 'Sometimes life gets you down and you just want the comfort of a live unicorn to cheer you up. Unfortunately, we don\'t quite have the technology to summon a unicorn, but we have the next best thing: emergency unicorn sounds! With 4 phrases recorded from a real unicorn, anyone in a bad mood will suddenly feel like they\'re on cloud 9!');
new Product('Glowing Finger Tentacles', '../img/glow-finger-tentacles.gif', 'glow-finger-tentacles', 'Ever wish you had longer fingers? Tentacle fingers?! Well, now you can with these glow-in-the-dark finger tentacles! Get your tentacle on...if you\'re into that.');
new Product('Inflatable Unicorn Horn for Cats', '../img/inflatable-unicorn-horn-cats.jpg', 'inflatable-unicorn-horn-cats', 'Does your cat ever feel like a unicorn? Now it can be what it truly feels on the inside! Get this inflatable unicorn horn to put on your cat\'s head. The design came from an actual unicorn!');
new Product('Inflatable Wizard Hat for Cats', '../img/inflatable-wizard-hat-cats.jpg', 'inflatable-wizard-hat-cats', 'Does your cat ever feel like a wizard? Now it can be what it truly feels on the inside! Get this inflatable wizard hat to put on your cat\'s head. With this hat, your cat will be in the mood to put a spell on all the objects it knocks over!');
new Product('Instant Clip-On Man Bun', '../img/instant-clip-on-man-bun.jpg', 'instant-clip-on-man-bun', 'Some guys have trouble growing hair, and that\'s okay. If you want a man bun but can\'t grow one out for whatever reason, this product is for you. It comes in a variety of natural and unnatural hair colors.');
new Product('Macho Tissues', '../img/macho-tissues.jpg', 'macho-tissues', 'We all know that real men don\'t cry. Even so, there are situations where you\'d want to use tissues. Sometimes you might bleed from doing something manly like a round of fisticuffs. Other times, you might be sweating after a long day of manly activities! Let everyone know that you only use tissues for blood and sweat, but never tears!');
new Product('Nose Flute', '../img/nose-flute.jpg', 'nose-flute', 'Some people have weird talents. Some people don\'t know they have weird talents until they\'ve tried out weird things. Do you have a talent for playing the flute with your nose? You\'ll never know unless you try this nose flute! This product comes in a variety of fabulous colors. Get one today and make some music!');
new Product('Rubber Chicken Socks', '../img/rubber-chicken-socks-feet.jpg', 'rubber-chicken-socks-feet', 'Our rubber chicken socks give you wings! They\'re cheap, cheap, cheap!');
new Product('Skeleton Scarf', '../img/skeleton-scarf.jpg', 'skeleton-scarf', 'Do you love skeletons? Do you love them enough to wear them? Well, don\'t keep your skeletons in the closet. Take them out and put them on in the form of a scarf! This skeleton will show everyone how passionate you are about skeletons.');
new Product('Squirrel Underpants Ornament', '../img/squirrel-underpants-ornament-spin.gif', 'squirrel-underpants-ornament', 'Tired of regular spherical ornaments? We\'ve got something unique for you. How about a squirrel wearing underpants? It even has batteries for when you want it to spin! Now your uber 1337 squirrel can do 360 noscope! This will certainly spice up your Christmas tree.');
new Product('Surprise Treasure Box', '../img/surprise-treasure-box.jpg', 'surprise-treasure-box', 'Do you like surprises? Do you like treasure boxes? Well, here\'s a surprise treasure box for you! What\'s inside? Who knows?! It could be treasure. It could be junk. Note: because the surprise inside the treasure could be a variety of items, the product weight can vary between different customers/purchases. Please be prepared to lift up to 100 lbs.');
new Product('Tech Monks Teacups', '../img/tech-monks-teacups.jpg', 'tech-monks-teacups', 'Are you the kind of person who likes to mix tradition with technology? Are you a monk at heart, but a techie at the same time? Most monks are thought of as not technically savvy, but you know very well that there are some people who break the mold. Now you can display the kind of diversity that you embody with these tech monkey cups. One cup contains a monk farting around on the laptop, and the other contains a monk talking on a cell phone.');
new Product('Tin Foil Hat for Cats', '../img/tin-foil-hat-for-cats.jpg', 'tin-foil-hat-for-cats', 'Does your cat believe in conspiracy theories? Does it want some kind of shield on its head to prevent the government from controlling its mind?! We have the perfect product for you: a tin foil hat for your cat. This hat protects against possible threats including HAARP, gamma rays, electromagnetic fields, RFID implants, and dog ESP!');
new Product('Unicorn Hooves', '../img/unicorn-hooves.jpg', 'unicorn-hooves', 'Is your unicorn missing hooves? I don\'t know how the heck that happened or even how you got a unicorn in the first place, but we have spare hooves if you need them. Turn your majestic unicorn into the perfect cyborg. These hooves allow your unicorn to walk on water and provide rocket propulsion in case its wings don\'t work.');
new Product('Unicorn Mints', '../img/unicorn-mints.jpg', 'unicorn-mints', 'Ever have stinky breath and wish you could eat breath mints that make your mouth feel you could shoot rainbows out of it? Introducing unicorn mints: the perfect way to deal with the stink and make your mouth feel magical!');
new Product('Uranus Soap', '../img/uranus-soap.jpg', 'uranus-soap', 'Ever wanted to try soap that\'s literally out of this world? Try out our Uranus Soap! Yes, this soap is from the nether regions...of space. This soap is so good it\'ll stop bacteria in its tracks and freeze everything around it at the same time.');
new Product('World Domination Notebook', '../img/world-dom.jpg', 'world-domination-notebook', 'Do you need a discreet place to write out your plans for world domination? Even though you could type out your plans on a computer, that\'s not very safe! The government is watching you! Use this trusty notebook to write up all your devious plans in a secure place.');


var prodList = document.getElementById('product-list');
var fullSizeImageContainer = document.getElementById('full-prod-img');
var imgElement = document.createElement('img');

function renderProductPage() {
  for (var i in Product.allProducts) {
    // creates a new li for the list of products
    var liElement = document.createElement('li');

    // sets the id for each product-container div element
    var productContainerDiv = document.createElement('div');
    productContainerDiv.setAttribute('id', Product.allProducts[i].id);
    productContainerDiv.setAttribute('class', 'product-container');

    // set the img for the corresponding product
    var productImgDiv = document.createElement('div');
    productImgDiv.setAttribute('class', 'prod-img-container');
    var thumbnailImg = document.createElement('img');
    thumbnailImg.setAttribute('src', Product.allProducts[i].filePath);
    productImgDiv.appendChild(thumbnailImg);
    productContainerDiv.appendChild(productImgDiv);

    // creates an event listener for the product image
    thumbnailImg.addEventListener('click', imageClick);

    // adds the product name
    var productInfoDiv = document.createElement('div');
    productInfoDiv.setAttribute('class', 'product-text');
    var h2Element = document.createElement('h2');
    h2Element.textContent = Product.allProducts[i].imgName;
    productInfoDiv.appendChild(h2Element);

    // adds the product description
    var pElement = document.createElement('p');
    pElement.textContent = Product.allProducts[i].desc;
    productInfoDiv.appendChild(pElement);

    //appends the whole product info div to the container
    productContainerDiv.appendChild(productInfoDiv);

    //appends the whole container div to the li
    liElement.appendChild(productContainerDiv);

    // appends li to to ul
    prodList.appendChild(liElement);
  }
}

fullSizeImageContainer.addEventListener('click', closeClick);

function imageClick(event) {
  if (event.target) {
    imgElement.src = event.target.src;
    imgElement.className = 'clicked';
    fullSizeImageContainer.style.display = 'inherit';
    fullSizeImageContainer.appendChild(imgElement);
  }
}

function closeClick(event) {
  if (event.target.className !== 'clicked') {
    fullSizeImageContainer.style.display = 'none';
  }
}

function displayBottomButton() {
  // append a button letting user return to the top
  var returnToTopElement = document.getElementById('bottom-button');
  var buttonElement = document.createElement('button');
  buttonElement.setAttribute('class', 'big-button');
  buttonElement.setAttribute('id', 'bottom-button');
  buttonElement.setAttribute('onClick', 'window.scrollTo(0,0)');
  // note: \u2191 means up arrow in JavaScript
  buttonElement.textContent = '\u2191 return to top \u2191';
  returnToTopElement.appendChild(buttonElement);
}

var resetButton = document.getElementById('dat-reset');
resetButton.style.display = 'none';
resetButton.addEventListener('click', resetSearch);
var ul = document.getElementById('product-list');
var li = ul.getElementsByTagName('li');

/* creates notification that appears when there are no matches */
var noneDisplayed = document.getElementById('none-displayed');
noneDisplayed.style.display = 'none';
var noMatchText = document.createElement('h2');
noMatchText.textContent = 'Your search query does not match any of our products. Please clear the search box and try again.';
noneDisplayed.appendChild(noMatchText);

function productSearch() {
  var input = document.getElementById('myInput');
  var filter = input.value.toUpperCase();

  if (filter) {
    resetButton.style.display = '';

  }
  else {
    resetButton.style.display = 'none';
  }
  var numDisplayed = 0;
  for (var i = 0; i < li.length; i++) {
    if (li[i].getElementsByTagName('div')[0]) {
      var productContainer = li[i].getElementsByTagName('div')[0];
    }
    var textContainer = productContainer.getElementsByTagName('div')[1];
    var h2 = textContainer.getElementsByTagName('h2');
    var h2TextContent = h2[0].innerHTML;
    if (h2TextContent.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
      numDisplayed++;
    } else {
      li[i].style.display = 'none';
    }
  }
  if (numDisplayed === 0) {
    noneDisplayed.style.display = '';
  }
  else {
    noneDisplayed.style.display = 'none';
  }
}

function resetSearch(event) {
  if (event.target.id === 'dat-reset') {
    for (var i = 0; i < li.length; i++) {
      li[i].style.display = '';
    }
  }
  resetButton.style.display = 'none';
  noneDisplayed.style.display = 'none';

}
renderProductPage();
displayBottomButton();