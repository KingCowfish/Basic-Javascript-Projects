function fruit() {
    var Banana = "I love me some bananas!!!";
    var color = Banana.fontcolor("yellow");
    document.getElementById("yum").innerHTML = color;
}

function My_First_Function() {
    var String = "This text is green!";
    var result = String.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result
}

function sweet() {
    var sentence = "I love me";
    sentence += " some raspberry jam!";
    document.getElementById("jam").innerHTML = sentence;
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}