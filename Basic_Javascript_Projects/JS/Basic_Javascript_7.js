x = 40

function pants() {
    var y = 10;
    document.write(x+y);
}

pants()

function get_date() {
    if (new Date().getHours() > 12) {
    document.getElementById("day").innerHTML = "Did you forget to eat your lunch?";
    }
}

function year() {
    if (new Date().getFullYear % 2 != 0) {
        document.getElementById("odd").innerHTML = "This is an odd year is it not?";
    }
}

function ticket() {
    years_old = document.getElementById("age").value;
    if (years_old < 17) {
        movie = "You will need an adult to accompany you for you to see this movie.";
    }
    else {
        movie = "How many tickets would you like to purchase?";
    }
    document.getElementById("child").innerHTML = movie;
}

function Time_function() {
    var Time = new Date().getHours();//looks up hours from computer in order to determine variable's value.
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}