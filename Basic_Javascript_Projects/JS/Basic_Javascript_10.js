function Call_Loop() {
    var Digit = ""
    var x = 5;
    while (x<50) {
        Digit += "<br>" + x;
        x = x+5
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function strlength() {
    var string = "By Thor's hammer!"
    var x = string.length;
    document.getElementById("wordy").innerHTML = x;
}

function for_loop() {
    var clothing = ["Hat", "Shirt", "Pants", "Socks", "Shoes"]
    var closet = ""
    var i;
    for (i = 0; i < clothing.length; i++) {
        closet += clothing[i] + "<br>";
    }
    document.getElementById("List_of_Clothes").innerHTML = closet;
}

function array_function() {
    var Fruit = [];
    Fruit[0] = "apple";
    Fruit[1] = "peach";
    Fruit[2] = "pear";
    Fruit[3] = "banana";
    document.getElementById("array").innerHTML = "I ate a " + 
    Fruit[1] + " for lunch."
}

function constant_function() {
    const crayons = {color1:"blue", color2:"red", color3:"green", color4:"yellow"};
    crayons.color4 = "purple";
    crayons.color5 = "mauve";
    document.getElementById("constant").innerHTML = "I colored the sun " +
    crayons.color5 + ", not " + crayons.color4 + "!";
}

var x = "Left."
document.write(x);
document.write("<br>" + x);
{
    let x = "Right."
    document.write("<br>" + x);
}
document.write("<br>" + x);

var Q = redrum(34, 81); 

function redrum(a, b) {
  return a * b;   
}  
document.write("<br>" + Q);


let Pet = {
    species: "dog",
    color: "tan and white",
    name: "Karma",
    diet: "kibble",
    description : function() {
        return "My pet " + this.name + ", is a " + this.color + "" + this.species + ".";
    } 
};
document.getElementById("pet_object").innerHTML = Pet.description();


var sent = "";
var i;
for(i = 0; i < 12; i++) {
    if(i === 8) { break; }//break jumps out of a loop or a switch statement
    sent += "Your number is " + i + "<br>";
}
document.getElementById("breakingb").innerHTML = sent;


var words = "";
var p;
for (p = 3; p > 0; p--) {
    if (p === 1) { continue; }//continue jumps over an iteration
    words += "The number is " + p + "<br>";
}
document.getElementById("continueon").innerHTML = words;