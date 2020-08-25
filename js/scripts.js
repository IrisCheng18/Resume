// I am not going to do anything until the DOM is loaded
$(function () {
    "use strict";

    // drawLine();

    // function drawLine() {
    //     var c = document.getElementById("line1");
    //     var ctx = c.getContext("2d");
    //     ctx.strokeStyle = "#FFFFF0";
    //     ctx.beginPath();
    //     ctx.moveTo(0, 0);
    //     ctx.lineTo(100%, 0);
    //     ctx.stroke();
    // }

    window.onscroll = function () { myFunction() };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

});