
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

    // Reset Function
    function reset() {
        randomNum = Math.floor((Math.random() * 120) + 19);
        currentScore = 0;
        $(".ate").html(currentScore);
        redNum = Math.floor((Math.random() * 12) + 1);
        greenNum = Math.floor((Math.random() * 12) + 1);
        purpleNum = Math.floor((Math.random() * 12) + 1);
        tealNum = Math.floor((Math.random() * 12) + 1);
        $(".mario-word").html('"Feed me shrooms, bro!"');
        $(".mario img").attr("src", "./assets/images/mario1.png");
        $(".top h1").html("Shroom Collector!");
        $("body").css("background-image", "url(../unit-4-game-master/assets/images/back.png)");
    }

    function resetTwo() {
        // Brings Score back to zero
        currentScore = 0;
        $(".ate").html(currentScore);

        // changes random Number
        randomNum = Math.floor((Math.random() * 120) + 19);
        $(".random").html(randomNum);

        // changes the button values
        redNum = Math.floor((Math.random() * 12) + 1);
        greenNum = Math.floor((Math.random() * 12) + 1);
        purpleNum = Math.floor((Math.random() * 12) + 1);
        tealNum = Math.floor((Math.random() * 12) + 1);
    }

    //If Else Statements for wins and losses
    function ifElse() {
        if (currentScore > randomNum) {
            lossCount++;
            $(".losses").html(lossCount);
            $(".mario-word").html('"I dont feel good...Call 911"');
            $(".mario img").attr("src", "./assets/images/mario2.png");
            $(".top h1").html("Mario Overdosed!");
            $("body").css("background-image", "url(./assets/images/castle.png)");

            resetTwo ();

        }

        else if (currentScore === randomNum) {
            winCount++;
            $(".wins").html(winCount);
            $(".mario-word").html('"This is great!!!"');
            $(".mario img").attr("src", "./assets/images/mario-good.png");
            $(".top h1").html("Mario is Shrooming!");
            $("body").css("background-image", "url(./assets/images/shroom.jpg)");

            resetTwo ();
        }
    }


    // Button Click functions
    $(".red").on("click", function () {
        //audioElement.play();
        currentScore += redNum;
        $(".ate").html(currentScore);
        $(".mario-word").html('"I can feel it! Gimme more!"');

        ifElse();
    });

    $(".green").on("click", function () {
        //audioElement.play();
        currentScore += greenNum;
        $(".ate").html(currentScore);
        $(".mario-word").html('"Oh yea! Im trippn"');

        ifElse();
    });

    $(".purple").on("click", function () {
        //audioElement.play();
        currentScore += purpleNum;
        $(".ate").html(currentScore);
        $(".mario-word").html('"I see the space time continuum..."');

        ifElse();
    });

    $(".teal").on("click", function () {
        //audioElement.play();
        currentScore += tealNum;
        $(".ate").html(currentScore);
        $(".mario-word").html('"Hands are weird, huh?"');

        ifElse();
    });










});