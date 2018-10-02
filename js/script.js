"use strict";

//Function to add box shadow to navigation menu after 30px scroll

window.onscroll = function () {
    if (window.pageYOffset > 10) {
        document.querySelector("nav").classList.add("sticky");
    } else {
        document.querySelector("nav").classList.remove("sticky");
    }
};