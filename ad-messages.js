// START EDITING
// ================================================================================================
// Put here the number of miliseconds you want for the quotes to change. By defautl, it's 10 seconds, so it's 10000.
var secs = 10000;

// Put here the style of desired borders for the quotes box.
// Choices are: "none", "solid", "double", "random".
var borderStyle = "random";

// Put here the desired color of borders for the quotes box.
// Can be any HTML color code like "#FF0000" or "red".
// Pur "random" for random colors.
var borderColor = "random";

var strings = [
// These lines are the quotes the script will randomly choose. You can put as much as you want.
// If you absolutely need to put " inside your quotes, use either ' or \".
  // Don't forget, the quotes have a , after the "" !!
  "Ceci n'est pas une pipe. ~~Magritte",
  "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. ~~Oscar Wilde",
  "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward. ~~Amelia Earhart",
  "Love isn't something you find. Love is something that finds you. ~~Loretta Young",
  "Good judgment comes from experience, and a lot of that comes from bad judgment. ~~Will Rogers",
  "Honesty is the first chapter in the book of wisdom. ~~Thomas Jefferson",
  "Today you are you! That is truer than true! There is no one alive who is you-er than you! ~~Dr. Seuss",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. ~~Winston Churchill",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. ~~Helen Keller",
  "It is during our darkest moments that we must focus to see the light. ~~Aristotle",
  "Strange women lying in ponds, distributing swords, is no basis for a system of government! ~~Monty Python's Holy Grail",
  "Are you suggesting that coconuts migrate? ~~Monty Python's Holy Grail"
  // Don't forget, the last quote DOES NOT have a , after the "" !!
];
// ================================================================================================
// END EDITING
// Don't forget, the last quote DOES NOT have a , after the "" !!

window.setInterval(function() {
  // puts a preselection of styles for the border Originally, there's only those 3 ones.
  var borderStylesArray = ["none", "solid", "double"];

  // If random, selects randomly a style from the preselection. Else, it takes the one choosen by the user.
  if (borderStyle == "random") {
    var borderStyleSelect = document.getElementById('thebox').style.borderStyle = borderStylesArray[getRandomInt(0, borderStylesArray.length - 1)];
  } else {
    var borderStyleSelect = document.getElementById('thebox').style.borderStyle = borderStyle;
  }

  // If random, selects randomly a color from the preselection. Else, it takes the one choosen by the user. I use rgb to make the color randomisation easier.
  if (borderColor == "random") {
    var borderColorSelect = document.getElementById('thebox').style.borderColor = "rgb("+getRandomInt(0, 255)+", "+getRandomInt(0, 255)+", "+getRandomInt(0, 255)+")";
  } else {
    var borderColorSelect = document.getElementById('thebox').style.borderStyle = borderColor;
  }

  // This is the array that will be returned to actually put the quotes and the settings
  var arr = [
    borderStyleSelect,
    borderColorSelect,
    document.getElementById('thebox').style.left = getRandomInt(20, 80)+"%",
    document.getElementById('thebox').style.top = getRandomInt(25, 75)+"%",
    document.getElementById('thebox').innerHTML = strings[getRandomInt(0, strings.length - 1)]
  ];

  return arr
}, secs);

// Randomisator
function getRandomInt(min, max) {
  return Math.floor(Math.random() * Math.floor(max));
};
