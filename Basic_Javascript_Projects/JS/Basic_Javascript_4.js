function my_dictionary() {
    var drink = {
        Type:"Beer.",
        Alcohol:true,
        Carbonation:true,
        Taste:"Dirt."
    };
    delete drink.Taste;
    document.getElementById("Dictionary").innerHTML = drink.Taste;
}