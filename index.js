document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    showDivs(slideIndex);
    window.plusDivs = function(n){
        showDivs(slideIndex += n);
    }
    window.currentDiv = function(n){
        showDivs(slideIndex = n);
    }
    function showDivs(n) {
        let i;
        let slides = document.getElementsByClassName("onboarding-page-images");
        let dots = document.getElementsByClassName("button-demo");
        console.log("Slides:", slides);
        console.log("Dots:", dots);
        console.log("showDivs called with n =", n);
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        slides[slideIndex - 1].classList.add("active");
        dots[slideIndex - 1].classList.add("active");
        console.log("Current slide index:", slideIndex);
        console.log("Active slide:", slides[slideIndex - 1]);
        console.log("Active dot:", dots[slideIndex - 1]);
    }
});