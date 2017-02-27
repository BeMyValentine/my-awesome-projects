var goomba = 5;
var bob_omb = 7;
var cheep_cheep = 11;

document.getElementById("totalButton").addEventListener('click', function () {
    var amount1 = document.getElementById("amount1").value;
    amount1 = parseInt(amount1);
    var amount2 = document.getElementById("amount2").value;
    amount2 = parseInt(amount2);
    var amount3 = document.getElementById("amount3").value;
    amount3 = parseInt(amount3);

    var subtotal1 = amount1 * goomba;
    var subtotal2 = amount2 * bob_omb;
    var subtotal3 = amount3 * cheep_cheep;

    if (amount1 > 0 || amount2 > 0 || amount3 > 0) {
        document.getElementById("finalPrice").textContent =
            "You owe Mario " + (subtotal1 + subtotal2 + subtotal3) + " total coins for exterminating your pests";
    } else {
        document.getElementById("finalPrice").textContent = "You don't owe Mario anything!";
    }
    if (subtotal1 > 0) {
        document.getElementById("goombasPrice").textContent = "Your subtotal for your Goomba extermination is " + subtotal1;
    } else {
        document.getElementById("goombasPrice").textContent = "Mario did not exterminate goombas for you.";
    }
    if (subtotal2 > 0) {
        document.getElementById("bob-ombsPrice").textContent = "Your subtotal for your bob-ombs extermination is " + subtotal2;
    } else {
        document.getElementById("bob-ombsPrice").textContent = "Mario did not exterminate bob-ombs for you.";
    }
    if (subtotal3 > 0) {
        document.getElementById("cheep-cheepPrice").textContent = "Your subtotal for your cheep-cheep extermination is " + subtotal3;
    } else {
        document.getElementById("cheep-cheepPrice").textContent = "Mario did not exterminate cheep-cheeps for you.";
    }
});









//document.getElementById(Id).value
//Need an alert, or h3 element to catch the return
//document.getElementbyId("ID") always returns as a "string"