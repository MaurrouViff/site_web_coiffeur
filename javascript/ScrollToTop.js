window.addEventListener('scroll', function() {
    let arrowContainer = document.querySelector('.arrow-container');
    if (window.scrollY >= window.innerHeight / 2) {
        arrowContainer.classList.add('show');
    } else {
        arrowContainer.classList.remove('show');
    }
});

document.querySelector('.arrow-container').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});