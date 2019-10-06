var coinFlip;
var choice;
var certainNumber;

coinFlip = Math.floor((Math.random() * 100) + 1);
certainNumber = 50;
choice = window.prompt("Enter Heads or Tails :");
choice.toLowerCase();

if (coinFlip < certainNumber) {
    if (choice === "heads") {
        window.alert("The flip was heads and you chose heads...you win!");
    } else if (choice === "tails") {
        window.alert("The flip was heads but you chose tails...you lose!");
    } else {
        window.alert("Enter heads or tails only.");
    }
} else if (coinFlip >= certainNumber) {
    if (choice === "heads") {
        window.alert("The flip was tails but you chose heads...you lose!");
    } else if (choice === "tails") {
        window.alert("The flip was tails and you chose tails...you win!");
    } else {
        window.alert("Enter heads or tails only.");
    }
}