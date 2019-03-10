/*eslint-env browser*/
//Larger or Smaller
/*
var iFirst = window.prompt("Enter first integer");
var iSecond = window.prompt("Enter second integer");
if (iFirst > iSecond) {
    document.write(iFirst);
} else if (iFirst < iSecond) {
    document.write(iSecond);
} else {
    document.write("It's a tie!");
}

//The “Coin Flip” Game (my first go, before item 8)
var coinFlip = (Math.random() > 0.5) ? "HEADS" : "TAILS";
do {
    var strChoice = window.prompt("Enter HEADS or TAILS");
} while (strChoice !== "HEADS" && strChoice !== "TAILS");


if (strChoice === "HEADS") {
    if (coinFlip === "HEADS") {
        document.write("The flip was heads and you chose heads...you win!");
    } else {
        document.write("The flip was heads but you chose tails...you lose");
    }
} else if (strChoice === "TAILS") {
    if (coinFlip === "HEADS") {
        document.write("The flip was tails but you chose heads...you lose!");
    } else {
        document.write("The flip was tails and you chose tails...you win!!");
    }
}

//The “Coin Flip” Game (my second go, with item 8)
var coinFlip = (Math.random() > 0.5) ? 1 : 0;
var strChoice;
do {
    strChoice = window.prompt("Enter HEADS or TAILS");
} while (strChoice !== "HEADS" && strChoice !== "TAILS");
if (strChoice === "HEADS") {
    if (coinFlip === true) {
        window.alert("The flip was heads and you chose heads...you win!");
    } else {
        window.alert("The flip was heads but you chose tails...you lose");
    }
} else if (strChoice === "TAILS") {
    if (coinFlip === true) {
        window.alert("The flip was tails but you chose heads...you lose!");
    } else {
        window.alert("The flip was tails and you chose tails...you win!!");
    }
}

//The “Coin Flip” Game Redux
var coinFlip;
var i = 0;
do {
    coinFlip = (Math.random() > 0.5) ? 1 : 0;
    if (coinFlip === 0) {
        window.console.log("HEADS");
    } else {
        window.console.log("TAILS");
    }
    i += 1;
} while (i < 10 && coinFlip === 0);

//The “Coin Flip Streak” Game
var coinFlip;
do {
    coinFlip = (Math.random() > 0.5) ? 1 : 0;
    if (coinFlip === 0) {
        window.console.log("HEADS");
    } else {
        window.console.log("TAILS");
    }
} while (coinFlip !== 1);

//Looping a Triangle
var i, j;
for (i = 1; i <= 6; i += 1) {
    for (j = 1; j <= i; j += 1) {
        window.console.log("#");
    }
    window.console.log("\n");
}

//Odd or Even?
var i;
for (i = 0; i < 16; i += 1) {
    if (i % 2 === 0) {
        window.console.log('\"' + i + ' is even' + '\"');
    } else {
        window.console.log('\"' + i + ' is odd' + '\"');
    }
}

//Marco! Polo!
var i;
var strOutput = "";
for (i = 1; i < 101; i += 1) {
    if ((i % 3 !== 0) && (i % 5 !== 0)) {
        window.console.log(i);
    } else {
        if (i % 3 === 0) {
            strOutput += "Marco!";
        }
        if (i % 5 === 0) {
            strOutput += "Polo!";
        }
        window.console.log(strOutput);
        strOutput = "";
    }
}
*/
//Countdown
var i;
var iCnt = parseInt(window.prompt("Enter a number to count down from"), 10);
for (i = iCnt; i >= 0; i -= 1) {
    window.console.log(i);
}