var coinFlip;
var flag = true;

do {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
        flag = false;
    }
} while (flag == true);