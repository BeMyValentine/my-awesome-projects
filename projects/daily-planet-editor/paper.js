/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here. For example, the `while` loop
at the end has syntax problems, not logic problems. It shouldn't be an infinite loop,
but the way to fix that is not to change the structure of the while loop.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var enemy = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

function winner(kryptonite, enemy) {
    if (kryptonite === false) {
        return "Superman beats " + enemy + ", of course";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemy + " could possibly win this one.";
    }
}

for (var i = 0; i < enemy.length; i++) {
    var kryptonite = (i % 2 === 0);
    console.log(winner(kryptonite, enemy[i]));
}

function sexinessLevel() {
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random() * 1) + 10);
}

console.log(sexinessLevel());

var clarkKent = true;
var superman = false;

while (clarkKent) {
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange <= 0.5) {
        clarkKent = false;
        superman = true;
        console.log("Now I'm Superman!");
    }
}