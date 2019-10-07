var x;
var y;

for (x = 1; x <= 7; x++) {
    var hash;
    for (y = 1; y <= x; y++) {
        if (y == 1) {
            hash = "#";
        } else {
            hash = hash + "#";
        }
    }
    console.log(hash);
}