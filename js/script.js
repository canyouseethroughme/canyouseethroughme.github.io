"use strict";

//Function to add box shadow to navigation menu after 30px scroll

window.onscroll = function () {
    if (window.pageYOffset > 10) {
        document.querySelector("nav").classList.add("shadow-anim");

    } else {
        document.querySelector("nav").classList.remove("shadow-anim");


    }
};


//Typewriter

// let i = 0;
// let txt = 'Hello, visitor!';
// let speed = 100;

// function typeWriter() {
//     if (i < txt.length) {
//         document.getElementById("typewriter").innerHTML += txt.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }
// }

// typeWriter();