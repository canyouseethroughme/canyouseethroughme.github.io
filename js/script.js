"use strict";

//Function to add box shadow to navigation menu after 30px scroll

window.onscroll = function () {
    if (window.pageYOffset > 10) {
        document.querySelector("nav").classList.add("sticky");
    } else {
        document.querySelector("nav").classList.remove("sticky");
    }
};


//Typewriter

var i = 0;
var txt = 'Hello, visitor!';
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();