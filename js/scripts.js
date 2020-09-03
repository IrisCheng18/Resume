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

    /////////////////////
    // Header animation
    /////////////////////

    let $container=$('.container');
    $container.addClass('inactive');

    new TypeIt("#quotes", {
        speed: 100,
        waitUntilVisible: true,
        loop: false,
        afterComplete: function () {
            console.log("DONE!");
        }
    })
        .type("There is no difference between science and art when it comes to ", { delay: 2000 })
        .break({ delay: 1000 })
        .type("creativeness,", { delay: 2000 })
        // .options({ speed: 500, delay: 2000 })
        .type(" productiveness,", { delay: 2000 })
        .type(" to conclusions", { delay: 2000 })
        .type(" and to formulations.", { delay: 2000 })
        .exec(
            function () {
                console.log("fire!");
            },
            { delay: 2000 }
        )
        .go();

    setTimeout(drawLogo, 27000);

    function drawLogo() {
        let $info = $('.info');
        $info.addClass('dim');

        let $intro = $('.intro'),
            $item = $intro.find('.item');
            $item.addClass('active');

        $item.find('svg').drawsvg().drawsvg('animate');

        setTimeout(myFunction, 14000);

        function myFunction() {
            $item.removeClass('active');

            $info.removeClass('dim');
            $info.addClass('active');

            $container.removeClass('inactive');
        }
    }

    ///////////////////
    // Sticky Navbar
    ///////////////////

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

    ///////////////////
    // Contact Form
    ///////////////////

    const constraints = {
        userName: {
            presence: { allowEmpty: false },
        },
        userEmail: {
            presence: { allowEmpty: false },
            email: true,
        },
        userMessage: {
            presence: { allowEmpty: false },
        },
    };
    
    const form = document.getElementById("contactform");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    
        const formValues = {
            userName: form.elements.userName.value,
            userEmail: form.elements.userEmail.value,
            userMessage: form.elements.userMessage.value,
        };
    
        // console.log(validate(formValues, constraints));
        const errors = validate(formValues, constraints);
    
        if(errors) {
            console.log(errors);
        } else {
            console.log("success");
        }
    });

});