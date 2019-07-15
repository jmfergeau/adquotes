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
