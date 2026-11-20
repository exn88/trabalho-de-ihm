let indice = 0;

const slides = document.querySelectorAll(".slide");

function mostrarSlide() {
    slides.forEach(slide => {
        slide.classList.remove("ativo");
    });

    slides[indice].classList.add("ativo");
}

function mudarSlide(direcao) {
    indice += direcao;

    if (indice >= slides.length) {
        indice = 0;
    }

    if (indice < 0) {
        indice = slides.length - 1;
    }

    mostrarSlide();
}

setInterval(() => {
    mudarSlide(1);
}, 4000);