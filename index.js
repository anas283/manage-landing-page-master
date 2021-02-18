document.getElementById('menu-close').style.display = "none";

var isMenuOpen = false;
function openNav() {
    document.getElementById('menu-open').style.display = "none";
    document.getElementById('menu-close').style.display = "block";
    document.getElementById("myNav").style.display = "block";
    document.body.style.overflowY = "hidden";

    setTimeout(function() {
        isMenuOpen = true;
    },100)
}

function closeNav() {
    document.getElementById('menu-open').style.display = "block";
    document.getElementById('menu-close').style.display = "none";
    document.getElementById("myNav").style.display = "none";
}

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', function(e){   
    if (document.getElementById('menu').contains(e.target)) {
        // Clicked in box
    } else {
        if(isMenuOpen) {
            closeNav();
            
            setTimeout(function() {
                isMenuOpen = false;
            },100)
        }
    }
});

// close menu onscroll
window.onscroll = function(e) {
    closeNav();
}

// change menu icon
function changeIcon() {
    var img = document.getElementById('menu-img').src;
    if (img.indexOf('icon-hamburger.svg') != -1) {
        document.getElementById('menu-img').src = './images/icon-close.svg';
    } else {
        document.getElementById('menu-img').src = './images/icon-hamburger.svg'
    }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}