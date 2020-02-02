# Crystal Collector - Javascript/JQuery Game Logic

In this project, you'll create another fun and interactive game for web browsers. This app will dynamically update your HTML pages with the jQuery library.


### Overview

Reiterating jQuery concepts:

1. Improving abilities to change html through javascript/jQuery
2. Further use of global functions
3. Adding shortened syntax to the full game play process by using functions
4. Emphasizing the use of values

### CrystalsCollector Game


1. ![crystal collector](https://github.com/bltarkany/Crystal-Collector/blob/master/assets/images/gamepic.png)

   #### Demo Game Here
      [Crystal Collector](https://bltarkany.github.io/Crystal-Collector-Javascript-Jquery/)


2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

3. Here's how the app works:

   * There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

4. Follow GitHub instruction in Setting to deploy page.

5. Share with friends and family to enjoy.

##### Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.

* Utilize global functions to minimize game logic needs.

* Usage of onClick methods can be applied to any crystal photo of your choice.

* Creating a win/loss game check global function allows you to call it in multiple locations.
