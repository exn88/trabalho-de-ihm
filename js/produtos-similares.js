const carrossel = document.querySelector('.carrossel');
const grupo = document.querySelector('.grupo');

const clone = grupo.cloneNode(true);

carrossel.appendChild(clone);

carrossel.addEventListener('scroll', () => {

    const largura_grupo = grupo.offsetWidth;

    if (carrossel.scrollLeft >= largura_grupo) {
        carrossel.scrollLeft -= largura_grupo;
    }

});

