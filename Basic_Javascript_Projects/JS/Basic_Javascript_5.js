document.write(typeof true);

function number() {
    document.getElementById("total").innerHTML = 0/0;
}

function boolean1() {
    document.getElementById("lame").innerHTML = isNaN("We Jammin");
}

function boolean2() {
    document.getElementById("curry").innerHTML = isNaN("6");
}

document.write(2E999);

document.write(-29E999);

document.write(10>8);

document.write(2>111);

console.log(4+59);

document.write("63" + 7);

console.log(24>51);

document.write(23==23);

document.write(23==9);

document.write(10===10);

document.write("10"===44);

document.write("10"===10);

document.write(22===11);

document.write(4>2 && 5<9);

document.write(3>1 && 9<3);

document.write(3>1 || 9<3);

document.write(1>3 || 9<4);

function not_fun() {
    document.getElementById("not").innerHTML = !(2>5);
}

function more_fun() {
    document.getElementById("not2").innerHTML = !(5>2);
}