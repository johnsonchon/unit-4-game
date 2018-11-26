
$(document).ready(function () {
    //Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/images/song.mp3");

    // Shrooms Needed Amount
    var randomNum = Math.floor((Math.random() * 120) + 19);

    $(".random").html(randomNum);

    // Shroom amount and Counts
    var redNum = Math.floor((Math.random() * 12) + 1);
    var greenNum = Math.floor((Math.random() * 12) + 1);
    var purpleNum = Math.floor((Math.random() * 12) + 1);
    var tealNum = Math.floor((Math.random() * 12) + 1);
    var winCount = 0;
    var lossCount = 0;
    var currentScore = 0;


    // Button Click functions
    $(".red").on("click", function () {
        // audioElement.play();
        currentScore += redNum;
        $(".ate").html(currentScore);
        $(".mario-word").html("I can feel it! Gimme more!");
    });

    $(".green").on("click", function () {
        //audioElement.play();
        currentScore += greenNum;
        $(".ate").html(currentScore);
        $(".mario-word").html("Oh yea! I'm trippn'!");
    });

    $(".purple").on("click", function () {
        //audioElement.play();
        currentScore += purpleNum;
        $(".ate").html(currentScore);
        $(".mario-word").html("I see the space time continuum...");
    });

    $(".teal").on("click", function () {
        //audioElement.play();
        currentScore += tealNum;
        $(".ate").html(currentScore);
        $(".mario-word").html("Hands are weird, huh?");
    });

    // If and If Else Statements for score
    

    if (currentScore > randomNum) {
        lossCount++;
        $(".losses").html(lossCount);
        $(".mario-word").html("I don't feel good...Call 911");
    }

    else if (randomNum === currentScore) {
        winCount++;
        $(".wins").html(winCount);
    }








});