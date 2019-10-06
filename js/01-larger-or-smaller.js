integer1 = window.prompt("Enter the First Number :");
integer2 = window.prompt("Enter the Second Number");

if (integer1 > integer2) {
    window.document.write(integer1 + " is larger.<br>");
} else if (integer2 > integer1) {
    window.document.write(integer2 + " is larger.<br>");
} else {
    window.document.write("Both the numbers are equal.<br>");
}
window.document.write("Number 1 : " + integer1 + ".<br>");
window.document.write("Number 2 : " + integer2 + ".<br>");