$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky");

        }
        if (this.scrollY > 20) {
            $('.whatsapp').addClass("sticky");

        } else {
            $('.whatsapp').removeClass("sticky");

        }
        if (this.scrollY > 20) {
            $('.whatsappmsg').hide()};
         if (this.scrollY < 20) {
                $('.whatsappmsg').show()};
    


        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.hire').click(function () {

        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });


    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Designer", "Developer", "Video Editor", "Content Writer", "Freelancer", "Youtuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Designer", "Developer", "Video Editor", "Content Writer", "Freelancer", "Youtuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-3", {
        strings: [,"DM Me In Whatsapp"],
        typeSpeed: 30,
        backSpeed: 20,
        loop: false
    });
  

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

var x = 0;
function info() {

    if (x == 0) {
        document.getElementById("ht").style.display = 'block';
        document.getElementById("read").innerHTML = 'Read Less';

        x = 1;
    }
    else if (x == 1) {
        document.getElementById("ht").style.display = 'none';
        document.getElementById("read").innerHTML = 'Read More';

        x = 0;

    }
}

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom - 280 <= docViewBottom) && (elemTop >= docViewTop - 550));
}

$(window).scroll(function () {

    if (isScrolledIntoView('.skills') === true) {
        $('.skills').addClass('view')
    }
    else {
        $('.skills').removeClass('view')
    }

});
const nodemailer = require('nodemailer');

// email for message sending
function sendmessage() {

    var name = $('#name1').val();
    var email = $('#email1').val();
    var subject = $('#subject1').val();
    var message = $('#msg1').val();

    // var body = $('#body').val();

    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;
    //console.log(name, phone, email, message);

    Email.send({
        Host: "smtp.gmail.com",
        Username: "subediyubaraj9@gmail.com",
        Password: "vfepqrasardymwqq",
        To: "subediyubaraj9@gmail.com",
        From: "subediyubaraj9@gmail.com",
        Subject: "WEB message From:" + name + " Email:" + email,
        Body: Body
    }).then(
        message => {
            //console.log (message);
            if (message == 'OK') {
                alert('Message has been sent. Thank you for your response.');
            }
            else {
                console.error(message);
                alert('There is error at sending message. ')

            }

        }
    );
    setTimeout(() => {
        document.querySelector('#message1').reset();
    }, 2000);
}
function hire() {

    var name = $('#name2').val();
    var email = $('#email2').val();
    var phone = $('#phone2').val();
    var location = $('#location2').val();
    var skills = $('#skills2').val();
    var salary = $('#salary2').val();
    var message = $('#message2').val();

    // var body = $('#body').val();

    var Body = 'Name of Organization: ' + name + '<br> Email of Organization:' + email + '<br>Phone Number: ' + phone + '<br>Location of The Office: ' + location +
        '<br>Skills Needed: ' + skills + '<br>Salary They Can Pay: ' + salary + '<br>Message For Me: ' + message;


    Email.send({
        Host: "smtp.gmail.com",
        Username: "subediyubaraj9@gmail.com",
        Password: "vfepqrasardymwqq",
        To: "subediyubaraj9@gmail.com",
        From: "subediyubaraj9@gmail.com",
        Subject: name + " Wants to Hire",
        Body: Body
    }).then(
        message => {
            //console.log (message);
            if (message == 'OK') {
                alert('Thank Your For Hiring me.I will contact you soon');
            }
            else {
                console.error(message);
                alert('Sorry for inconvenience, Can you please fill once again?')

            }

        }
    );
    setTimeout(() => {
        document.querySelector('#hireform').reset();
    }, 2000);




}
var cvblock = document.getElementById("cv");
function displayCV() {

    cvblock.style.display = 'block';
    cvblock.style.transition = '0.3s ease in-out';
    document.addEventListener('mousemove', function (e) {

        var x = e.clientX;
        var y = e.clientY;
        cvblock.style.left = (x - 100) + "px";
        cvblock.style.top = (y - 300) + "px";
    });

}
function deleteCV() {

    cvblock.style.display = 'none';
    cvblock.style.transition = '0.3s ease in-out';


}
var wannahire = document.getElementById("wannahire");
document.addEventListener('mousemove', function (e) {

    var x = e.clientX;
    var y = e.clientY;
    wannahire.style.left = (x + 0) + "px";
    wannahire.style.top = (y + 0) + "px";


});
