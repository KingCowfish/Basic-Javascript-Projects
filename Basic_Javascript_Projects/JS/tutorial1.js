var lang = "Javascript";

function myfunction(lang) {
    this.lang = lang;
    console.log("Hello, welcome to "+this.lang);
};
var Test = new myfunction(lang)