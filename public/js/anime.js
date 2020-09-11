// this function will move the main page to information page
function btnMoreClicked() {
    // move away the main page
    let pageTransition = anime({
        targets: '#intro-1',
        translateY: "-100%",
        duration: 1000,
        loop: false,
        easing: 'easeInOutQuint',
    });

    // make the information page appear
    let intro2 = document.getElementById('intro-2');
    intro2.style.display = 'block';

    // and then move it up
    let pageTransition2 = anime({
        targets: '#intro-2',
        translateY: "-100%",
        duration: 1000,
        loop: false,
        easing: 'easeInOutQuint',
    });

    /*setTimeout(function() {
        let intro1 = document.getElementById('intro-1');
        intro1.style.display = 'none';
    }, 1000);*/
}

// this function will move back to main page
function btnBackClicked() {
    // interchange the 2 page
    let pageTransition2 = anime({
        targets: '#intro-2',
        translateY: "0%",
        duration: 1000,
        loop: false,
        easing: 'easeInOutQuint',
    });

    let pageTransition = anime({
        targets: '#intro-1',
        translateY: "0%",
        duration: 1000,
        loop: false,
        easing: 'easeInOutQuint',
    });

    // after transition the information page will disappear
    setTimeout(function() {
        let intro2 = document.getElementById('intro-2');
        intro2.style.display = 'none';
    }, 1000);
}

// hovering effects
let SO_INTRO = "Sexual orientation intro";
let GIE_INTRO = "Gender identity and expression intro";
let SC_INTRO = "Sex characteristics intro";
let IMG_EXPLAIN = "images/explain.png";
let IMG_DEFAULT = "images/Default2.png";

// get the intro text
let intro_text = document.getElementsByClassName("speech-bubble-text")[0].innerHTML;
console.log(intro_text);

// set text for sex-oriented
$('.sex-oriented').hover(function() {
    $('.speech-bubble-text').text(SO_INTRO);
    $('.img-mascot').attr('src', IMG_EXPLAIN);
}, function() {
    $('.speech-bubble-text').text(intro_text);
    $('.img-mascot').attr('src', IMG_DEFAULT);
});

// set text for gender-identity-expression
$('.gender-identity-expression').hover(function() {
    $('.speech-bubble-text').text(GIE_INTRO);
    $('.img-mascot').attr('src', IMG_EXPLAIN);
}, function() {
    $('.speech-bubble-text').text(intro_text);
    $('.img-mascot').attr('src', IMG_DEFAULT);
});

// set text for sex-characteristics
$('.sex-characteristics').hover(function() {
    $('.speech-bubble-text').text(SC_INTRO);
    $('.img-mascot').attr('src', IMG_EXPLAIN);
}, function() {
    $('.speech-bubble-text').text(intro_text);
    $('.img-mascot').attr('src', IMG_DEFAULT);
});