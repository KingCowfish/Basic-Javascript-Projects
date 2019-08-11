function addition() {
    var add = 6+2;
    document.getElementById("Math").innerHTML = "6 + 2 = " + add;
}

function subtraction() {
    var sub = 6-2;
    document.getElementById("Math2").innerHTML = "6 - 2 = " + sub;
}

function multiplication() {
    var mult = 6*2;
    document.getElementById("Math3").innerHTML = "6 x 2 = " + mult;
}

function division() {
    var div = 6/2;
    document.getElementById("Math4").innerHTML = "6 / 2 = " + div;
}

function maths() {
    var all = (6+2)+(6-2)+(6*2)+(6/2);
    document.getElementById("Math5").innerHTML = "If you add all the other buttons together you get " + all + "!";
}

function modulus() {
    var mod = 6%4;
    document.getElementById("Math6").innerHTML = "6 / 4 has a remainder of " + mod;
}

function negation_op() {
    var neg = 7;
    document.getElementById("Math7").innerHTML = -neg;
}

function increment() {
    var x = 8;
    x++;
    document.getElementById("Math8").innerHTML = x;
}

function decrement() {
    var x = 3;
    x--;
    document.getElementById("Math9").innerHTML = x;
}

window.alert(Math.random() * 87);

document.write(Math.sqrt(81));