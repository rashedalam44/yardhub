var slides = document.querySelectorAll('.slide-container');
var index = 0;

function next(){
    slides[index].classList.remove('active2');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active2');
}

function prev(){
    slides[index].classList.remove('active2');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active2');
}