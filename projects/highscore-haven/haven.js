var flavorText = ["Your mother was a hamster, and your father smells of elderberries", "I'm ur daddy", "You're basically the best at losing", "No wonder you don't have a girlfriend", "Sometimes losers think they're good"];






$("#highscore").click(function () {



    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };



    var isChecked = $('input[name="trash"]:checked').length > 0;

    if (isChecked) {
        var rand = getRandomInt(0, 4);
    } else{
        trashTalk = "Good Job"
    }
    if (rand === 0) {
        var trashTalk = (flavorText[0])
    } else if (rand === 1) {
        var trashTalk = (flavorText[1])
    } else if (rand === 2) {
        var trashTalk = (flavorText[2])
    } else if (rand === 3) {
        var trashTalk = (flavorText[3])
    } else if (rand === 4) {
        var trashTalk = (flavorText[4])
    }

    var fullName = $("#fullname").val();
    var gameName = $("#game").val();
    var topScore = $("#top").val();
    var date = $("#day").val();
    var time = $("#24h").val();


    if (fullName === "" || gameName === "" || date === "" || (topScore === "" && time === "")) {
        alert("Please finish filling out the form");
    } else if ((topScore || time) <= 0) {
        alert("Not even you are that bad");
    } else {
        var table = $('table');
        table.append("<tr>" + "<td>" + fullName + "</td>" + "<td>" + gameName + "</td>" + "<td>" + (topScore || time) + "</td>" + "<td>" + date + "</td>" + "</tr>" + "<tr>" + "<td>" + trashTalk + "</td></tr>");
    }

});