/**
 * Created by aaronromero on 3/15/17.
 */


htmlGrid = [["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""]
];



var createAdventurer =  function (currentColumn,currentRow,prizes,location) {

    // var prizes = [];

    return {


        healthPoints: 100,
        currentLocation : location,
        totalPrizes: [],
        "currentColumn": currentColumn,
        "currentRow": currentRow


    };

};



// var grid = [];
var prizes = [];
var adventurer = createAdventurer();

var mapInfo = function(name,prizeName) {
    return {
        "name" : name,
        "prizeName": prizeName

    };
};

var prizeName1 = "A rocket launcher!";
var prizeName2 = "A Flame Sword!";
var getPrizeName1 = mapInfo()["prizeName"];
var getPrizeName2 = mapInfo()["prizeName"];
getPrizeName1 = prizeName1;
getPrizeName2 = prizeName2;


function printTable(table) {

    var gameMap = document.createElement("p");
    gameMap.innerHTML = table;

    document.body.appendChild(gameMap);


}

function updateInfoPlayer(currentRow,currentColumn) {

    var paragraph = document.createElement("div");
    paragraph.innerHTML = "Current Location: " + "(" + currentRow  +  "," + currentColumn + ")"
        + "Current Health: " + adventurer.healthPoints;

    document.body.appendChild(paragraph);


}

function findingAPrize(currentRow,currentColumn,totalPrizes, nameOfPrize) {


    var prizeInfo = document.createElement("p");
    prizeInfo.innerHTML = "You have found " + nameOfPrize + " And now have " + totalPrizes +
        " prizes " + " At: " + "(" + currentRow  +  "," +
        currentColumn + ")";

    document.body.appendChild(prizeInfo);


}

function outOfBounce(currentRow,currentColumn) {

    var outOfBounce = document.createElement("p");
    outOfBounce.innerHTML = "Hey do not go there! You have gone out of bounce! " + "And your updated location is now at: "
        + "(" + currentRow  +  "," + currentColumn + ")";

    document.body.appendChild(outOfBounce);

}

function findingAWall(currentRow,currentColumn) {


    var wall = document.createElement("p");
    wall.innerHTML = "Riiiiip you encountered a Wall! So your location is now at: " +
        " " + "(" + currentRow  +  "," + currentColumn + ")" + "Keep Moving!";

    document.body.appendChild(wall);


}

function goalLocationLost(currentRow,currentColumn,prize) {



    var lost = document.createElement("p");
    lost.innerHTML = "You have reached the goal location at: " + "("  + currentRow  +  "," +
        currentColumn + ")" + " And recieved only " + prize + " prizes! thus, " + " GAME OVER!!";

    document.body.appendChild(lost);


}

function goalLocationWin(currentRow,currentColumn,prize) {


    var win = document.createElement("p");
    win.innerHTML = "You have reached the goal location at: " + "("  + currentRow  +  "," +
        currentColumn + ")" + " And recieved " + prize + " prizes!" + "YOU WIN!!";

    document.body.appendChild(win);


}

function monsterDead(nameOfMonster,nameOfPrize, playerHealth) {

    var deadMonster = document.createElement("p");
    deadMonster.innerHTML = "You have defeated " + nameOfMonster + " and " +
        " the attacks were too powerful!" + "! Thus the monster has died! Congrats for " +
        " defeating this evil monster! You have won a " + nameOfPrize +
        " but some damage was inflicted on you and now have " + playerHealth;

    document.body.appendChild(deadMonster);

}

function playerDead() {

    var deadPlayer = document.createElement("p");
    deadPlayer.innerHTML = "You have no health left! GAME OVER!! Do you want to play Text Adventure again? (Your options" +
        " should appear above)";

    document.body.appendChild(deadPlayer);

}

function userStopsPlaying() {

    var userStops = document.createElement("p");
    userStops.innerHTML = "Have a great day!!!";

    document.body.appendChild(userStops);

}



function challengeHealth(health,obtainedPrizes) {

    var challengeHealth = document.createElement("p");
    challengeHealth.innerHTML = "Current Health After Challenge: " + health + " And You found a " + obtainedPrizes;

    document.body.appendChild(challengeHealth);

}

function challengeUpdate(currentRow, currentColumn) {


    var challengeUpdate = document.createElement("p");
    challengeUpdate.innerHTML = "Challenge happended at: " + "(" + currentRow + "," +
        currentColumn + ")";

    document.body.appendChild(challengeUpdate);

}

function challengeFinish(currentRow, currentColumn) {

    var challengeFinish = document.createElement("p");
    challengeFinish.innerHTML = "Challenge finished at: " + "(" + currentRow + "," +
        currentColumn + ")" + "Keep Moving!";

    document.body.appendChild(challengeFinish);



}

function currentBattleInfo(playerHealth, monsterHealth) {


    var battleInfo = document.createElement("p");
    battleInfo.innerHTML = "You attacked! --> Your Current Health: " + playerHealth + " " +
        "Current Monster health: " + monsterHealth;

    document.body.appendChild(battleInfo);

}

function welcomeToChallenge(nameOfMonster, monsterHealth) {


    var welcome = document.createElement("p");
    welcome.innerHTML = "You brave soul! You have just encountered " + nameOfMonster
        + " with a health of " + monsterHealth + " do you wish to attack? Keep attacking until his health is zero!";

    document.body.appendChild(welcome);

}

function noAttack(nameOfMonster, monsterHealth, playerHealth) {


    var dontAttack = document.createElement("p");
    dontAttack.innerHTML = "Since you did not attack " + nameOfMonster + " was " +
        "able to take away your health so you " + "now you have " + playerHealth + " " +
        "And this monster still has " + monsterHealth +
        " Maybe you should try attacking it!!";

    document.body.appendChild(dontAttack);

}

function encounteringChallenge() {


    var findingChallenge = document.createElement("p");
    findingChallenge.innerHTML = "Hey there you have encountered a challenge! Do you wish to take on the challenge? ";

    document.body.appendChild(findingChallenge);

}

function passingAChallenge(challengeFound) {


    var testChallenge = document.createElement("p");
    testChallenge.innerHTML = challengeFound;

    document.body.appendChild(testChallenge);

}




//Some global variables that keep track of the location of the player object
var startingRow = 3;
var startingColumn = 3;
var currentR = adventurer["currentRow"];
var currentC = adventurer["currentColumn"];
currentR = startingRow;
currentC = startingColumn;
var updatedRow = currentR;
var updatedColumn = currentC;





//This is where I create the challenger object!

function makeTableHTML() {

    var result = document.write("<table style='border: 1px solid green;' border = 1 id='mainTable' cellpadding='10' cellspacing='5'>");

    for(i = 0; i < htmlGrid.length; i++) {

        result += "<tr style='border-collapse: collapse;' id='getRows'>";

        for(j = 0; j < htmlGrid[i].length; j++){

            document.write("<td style='color: white '>",htmlGrid[i][j],"</td>");


        }

        // var randomSpotInMap = Math.floor((Math.random() * 8) + 0);

        htmlGrid[3][3] = "S";
        htmlGrid[7][7] = "G";
        htmlGrid[1][1] = "P1";
        htmlGrid[1][5] = "P2";
        htmlGrid[3][6] = "W";
        htmlGrid[2][5] = "W";
        htmlGrid[1][3] = "W";
        htmlGrid[5][6] = "W";
        htmlGrid[7][2] = "C";
        htmlGrid[4][4] = "C";
        htmlGrid[4][1] = "C";
        htmlGrid[6][5] = "C";



        document.write("</tr>");
    }

    document.write("</table>");


    // return result;


}



printTable(makeTableHTML());


// var randomChallenges = [
//
//     {"ch1": "First Value in object"}
//
//
// ];
//
//
//
// console.log(randomChallenges["ch1"][0]);




$(document).ready(function () {



    var challengeForPlayer = {

        monsterName: " Deadly Dragon! ",
        hitPoints: 50,
        prizeName: "An Axe!",
        startChallenge: function(nameOfMonster,healthMonster,nameOfPrize) {


            var someDamage;

            encounteringChallenge();

            //Here I hide the movement buttons so the user wont be able to move during a challenge


            var hideMovementButtons = $("#movementButtons").css("display","none");


            var showOptions = $("#yesAndNoForChallenge").show();


            $("#noButton").click(function () {

                var hideOptions = $("#yesAndNoForChallenge").toggle("hide");

                var hideMovementButtons = $("#movementButtons").show();

                challengeFinish(updatedRow,updatedColumn);



            });


            $("#yesButton").click(function () {

                var hideOptions = $("#yesAndNoForChallenge").css("display","none");

                var showChallengeOptions = $("#challengeButtons").show();

                // welcomeToChallenge(nameOfMonster, healthMonster);

                var welcome = document.createElement("p");
                welcome.innerHTML = "You brave soul! You have just encountered " + nameOfMonster
                    + " with a health of " + healthMonster + " do you wish to attack? Keep attacking until his health is zero!";

                document.body.appendChild(welcome);


                $("#attack").click(function () {



                    someDamage = 40;
                    //For Monster
                    healthMonster -= someDamage;
                    //For Player
                    adventurer.healthPoints -= 10;


                    currentBattleInfo(adventurer.healthPoints,healthMonster);



                    if(healthMonster <= 0){

                        prizes.push(nameOfPrize);

                        challengeHealth(adventurer.healthPoints, nameOfPrize);

                        monsterDead(nameOfMonster,nameOfPrize, adventurer.healthPoints);


                        var firstHideAttackButtons = $("#challengeButtons").css("display","none");


                        var showChallengeOptions = $("#doChallengeAgain").show();





                        $("#challengeAgain").click(function () {

                            var hideChallengeOptions = $("#doChallengeAgain").css("display","none");


                            var showAttackButtons = $("#challengeButtons").css("display","none");


                            var showOptions = $("#yesAndNoForChallenge").show();


                            encounteringChallenge();

                        });

                        $("#challengeDenied").click(function () {

                            var hideChallengeButtonsDenied = $("#doChallengeAgain").css("display","none");

                            var hideAttackButtonsDenied = $("#challengeButtons").css("display","none");

                            var showMovementButtons = $("#movementButtons").show();


                            challengeFinish(updatedRow,updatedColumn);


                        });


                    }
                    else if(adventurer.healthPoints <= 0){

                        var hideChallengeOptions = $("#challengeButtons").css("display","none");
                        var showOptionToPlayChallengeAgain = $("#doTextAdventureAgain").show();

                        playerDead();

                        $("#playGameAgain").click(function () {


                            location.reload();

                        });

                        $("#doNotPlayGameAgain").click(function () {

                            var userStops = $("#doTextAdventureAgain").css("display","none");

                            userStopsPlaying();

                        });



                    }



                });



                $("#no_attack").click(function () {



                    adventurer.healthPoints -= 30;


                    noAttack(nameOfMonster,healthMonster,adventurer.healthPoints);



                    if(adventurer.healthPoints <= 0){

                        var hideChallengeOptions = $("#challengeButtons").css("display","none");
                        var showOptionToPlayChallengeAgain = $("#doTextAdventureAgain").show();

                        playerDead();



                        $("#playGameAgain").click(function () {


                            location.reload();

                        });

                        $("#doNotPlayGameAgain").click(function () {

                            var userStops = $("#doTextAdventureAgain").css("display","none");


                            userStopsPlaying();

                        });





                    }



                });



            });



        }



    };






//Created my movement Functions
function movingRight(currentRow, currentColumn) {

    var row = currentRow;
    var col = currentColumn;


    // var randomChallenges = [
    //
    //     {ch1: challengeForPlayer.startChallenge("Fat Shark",80,"Shark sword")},
    //     {ch2: challengeForPlayer.startChallenge("Giant Squid",80,"Squid Sword")},
    //     {ch3: challengeForPlayer.startChallenge("No Leg Monster",80,"Leg Sword")},
    //     {ch4: challengeForPlayer.startChallenge("Giant Cat",80,"Cat Hat")}
    //
    //
    // ];



    var currentCell = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","blue").text();


    updateInfoPlayer(row,col);

    if (updatedColumn < 0 || updatedColumn > 7){


        updatedColumn--;

        outOfBounce(updatedRow,updatedColumn);


    }else {


        if(currentCell === "P1"){

            var prizeOne = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","green");

            console.log("Found Prize1");

            prizes.push(getPrizeName1);

            findingAPrize(row, col, prizes.length, getPrizeName1);

        }else if(currentCell === "P2"){

            var prizeTwo = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","green");

            console.log("Found Prize2");

            prizes.push(getPrizeName2);

            findingAPrize(row, col, prizes.length, getPrizeName2);


        }else if (currentCell == "W"){

            var wall = $("#mainTable").find("tr").eq(updatedRow).find("td").eq(updatedColumn).css("color","black");

            updatedColumn--;

            // var awayFromWall = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","green").show();


            findingAWall(updatedRow,updatedColumn);


        }else if(currentCell === "G"){


            console.log("You have acquired " + prizes.length + " prizes!");


            if (!(prizes.length >= 2) || adventurer.healthPoints <= 0){

                var reachGoal = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","purple").text();

                goalLocationLost(row,col,prizes.length);


            }
            else {

                var reachGoal = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","purple").text();


                goalLocationWin(row,col,prizes.length);


            }

        }

        // else if(currentCell === ""){
        //
        //     var movingPlayer = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("background-color", "yellow");
        //
        //
        // }

        else if(currentCell === "C"){

            var foundChallenge = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","red").text();

            // var randomNumber = Math.floor((Math.random() * (4)));
            //
            //
            //
            // passingAChallenge(randomChallenges[randomNumber]);

            // var showOptions = $("#yesAndNoForChallenge").show();

            // $("#loadFunction").load(challenge.runChallenge("Fat Shark",80,"Shark sword"));

            challengeForPlayer.startChallenge("Fat Shark",80,"Shark sword");


            // console.log("Encountered Challenge");



        }

    }

}



function movingUp(currentRow, currentColumn) {

    var row = currentRow;
    var col = currentColumn;

    // var randomChallenges = [
    //
    //     {ch1: challengeForPlayer.startChallenge("Fat Shark",80,"Shark sword")},
    //     {ch2: challengeForPlayer.startChallenge("Giant Squid",80,"Squid Sword")},
    //     {ch3: challengeForPlayer.startChallenge("No Leg Monster",80,"Leg Sword")},
    //     {ch4: challengeForPlayer.startChallenge("Giant Cat",80,"Cat Hat")}
    //
    //
    // ];




    var currentCell = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","blue").text();


    updateInfoPlayer(row,col);


    if (updatedRow < 0 || updatedRow > 7){


        updatedRow++;

        outOfBounce(updatedRow,updatedColumn);


    }else {



        if(currentCell === "P1"){

            var prizeOne = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","green");

            console.log("Found Prize1");

            prizes.push(getPrizeName1);

            findingAPrize(row, col, prizes.length, getPrizeName1);

        }else if(currentCell === "P2"){

            var prizeTwo = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","green");

            console.log("Found Prize2");

            prizes.push(getPrizeName2);

            findingAPrize(row, col, prizes.length, getPrizeName2);


        }else if (currentCell === "W"){


            var wall = $("#mainTable").find("tr").eq(updatedRow).find("td").eq(updatedColumn).css("color","black");

            updatedRow++;

            findingAWall(updatedRow,updatedColumn);


        }else if(currentCell === "G"){


            console.log("You have acquired " + prizes.length + " prizes!");


            if (!(prizes.length >= 2) || adventurer.healthPoints <= 0){

                var reachGoal = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","purple").text();

                goalLocationLost(row,col,prizes.length);


            }
            else {

                var reachGoal = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","purple").text();


                goalLocationWin(row,col,prizes.length);


            }

        }

        // else if(currentCell === ""){
        //
        //     var movingPlayer = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("background-color", "yellow");
        //
        //     // var movingPlayer = $("#mainTable").find("tr").eq(updatedRow).find("td").eq(updatedColumn).text("S");
        //     //
        //     // updatedRow++;
        //     //
        //     // var nothingFound = $("#mainTable").find("tr").eq(row).find("td").eq(col).text("X");
        //
        //
        //
        // }
        else if(currentCell === "C"){

            var foundChallenge = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","red").text();


            // var randomNumber = Math.floor((Math.random() * (4)));
            //
            //
            //
            // passingAChallenge(randomChallenges[randomNumber]);

            // var showOptions = $("#yesAndNoForChallenge").show();


            challengeForPlayer.startChallenge("Giant Squid",80,"Squid Sword");

            // $("#loadFunction").load(challenge.runChallenge("Giant Squid",80,"Squid Sword"));




        }


    }


}



function movingDown(currentRow, currentColumn) {

    var row = currentRow;
    var col = currentColumn;


    // var randomChallenges = [
    //
    //     {ch1: challengeForPlayer.startChallenge("Fat Shark",80,"Shark sword")},
    //     {ch2: challengeForPlayer.startChallenge("Giant Squid",80,"Squid Sword")},
    //     {ch3: challengeForPlayer.startChallenge("No Leg Monster",80,"Leg Sword")},
    //     {ch4: challengeForPlayer.startChallenge("Giant Cat",80,"Cat Hat")}
    //
    //
    // ];




    var currentCell = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","blue").text();


    updateInfoPlayer(row,col);


    if (updatedRow < 0 || updatedRow > 7){


        updatedRow--;

        outOfBounce(updatedRow,updatedColumn);


    }else {



        if(currentCell === "P1"){

            var prizeOne = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","green");

            console.log("Found Prize1");

            prizes.push(getPrizeName1);

            findingAPrize(row, col, prizes.length, getPrizeName1);

        }else if(currentCell === "P2"){

            var prizeTwo = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","green");

            console.log("Found Prize2");

            prizes.push(getPrizeName2);

            findingAPrize(row, col, prizes.length, getPrizeName2);


        }else if (currentCell === "W"){


            var wall = $("#mainTable").find("tr").eq(updatedRow).find("td").eq(updatedColumn).css("color","black");

            updatedRow--;


            findingAWall(updatedRow,updatedColumn);


        }else if(currentCell === "G"){


            console.log("You have acquired " + prizes.length + " prizes!");


            if (!(prizes.length >= 2) || adventurer.healthPoints <= 0){

                var reachGoal = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","purple").text();


                goalLocationLost(row,col,prizes.length);


            }
            else {

                var reachGoal = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","purple").text();


                goalLocationWin(row,col,prizes.length);


            }

        }

        // else if(currentCell === ""){
        //
        //     var movingPlayer = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("background-color", "yellow");
        //
        //
        //
        //
        // }

        else if(currentCell === "C"){

            var foundChallenge = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","red").text();


            // var randomNumber = Math.floor((Math.random() * (4)));
            //
            //
            //
            // passingAChallenge(randomChallenges[randomNumber]);

            // var showOptions = $("#yesAndNoForChallenge").show();


            challengeForPlayer.startChallenge("No Leg Monster",80,"Leg Sword");
            // $("#loadFunction").load(challenge.runChallenge("No Leg Monster",80,"Leg Sword"));



        }


    }


}



function movingLeft(currentRow, currentColumn) {

    var row = currentRow;
    var col = currentColumn;


    // var randomChallenges = [
    //
    //     {ch1: challengeForPlayer.startChallenge("Fat Shark",80,"Shark sword")},
    //     {ch2: challengeForPlayer.startChallenge("Giant Squid",80,"Squid Sword")},
    //     {ch3: challengeForPlayer.startChallenge("No Leg Monster",80,"Leg Sword")},
    //     {ch4: challengeForPlayer.startChallenge("Giant Cat",80,"Cat Hat")}
    //
    //
    // ];




    var currentCell = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","blue").text();


    updateInfoPlayer(row,col);


    if (updatedColumn < 0 || updatedColumn > 7){


        updatedColumn++;

        outOfBounce(updatedRow,updatedColumn);


    }else {




        if(currentCell === "P1"){

            var prizeOne = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","green");

            console.log("Found Prize1");

            prizes.push(getPrizeName1);

            findingAPrize(row, col, prizes.length, getPrizeName1);


        }else if(currentCell === "P2"){

            var prizeTwo = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","green");

            console.log("Found Prize2");

            prizes.push(getPrizeName2);

            findingAPrize(row, col, prizes.length, getPrizeName2);


        }else if (currentCell === "W"){


            var wall = $("#mainTable").find("tr").eq(updatedRow).find("td").eq(updatedColumn).css("color","black");

            updatedColumn++;


            findingAWall(updatedRow,updatedColumn);


        }else if(currentCell === "G"){



            console.log("You have acquired " + prizes.length + " prizes!");


            if (!(prizes.length >= 2) || adventurer.healthPoints <= 0){

                var reachGoal = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","purple").text();


                goalLocationLost(row,col,prizes.length);


            }
            else {

                var reachGoal = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","purple").text();

                goalLocationWin(row,col,prizes.length);


            }

        }
        // else if(currentCell === ""){
        //
        //     var movingPlayer = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("background-color", "yellow");
        //
        //
        //
        // }
        else if(currentCell === "C"){

            var foundChallenge = $("#mainTable").find("tr").eq(row).find("td").eq(col).css("color","red").text();

            // var showOptions = $("#yesAndNoForChallenge").show();

            // var randomNumber = Math.floor((Math.random() * (4)));
            //
            //
            //
            // passingAChallenge(randomChallenges[randomNumber]);


            challengeForPlayer.startChallenge("Giant Cat",80,"Cat Hat");
            // $("#loadFunction").load(challenge.runChallenge("Giant Cat",80,"Cat Hat"));



        }


    }


}




        $("#Left_button").fadeOut(1000).fadeIn(1000);
        $("#Right_button").fadeOut(1000).fadeIn(1000);
        $("#Up_button").fadeOut(1000).fadeIn(1000);
        $("#Down_button").fadeOut(1000).fadeIn(1000);

        //Hiding all obstaclaes from user
        // var goalLocation = $("#mainTable").find("tr").eq(7).find("td").eq(7).hide();
        // // goalLocation.show().text();
        // var prizeOne = $("#mainTable").find("tr").eq(3).find("td").eq(2).text();
        // // prizeOne.show().text();
        // var prizeTwo = $("#mainTable").find("tr").eq(1).find("td").eq(5).hide();
        // // prizeTwo.show().text();
        // var wallOne = $("#mainTable").find("tr").eq(3).find("td").eq(6).hide();
        // // wallOne.show().text();
        // var wallTwo = $("#mainTable").find("tr").eq(2).find("td").eq(5).hide();
        // // wallTwo.show().text();
        // var wallThree = $("#mainTable").find("tr").eq(1).find("td").eq(3).hide();
        // // wallThree.show().text();
        // var wallFour = $("#mainTable").find("tr").eq(5).find("td").eq(6).hide();
        // // wallFour.show().text();
        // var chg1 = $("#mainTable").find("tr").eq(7).find("td").eq(2).hide();
        // // chg1.show().text();
        // var chg2 = $("#mainTable").find("tr").eq(4).find("td").eq(4).hide();
        // // chg2.show().text();
        // var chg3 = $("#mainTable").find("tr").eq(4).find("td").eq(1).hide();
        // // chg3.show().text();
        // var chg4 = $("#mainTable").find("tr").eq(6).find("td").eq(5).hide();
        // chg4.show().text();




    var checkWall = $("#mainTable").find("tr").eq(updatedRow).find("td").eq(updatedColumn).css("color","blue");


    updateInfoPlayer(updatedRow,updatedColumn);



        $("#Left_button").click(function () {

            updatedColumn--;

            movingLeft(updatedRow, updatedColumn);

        });

        $("#Right_button").click(function () {

            updatedColumn++;

            movingRight(updatedRow, updatedColumn);


        });



        $("#Up_button").click(function () {

            updatedRow--;

            movingUp(updatedRow, updatedColumn);


        });


        $("#Down_button").click(function () {

            updatedRow++;

            movingDown(updatedRow, updatedColumn);

        });


    });
