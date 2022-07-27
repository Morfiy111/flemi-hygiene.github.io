window.addEventListener('scroll', function () {
    let scroll = this.document.querySelector('.button-up');
    scroll.classList.toggle('active', this.window.scrollY > 400);
    scroll.onclick = function () {
        scrollPageU();
    }
})
function scrollPageUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
