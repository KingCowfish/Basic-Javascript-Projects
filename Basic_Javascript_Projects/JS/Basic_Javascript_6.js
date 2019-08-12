function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").Value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Age_Function() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = can_vote +" to vote."
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "black and white")
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_year + ".";
}

function Animal(Species, Color, Name) {
    this.Animal_Species = Species;
    this.Animal_Color = Color;
    this.Animal_Name = Name;
}

var Alex = new Animal("dog", "tan and white", "Karma");
var Mara = new Animal("cat", "black", "Java");
var James = new Animal("giraffe", "purple", "Freeze In Hell Batman!");

function pet() {
    document.getElementById("New_and_This").innerHTML = 
    "Alex has a " + Alex.Animal_Color + " " + Alex.Animal_Species + " named "
    + Alex.Animal_Name + ".";
}

function a_function() {
    document.getElementById("Nested_Function").innerHTML = 
    "There are " + add() + " dalmations!";
    function add() {
        var starting_point = 100;
        function plus() {starting_point += 1;}
        plus();
        return starting_point;
    }
}