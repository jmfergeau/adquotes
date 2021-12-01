// These lines are the quotes the script will randomly choose. You can put as much as you want.
// Emulates the "Edit Quotes..." option in the original.
// If you absolutely need to put " inside your quotes, use either ' or \".
// You can add line breaks by adding <br> tags. You can put html codes in quotes but it's not recommended.
// Don't forget, the quotes have a , after the "" !!
const quotes = [
    // Original "Say What?" quotes
    "It has just been discovered that research causes cancer in rats.",
    "Pro is to con as progress is to Congress",
    "Sex is not the answer. Sex is the question. \"Yes\" is the answer.",
    "It is impossible to make anything foolproof because fools are so ingenious.",
    "Lubarsky's Law of Cybernetic Entomology:<br><br>There's always one more bug.",
    "Paul's Law:<br><br>You can't fall off the floor.",
    "Heller's Law:<br><br>The first myth of management is that it exists.",
    "First Law of Bicycling:<br><br>No matter which way you ride, it's uphill and against the wind.",
    "Osborn's Law:<br><br>Variables won't; constants aren't.", // except in JS!
    "Weinberg's Second Law:<br><br>If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.",
    "First Law of Socio-Genetics:<br><br>Celibacy is not hereditary.",
    "Parker's Law:<br><br>Beauty is only skin deep, but ugly goes clean to the bone.",
    "Hartley's First Law:<br><br>You can lead a horse to water, but if you can get him to float on his back, you've got something.",
    "Dentist:<br><br>A prestidigitator who, putting metal in one's mouth, pulls coins out of one's pockets.<br><br>-- Ambrose Bierce",
    "Somebody ought to cross ball point pens with coat hangers so that the pens will multiply instead of disappear.",

    // Additionnal quotes of my own
    "Ceci n'est pas une pipe.<br>~~Magritte",
    "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.<br><br>-- Oscar Wilde",
    "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.<br><br>-- Amelia Earhart",
    "Love isn't something you find. Love is something that finds you.<br><br>-- Loretta Young",
    "Good judgment comes from experience, and a lot of that comes from bad judgment.<br><br>-- Will Rogers",
    "Honesty is the first chapter in the book of wisdom.<br><br>-- Thomas Jefferson",
    "Today you are you! That is truer than true! There is no one alive who is you-er than you!<br><br>-- Dr. Seuss",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.<br><br>-- Winston Churchill",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.<br><br>-- Helen Keller",
    "It is during our darkest moments that we must focus to see the light.<br><br>-- Aristotle",
    "Strange women lying in ponds, distributing swords, is no basis for a system of government!<br><br>-- Monty Python's Holy Grail",
    "Are you suggesting that coconuts migrate?<br><br>-- Monty Python's Holy Grail",
    "In a world without gold, we might've been heroes.<br><br>-- Blackbeard",
    "What fun is there in making sense?<br><br>-- Discord",
    "The only thing we're allowed to believe is that we won't regret the choice we made.<br><br>-- Hajime Isayama",
    "So many books, so little time.<br><br>-- Frank Zappa",
    "You only live once, but if you do it right, once is enough.<br><br>-- Mae West",
    "Always forgive your enemies; nothing annoys them so much.<br><br>-- Oscar Wilde",
    "No one can change a person, but a person can be the reason someone changes.<br><br>-- SpongeBob SquarePants",
    "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.<br><br>-- Groucho Marx",
    "Be nice to nerds. You may end up working for them. We all could.<br><br>-- Charles J. Sykes",
    "Fighting for peace is like screwing for virginity.<br><br>-- George Carlin",
    "A friend is someone who knows all about you and still loves you.<br><br>-- Elbert Hubbard",
    "Any fool can know. The point is to understand.<br><br>-- Albert Einstein",
    "I can calculate the motion of heavenly bodies but not the madness of people.<br><br>-- Isaac Newton",
    "Opinion is really the lowest form of human knowledge. It requires no accountability, no understanding. The highest form of knowledge… is empathy, for it requires us to suspend our egos and live in another’s world. It requires profound purpose larger than the self kind of understanding.<br><br>-- Bill Bullard",
    "Music expresses that which cannot be put into words and that which cannot remain silent”<br><br>-- Victor hugo",
    "What a strange thing!<br>to be alive<br>beneath cherry blossoms.<br><br>-- Kobayashi Issa",
];
