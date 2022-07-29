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
document.addEventListener('DOMContentLoaded', () => {
    // инициализация слайдера
    new ItcSimpleSlider('.itcss', {
        loop: true,
        autoplay: true,
        interval: 5000,
        swipe: true,
    });
});