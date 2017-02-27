var commWin = true;
var pengWin = true;

function Party(population, name) {
    this.damage = function () {
        return getRandomInt(10000, 100000);
    };
    this.population = population;
    this.accuracy = function () {
        return getRandomInt(1, 10);
    }
    this.name = name;
}

var penguin = new Party(1000000, "birds");
var communist = new Party(1000000, "commies");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var turn = getRandomInt(1, 2);

function goesFirst() {
    if (turn === 1) {
        sendNuke(penguin);
        turn = 2;
    } else {
        sendNuke(communist);
        turn = 1;
    }
}


function onHit(party) {
    if (party === penguin && penguin.accuracy() > 2) {
        console.log("The Penguins' nuke hit the dirty commies and killed " + penguin.damage() + " of them.");
        console.log("Communist population: " + (communist.population -= penguin.damage()));

    } else if (party === communist && communist.accuracy() > 2) {
        console.log(communist.damage() + " swimming birds have been slaughtered by my missile. Much vodka will be consumed tonight.");
        console.log("Penguin population: " + (penguin.population -= communist.damage()));
    } else {
        onMiss(party);
    }
        
}


function onMiss(party) {
    if (party === penguin && penguin.accuracy() <= 2) {
        console.log("The Penguins' nuke completely waddled off the warpath and missed the stinkin commies");

        console.log(communist.population);

    } else if (party === communist && communist.accuracy() <= 2) {
        console.log("The waddling birds have made a grievous error in not dying quickly");

        console.log(penguin.population);
    }
    return penguin.population;

    
}


function sendNuke(party) {

    onHit(party);

}



function death() {
    if (penguin.population <= 0) {
        pengWin = false;
        console.log("The penguins have been sufficiently genocided. Pack up men, we are going home.");

    } else if (communist.population <= 0) {
        commWin = false;
        console.log("Angry Birds will always win");
    }
}


while (pengWin === true && commWin === true) {

    goesFirst();
    death();

}