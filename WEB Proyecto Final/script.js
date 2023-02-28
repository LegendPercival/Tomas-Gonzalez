const deslizarMenu = () => {
    const botonMenu = document.querySelector('.boton-menu');
    const lista = document.querySelector('.lista');
    const listaLi = document.querySelectorAll('.lista li');

    botonMenu.addEventListener('click', () => {
        //Activar y Desactivar lista.
        lista.classList.toggle('lista-active');

        //Animacion de los links.
        listaLi.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `deslizar 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        });

        //Animacion del boton del menú.
        botonMenu.classList.toggle('open');
    });

    
}
deslizarMenu();

window.onscroll = function() {botonIrArriba()};

function botonIrArriba() {
    const botonTop = document.querySelector('.boton-top');

    if (document.documentElement.scrollTop > 600){
        botonTop.style.display = "block";
    }
    else botonTop.style.display = "none";
}