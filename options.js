var 
// Put here the number of miliseconds you want for the quotes to change. 
// Emulates the "Show Every" option of the original.
// By default, it's 10 seconds, so it's 10000.
  secs = 10000,

// Put here the style of desired borders for the quotes box.
// Somewhat emulates the "Draw Border" option of the original.
// There's less borders available than in the original but doing them would be either impossible or would require more heavy code.
// Choices are: "none", "solid", "double", "random" and "fullrandom". 
// "none" disables borders. "random" randomizes between solid and double.
// "fullrandom" is like random but includes none.
// Default is "random"
  borderStyle = "random",

// Put here the desired color of borders for the quotes box.
// Can be any HTML color code like "#FF0000" or "red".
// Put "original" to cycle the same colors cycle as in the original.
// Put "random" to randomize colors. Expect sometimes ugly colors with this one.
// Default is "original"
  borderColor = "original",

// Put here the webfont you want to use. 
// Emulates the font changing in "Edit Quotes..." in the original.
// Default is "serif"
  fontStyle = "serif",

// Put here the wanted font size.
// Emulates the font changing in "Edit Quotes..." in the original.
// Default is "1.5em"
  fontSize = "1.5em",

// These lines are the quotes the script will randomly choose. You can put as much as you want.
// Emulates the "Edit Quotes..." option in the original.
// If you absolutely need to put " inside your quotes, use either ' or \".
// You can add line breaks by adding <br> tags. You can put html codes in quotes but it's not recommended.
// Don't forget, the quotes have a , after the "" !!
  quotes = [
    "Ceci n'est pas une pipe.<br>~~Magritte",
    "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.<br>~~Oscar Wilde",
    "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.<br>~~Amelia Earhart",
    "Love isn't something you find. Love is something that finds you.<br>~~Loretta Young",
    "Good judgment comes from experience, and a lot of that comes from bad judgment.<br>~~Will Rogers",
    "Honesty is the first chapter in the book of wisdom.<br>~~Thomas Jefferson",
    "Today you are you! That is truer than true! There is no one alive who is you-er than you!<br>~~Dr. Seuss",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.<br>~~Winston Churchill",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.<br>~~Helen Keller",
    "It is during our darkest moments that we must focus to see the light.<br>~~Aristotle",
    "Strange women lying in ponds, distributing swords, is no basis for a system of government!<br>~~Monty Python's Holy Grail",
    "Are you suggesting that coconuts migrate?<br>~~Monty Python's Holy Grail",
];
