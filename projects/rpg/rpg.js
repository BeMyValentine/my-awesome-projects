//create inventory func
//
//create walk/monster-attack func
//
//create battle-mode
//








var readline = require("readline-sync");
var name = readline.question("What is your name? ");
console.log(name);
console.log("Hey " + name + " let's go on an adventure together! After all, it is dangerous \nto go alone. Grab your torch and pitchfork. We are going hunting!\n Received torch \n Received pitchfork");

var badGuy = {


};
var player = {
    level: 1,
    experience: 0,
    damage: 20,
    health: 100,
    armor: 5,

    hands: [],
    head: [],
    chest: [],
    leg: [],
    feet: [],
    weapon: []
};

var totalHealth = player.level * player.health;
var totalDamage = player.level * player.damage;




var invent = ["torch", "pitchfork"];


function Item(name, health, armor, damage) {
    this.name = name;
    this.health = health;
    this.armor = armor;
    this.damage = damage;


}
var items=[];
items.push(new Item ("Dragon Armor", 10, 10, 0));
items.push(new Item ("Peasant Leggings", 1, 2, 0));
items.push(new Item ("Gauntlet of Doom", 1, 1, 0));
items.push(new Item ("Fire Boots", -10, 3, 2));
items.push(new Item ("Short Swort", 0, 0, 4));
items.push(new Item ("Dragon Blade", 0, 0, 40));


function randomItem() {
    var newItem = items[getRandomInt(0, items.length-1)];
    console.log("You received " + newItem.name);
    invent.push(newItem);
    
}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function determineType() {
    var enemyTypes = ["Epic Cow", "Oompa-Loopas", "Stick in the Mud"];
    var rand = getRandomInt(0, 2);
    return enemyTypes[rand];

}


function determineHitPoints(determineType) {
    if (determineType === "Epic Cow") {
        return getRandomInt(50, 70);
        console.log("An Epic Cow is attacking");
    } else if (determineType === "Stick in the Mud") {
        return getRandomInt(40, 50);
        console.log("A Stick in the Mud stands in your path");
    } else {
        return getRandomInt(20, 40);
        console.log("Angry Oompa-Loopas have escaped the factory");
    }
}

function Enemy() {
    this.type = determineType();
    this.hitPoints = determineHitPoints(this.type);
    this.defense = parseInt(this.hitPoints * .1);
    this.pain = getRandomInt(30, 50);
    
}


do {
    if (death()){
        break;
    }
    var action = readline.keyIn();

    switch (action) {
    case "w":
    case "W":
        moveForward();
        break;
    case "i":
    case "I":
        open();
        break;
    };
} while (action !== "q");


function moveForward() {
    var random = getRandomInt(1, 3);
    if (random === 1) {
        combat();
    } else {
        player.experience = player.experience += 1;
        console.log("Walking makes you stronger. Gain 1 xp")
    }
    console.log(player.experience);
}


function combat() {
    var fightAnswer = readline.keyIn("To fight, press y, to run press n ", {
        limit: 'yn'
    })
    if (fightAnswer === "y") {

        badGuy = new Enemy();
        fight();

    } else {
        console.log("You ran away....wow.....");

    }
}

function enemyAttack() {
    var attackChance = getRandomInt(1, 9);
    if (attackChance % 3 === 0) {
        player.health = player.health;
    } else {
        player.health -= badGuy.pain - player.armor;
    }
    console.log("Player health: " + player.health);
}



function playerAttack() {
    var attackChance = getRandomInt(1, 10);
    if (attackChance % 10 === 0) {
        badGuy.hitPoints = badGuy.hitPoints;
    } else {
        badGuy.hitPoints -= player.damage - badGuy.defense;
    }
    console.log("Enemy health: " + badGuy.hitPoints);
}


function fight() {
    console.log("You chose to fight. Prepare yourself for poopy pants!");


    while (player.health > 0 && badGuy.hitPoints > 0) {
        readline.keyIn("press a to attack")
        playerAttack();
        if (badGuy.hitPoints > 0) {
            enemyAttack();
        } else if (player.health <=0){ 
            death();
            
        } else {
            player.experience += 10 
        }

    }
    if (player.health < 0) {
        death();
    } else
        randomItem();
}

function open() {
    var stuff = readline.prompt("Type print to show inventory");
    if (invent.indexOf <= 0 && stuff === "print") {
        console.log("YOU HAVE NOTHING CUZ YOU ARE NOTHING!!!");
    } else {
        (invent.indexOf > 0 && stuff === "print")
        console.log(invent);
    }
}




var isAlive = true;

function death() {
    if (player.health < 0) {
        isAlive = false
        
        console.log("Dang " + name + " you died...")
        return true;
    }
    return false;
};






//use as many functions as you can