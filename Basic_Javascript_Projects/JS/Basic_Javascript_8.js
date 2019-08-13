function coconuts() {//used to concatenate variables
    var one = "I have ";
    var two = "a lovely ";
    var three = "bunch of ";
    var four = "coconuts!";
    var song = one.concat(two, three, four);
    document.getElementById("catcon").innerHTML = song;
}

function slice_meth() {//used to display a selected section of a string.
    var JackN = "You can't handle the truth!";
    var section = JackN.slice(21, 27);
    document.getElementById("slice").innerHTML = section;
}

function allcaps() {
    var str = "Stella!!!"
    var ups = str.toUpperCase();
    document.getElementById("string").innerHTML = ups;
}

function sought() {
    var song = "My baloney has a first name, it's H O M E R.";
    var homer = song.search("name");
    document.getElementById("inspect").innerHTML = homer;
}

function string_meth() {
    var fail = 404;
    document.getElementById("nums_str").innerHTML = fail.toString();
}

function precise() {
    var num = 87490.09879;
    document.getElementById("short").innerHTML = num.toPrecision(5);
}

function convert() {//toFixed converts a number into a string
    var num = 77.8914;
    document.getElementById("string2").innerHTML = num.toFixed(2);
}

function primval() {//returns primitive value of a string
    var str = "I have ants in my pants!"
    document.getElementById("prim").innerHTML = str.valueOf();
}