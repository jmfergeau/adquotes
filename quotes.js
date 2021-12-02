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
    "While your friend holds you affectionately by both your hands you are safe, for you can watch both of his.",
    "You don't have to think too hard when you talk to teachers.<br><br>-- J.D. Salinger",
    "If bankers can count, how come they have eight windows and only four tellers?",
    "Those who can't write, write manuals.",
    "Never call a man a fool. Borrow from him.",
    "A truly wise man never plays leapfrog with a unicorn.",
    "\"He was so narrow minded he could see through a keyhole with both eyes...\"",
    "The average woman would rather have beauty than brains, because the average man can see better than he can think.",
    "You have the capacity to learn from mistakes. You'll learn a lot today.",
    "You worry too much about your job. Stop it. You are not paid enough to worry.",
    "The brain is a wonderful organ: it starts working the moment you get up in the morning, and does not stop until you get to school.",
    "Paranoids are people, too; they have their own problems. It's easy to criticize, but if everybody hated you, you'd be paranoid too.",
    "I'd give my right arm to be ambidextrous.",
    "Nudists are people who wear one-button suits.",
    "Main's Law:<br><br>For every action there is an equal and opposite government program.",
    "Pohl's Law:<br><br>Nothing is so good that somebody, somewhere, will not hate it.",
    "Diplomacy is the art of saying \"nice doggy\" until you can find a rock.",
    "If you don't care where you are, then you aren't lost.",
    "Consultants are mystical people who ask a company for a number and then give it back to them.",
    "Duct tape is like the Force. It has a light side, and a dark side, and it holds the universe together.",
    "Insanity is hereditary. You get it from your kids.",
    "Scott's first Law:<br><br>No matter what goes wrong, it will probably look right.",
    "The new congressmen say they're going to turn the government around. I hope I don't get run over again.",
    "About the time we make ends meet, somebody moves the ends.",
    "God made the Idiot for practice, and then He made the School Board.<br><br>-- Mark Twain",
    "Be wary of strong drink. It can make you shoot at tax collectors and miss.",
    "Dying is a very dull, dready affair. And my advice to you is to have nothing whatever to do with it.<br><br>-- W. Somerset Maugham",
    "It is easier to change the specification to fit the program than vice versa.",
    "Stealing a rhinoceros should not be attempted lightly.",
    "All I ask is a chance to prove that money can't make me happy.",
    "\"If you can count your money, you don't have a billion dollars.\"<br><br>-- J. Paul Getty",
    "If you think nobody cares you're alive, try missing a couple of car payments.",
    "TV is chewing-gum for the eyes.<br><br>-- Frank Lloyd Wright",
    "I used to think I was indecisive, but now I'm not so sure.",
    "Armadillo:<br><br>To provide weapons to a Spanish pickle.",
    "Micro Credo:<br><br>Never trust a computer bigger than you can lift.",
    "One nice thing about egotists: they don't talk about other people.",
    "There are three ways to get something done: do it yourself, hire someone, or forbid your kids to do it.",
    "How come wrong numbers are never busy?",
    "One way to stop a runaway horse is to bet on him.",
    "Serving coffee on aircraft causes turbulence.",
    "Eighty percent of all people consider themselves to be above average drivers.",
    "You never really learn to swear until you learn to drive.",
    "Misfortune:<br><br>The kind of fortune that never misses.",
    "Frisbeetarianism:<br><br>The belief that when you die, your soul goes up on the roof and gets stuck.",
    "When you are in it up to your ears, keep your mouth shut.",
    "A diplomat is someone who can tell you to go to hell and make you feel happy to be on your way.",
    "Ginsberg Theorem:<br><br><ol><li>You can't win.</li><li>You can't break even.</li><li>You can't even quit the game.</li></ol>",
    "Iron Law of Distribution:<br><br>Them that has, gets.",
    "Boob's Law:<br><br>You always find something in the last place you look.",
    "Weiler's Law:<br><br>Nothing is impossible for the man who doesn't have to do it himself.",
    "Hartley's Second Law:<br><br>Never sleep with anyone crazier than yourself.",
    "If you pick up a strarving dog and make him prosperous, he will not bite you. This is the principal difference between a dog and a man.<br><br>-- Mark Twain",
    "Nothing astonishes men so much as common sense and plain dealing.",
    "Yield to temptation....it may not pass your way again.<br><br>-- Lazarus Long",
    "Clothes make the man. Naked people have little or no influence on society.<br><br>-- Mark Twain",
    "Blessed are they who go Go Around in Circles, for they Shall be Known as Wheels.",
    "There are four kinds of homicide: felonious, excusable, justifiable, and praiseworthy...<br><br>-- Ambrose Bierce",
    "Children seldom misquote you. In fact, they usually repeat word for word what you shouldn't have said.",
    "I really hate this damned machine<br><br>I wish that they would sell it.<br><br>It never does quite what I want<br><br>But only what I tell it.",
    "Things are more like they used to be than they are now.",
    "Idiot:<br><br>A member of a large and powerful tribe whose influence in human affairs has always been dominant and controlling.",
    "Slick's Third Law of the Universe:<br><br>There are two types of dirt ---<br><ul><li>The dark kind, which is attracted to light objects, and</li><li>The light kind, which is attracted to dark objects.</li></ul>",
    "Faith is the quality that enables you to eat blackberry jam on a picnic without looking to see whether the seeds move.",
    "Fashion is a form of ugliness so intolerable that we have to alter it every six months.",
    "Important letters which contain no errors will develop errors in the mail. Corresponding errors will show up in the duplicate while the Boss is reading it.",
    "Vital papers will demonstrate their vitality by spontaneously moving from where you left them to where you can't find them.",
    "Velilind's Law of Experimentation:<br><br><ol><li>If reproducibility may be a problem, conduct the test only once.</li><li>If a straight line fit is required, obtain only two data points.</li></ol>",
    "Colvard's Logical Premise:<br><br>All probabilities are 50%. Either a thing will happen or it won't.",
    "If you put garbage in a computer nothing comes out but garbage. But this garbage, having passed through a very expensive machine, is somehow ennobled and none dare criticize it.",
    "The IQ of the group is the lowest IQ of a member of the group divided by the number of people in the group.",
    "Worst vegetable of the year: the brussels sprout.<br><br>This is also the worst vegetable of next year.",
    "It's not that I'm afraid to die. I just don't want to be there when it happens.<br><br>-- Woody Allen",
    "I have seen the future and it is just like the present, only longer.<br><br>-- Kehlog Albran",
    "There has been an alarming increase in the number of things you know nothing about.",
    "What makes the universe so hard to comprehend is that there's nothing to compare it with.",
    "It may be that your whole purpose in life is simply to serve as a warning to others.",
    "Yesterday I was a dog. Today I'm a dog. Tomorrow I'll probably still be a dog. Sigh! There's so little hope for advancement.<br><br>-- Snoopy",
    "The trouble with being poor is that it takes up all your time.",
    "AMAZING BUT TRUE...<br><br>There is so much sand in Northern Africa that if it were spread out it would completely cover the Sahara desert.",
    "Anyone who is capable of getting themselves made President should on no account be allowed to do the job.<br><br>-- The Hitchhiker's Guide to the Galaxy",
    "SEMINARS: from 'semi' and 'arse', hence, any half-assed discussion.",
    "The trouble with doing something right the first time is that nobody appreciates how difficult it was.",
    "Law of Probable Dispersal:<br><br>Whatever it is that hits the fan will not be evenly distributed.",
    "Murphy's Law is recursive. Washing your car to make it rain doesn't work.",

    // Additionnal quotes of my own
    "Ceci n'est pas une pipe.<br><br>-- Magritte",
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