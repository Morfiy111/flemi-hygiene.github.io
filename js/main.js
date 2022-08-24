var owl = $('.owl-carousel-feedback');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});

var owl = $('.carousel-women');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});

window.addEventListener('scroll', function () {
    let scroll = this.document.querySelector('.button-up');
    scroll.classList.toggle('active', this.window.scrollY > 400);
    scroll.onclick = function () {
        scrollPageUp();
    }
})
function scrollPageUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


var itemsCount = 3;
if (window.matchMedia("(max-width: 991px)").matches) {
    itemsCount = 3;
}
if (window.matchMedia("(max-width: 767px)").matches) {
    itemsCount = 2;
}
if (window.matchMedia("(max-width: 478px)").matches) {
    itemsCount = 1;
}
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: itemsCount,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});


