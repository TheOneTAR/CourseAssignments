/**
 * Angry Dice game implementation.
 * ---------------------------------
 * Play the game Angry Dice without any dice! Site knows
 * and enforces the rules of the games.
 *
 * Author: Tiffany Caires
 * Date: 12/16/15
 */

window.onload = function() {
   document.getElementById("roll").onclick = roll;

   // Create the two dice when the program loads
   die_1 = new Die("die_1");
   die_2 = new Die("die_2");

   // Initialize the die_to_roll array
   die_to_roll.push(die_1, die_2);

   // Add the toggle event listeners to the dice.
   die_1.html.addEventListener('click', toggle_die_hold);
   die_2.html.addEventListener('click', toggle_die_hold);

   state = document.getElementById('state');
}

// an array that has the dice image paths
var dice = ['1.png', '2.png', 'angry.png','4.png','5.png','6.png'];

// Dice globals
var die_1;
var die_2; 

var die_to_roll = [];

// Goals to be rolled.
var goals = [
      ['1.png', '2.png'],
      ['angry.png', '4.png'],
      ['5.png', '6.png']
   ];

var current_goal = 0;

var state;

var stage = ['Stage 1', 'Stage 2', 'Stage 3', 'WINNER!'];
var stage_class = ['stage1', 'stage2', 'stage3', 'winner'];

function Die(id) {
   // Set the initial side of the die to 1
   this.side = dice[0];

   // Get the die's HTML element
   this.html = document.getElementById(id);

   // if the die is held
   this.held = false;

   this.roll = function() {
      // assign the side to a random image in the array
      this.side = dice[random_num(0,5)];

      // update the HTML die's image
      this.html.innerHTML = "<img src='" + this.side + "'/>";
   };

}

/**
 * Rolls any dice not held.
 */
function roll() {

   // Roll the dice to roll
   for (var i = 0; i < die_to_roll.length; i++) {
      die_to_roll[i].roll();
   };

   // Check to see if a stage is progressed
   check_game();
}

/**
 * Triggered when a user clicks a die.
 * Removes or adds the die to the die_to_roll array,
 * so it is either held or rolled.
 * 
 * event: the click event on the die
 */
function toggle_die_hold(event){
   if (event.target.parentElement === die_1.html) {
      hold_die(!die_1.held, die_1);
   } else if (event.target.parentElement === die_2.html) {
      hold_die(!die_2.held, die_2);
   }
}

/**
 * Toggles the hold state of a die, 
 * first checking if it's legal.
 */
function hold_die(hold, die) {
      // if hold is true, remove die from die_to_roll
      // and toggle hold style
      if (die.side == '6.png') {
         state.innerHTML += " You cannot hold a six";
      } else if (hold && goals[current_goal].indexOf(die.side) != -1) {
         die.html.className = "hold";
         var index = die_to_roll.indexOf(die);
         if (index > -1 ) {
             die_to_roll.splice(index, 1);
         }
         die.held = true;
      } else if (hold) {
         state.innerHTML += 
            " You cannot hold a dice that isn't part of the current goal stage";
      } else {
         die.html.className = "";
         die_to_roll.push(die);
         die.held = false;
      }
}

/**
 * Check to see if the dice are angry.
 * Reset the stage to 0 if angry, 
 * announce the anger, and unhold all dice.
 */
function check_game() {
   if (die_1.side == 'angry.png' & die_2.side == 'angry.png') {
      // ANGRY!!
      current_goal = 0;
      state.textContent = "You're ANGRY!! Back to Stage 1";
      state.className = "angry";
   } else {
      if (goals[current_goal].indexOf(die_1.side) != -1 &&
            goals[current_goal].indexOf(die_2.side) != -1 && 
            die_2.side != die_1.side) {
         // Update goal
         current_goal++;

         // Unhold all die
         if (die_1.held) {
            hold_die(false, die_1);
         }
         if (die_2.held) {
            hold_die(false, die_2);
         }
      }
      state.textContent = stage[current_goal];
      state.className = stage_class[current_goal];

      if (current_goal == 3) {
         winner();
      }
   }
}

/** 
 * Hides the roll button and asks the user 
 * if they wish to play again.
 */
function winner() {
   document.getElementById("roll").className = "hidden";
   document.getElementById("again").className = "";
   document.getElementById("yes_again").onclick = play_again;
}

/**
 * Resets the game to play again.
 */
function play_again() {
   document.getElementById("roll").className = "";
   document.getElementById("again").className = "hidden";
   document.getElementById("yes_again").removeAttribute("onclick");
   current_goal = 0;
   check_game();
}

/**
 * Helper function that provides a random int from min to max.
 */
function random_num(min, max) {
   return Math.floor(Math.random() * (max + 1)) + min;
}