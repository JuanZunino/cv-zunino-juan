const btnTop = document.querySelector('.scroll-top-btn');

window.onscroll = function() {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
};


btnTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});