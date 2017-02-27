var goomba = 5;
var bob_omb = 7;
var cheep_cheep = 11;

$("#totalButton").click(function ()) {
    var amount1 = $("#amount1").val();
    amount1 = parseInt(amount1);
    var amount2 = $("#amount2").val();
    amount2 = parseInt(amount2);
    var amount3 = $("#amount3").val();
    amount3 = parseInt(amount3);

    var subtotal1 = amount1 * goomba;
    var subtotal2 = amount2 * bob_omb;
    var subtotal3 = amount3 * cheep_cheep;

    if (amount1 > 0 || amount2 > 0 || amount3 > 0) {
        $("#finalPrice").text =
            "You owe Mario " + (subtotal1 + subtotal2 + subtotal3) + " total coins for exterminating your pests";
    } else {
        $("#finalPrice").text = "You don't owe Mario anything!";
    }
    if (subtotal1 > 0) {
        $("#goombasPrice").text = "Your subtotal for your Goomba extermination is " + subtotal1;
    } else {
        $("#goombasPrice").text = "Mario did not exterminate goombas for you.";
    }
    if (subtotal2 > 0) {
        $("#bob-ombsPrice").text = "Your subtotal for your bob-ombs extermination is " + subtotal2;
    } else {
        $("#bob-ombsPrice").text = "Mario did not exterminate bob-ombs for you.";
    }
    if (subtotal3 > 0) {
        $("#cheep-cheepPrice").text = "Your subtotal for your cheep-cheep extermination is " + subtotal3;
    } else {
        $("#cheep-cheepPrice").text = "Mario did not exterminate cheep-cheeps for you.";
    }
});









//document.getElementById(Id).value
//Need an alert, or h3 element to catch the return
//document.getElementbyId("ID") always returns as a "string"