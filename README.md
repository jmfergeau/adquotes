# After Dark Quotes screensaver
This is the remake of an old screensaver I used to love when I was young. It displays quotes randomly on the screen.

Of course, like the original, quotes and time between quotes can be changed

You can check out a sample of it [here](https://maxlefou.gitlab.io/adquotes/).

## Customize the script
To change the quotes, open the file `ad-messages.js`. You will see a part that looks like this:
```
window.setInterval(function() {
  var strings = [
    // START EDITING
    // This text is the quotes the script will randomly choose.
    // Don't forget, the quotes have a , after the "" !!
    "Ceci n'est pas une pipe. ~~Magritte",
    "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. ~~Oscar Wilde",
[...............]
    "Strange women lying in ponds, distributing swords, is no basis for a system of government! ~~Monty Python's Holy Grail",
    "Are you suggesting that coconuts migrate? ~~Monty Python's Holy Grail"
    // END EDITING
    // Don't forget, the last quote DOES NOT have a , after the "" !!
  ];
```
Simply replace the quotes you want with your text. To add more quotes (as many as you want!!) just add a line like `"",` and put the text between the "s. Don't forget the `,` at the end of each line *except for the last one!!*

To change the interval between the quotes, find the line like below in `ad-messages.js`:
```
// Put here the number of miliseconds you want for the quotes to change. By defautl, it's 10 seconds, so it's 10000.
var secs = 10000;
```

And simply replace the number with the time you want. It's in miliseconds so just add `000` after the number you want. For instance, for 15 seconds, type `15000`.
