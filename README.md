# busmall-memory
Final Project for Code Fellows 201d33

Our project takes a player/user from the main page and provides a clickable button to open our game page.  We ask the player/user to provide their name in an input/text box and store that value in local storage for later use. We also provided a selector button on our home page where the player/user is able to select the difficulty mode for our game - easy, medium, or hard. The difficulty mode is also loaded in local storage for later use. 

After a player/user provides a name, (and even if they don't), the game is accessed from the "Play" button.  On submit, the button switches pages to the game.html/app.js pages and encourages the player/user to play our memory game. The game loads at that point at the level of difficulty that the player/user selected earlier.  Our cards also allow the player/user to click a small icon which opens up a separate tab for the product page to display.  This offers the player/user the opportunity to view our products without having to close/end the game earlier than they wanted.  

After the player/user has finished the game, either with a win or a loss, results are displayed using an overlay over the table.  We display a custom message, using the player/user name, showing total wins, total losses, and best time.  

When the game is finished, the player/user is provided the opportunity to display results in a separate page, utilizing Chart.js as the chart engine.  On this page, there is also a button, encouraging the player/user to visit our products page for more information or details of the products that they've seen.  

Our Products page showcases our current product offerings with both an easy-to-see image size and product description next to each product.  Using an object constructor in our code allows our marketing department a simple way to swap in different sets of new products to keep our game fresh (and sell more/different products).


Borrowed our images from Archie McPhee
https://mcphee.com/

Justin Morris [11:16 AM]
Using tools to create our full color palette:
https://coolors.co/e8f1f2-a9bcd0-0b4f6c-171d1c-415a77

Info on flip transitions
Sam Porter Giffords [3:17 PM]
https://learn.shayhowe.com/advanced-html-css/transitions-animations/

Info on toggling between classes 
Sam Porter Giffords [4:07 PM]
https://www.w3schools.com/howto/howto_js_toggle_class.asp

Info on specific event listeners and how they interact with DOM elements
Sam Porter Giffords [4:48 PM]
https://www.w3schools.com/js/js_htmldom_eventlistener.asp

Research on how to position the image cards overlayed on the placeholder image.
Sam Porter Giffords [5:00 PM]
https://discourse.wicg.io/t/position-an-element-relatively-to-another-element-from-anywhere-in-the-dom/968

Research on how to only allow two clicks on images.  
darryl bowen [5:03 PM]
https://stackoverflow.com/questions/27476415/creating-a-simple-memory-card-game-need-to-allow-only-two-clicks-at-a-time

Research on navigating down through nodes to find specific DOM elements to target name for compare
Sam Porter Giffords [5:13 PM]
https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName

Further research on how to compare click image 1 to click image 2 as match or not
Sam Porter Giffords [5:20 PM]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

Research on refactoring table div classes.  Putting divs as specific variables inside td elements to populate table.
Sam Porter Giffords [10:05 AM]
https://stackoverflow.com/questions/8008110/assigning-classes-to-elements-through-css
stackoverflow.com

Research on how to make cards flip over when matched and back over if not matched
darryl bowen [10:48 AM]
http://marciavillalba.com/foobar/2015/10/06/create-memory-game-with-javascript/

Research on how to create a timer for game results – 2 articles
Sam Porter Giffords [2:24 PM]
https://stackoverflow.com/questions/20318822/how-to-create-a-stopwatch-using-javascript

Sam Porter Giffords [2:32 PM]
https://stackoverflow.com/questions/41709953/creating-a-stopwatch-from-scratch-in-javascript
Research on how to disable click event after cards one and two have been clicked, whether matched or not
Sam Porter Giffords [2:42 PM]
https://stackoverflow.com/questions/31702173/execute-clickfunction-only-first-click

Research on how to sort an array of seconds properly without running in to the alphabetical problems caused when numbers are saved as strings
Sam Porter Giffords [3:51 PM]
https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly

Research on how to handle mouse click speed because game breaks when mouse is clicked too fast – timeouts don’t necessarily handle this event well.
Sam Porter Giffords [9:28 AM]
https://stackoverflow.com/questions/4818507/getting-systems-double-click-timer-interval-in-wpf-value-from-control-panel

Font selection/s:
Justin Morris [10:59 AM]
https://fonts.google.com/?selection.family=Cabin&query=cabin

Research how to horizontally and vertically align an element inside a div:

https://css-tricks.com/centering-css-complete-guide/
CSS-Tricks


Research on how to create a fade-in transition for our products page

Justin Morris [1:23 PM]

https://www.w3schools.com/css/css3_animations.asp
w3schools.com

Then, Justin wrote this himself:

.fly-in {
 animation-name: fadein;
 animation-duration: 1s;
 animation-timing-function: ease;
}
@-webkit-keyframes fadein {
 0% {opacity: 0;}
 
 100% {opacity: 1;}
}



