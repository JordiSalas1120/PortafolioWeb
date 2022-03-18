
document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

const links = {
	1:"https://festivaldemusica-rock-edm.netlify.app/",
	2:"https://frontendstore-proyecto.netlify.app/",
	3:"https://jordifreelancer1.netlify.app/",
	4:"https://juego2d-en-js.netlify.app/",
	5:"https://youtube.com",
	6:"https://variables-css.netlify.app/",
	7:"https://web-pug-leidy.netlify.app/",
	8:"https://blog-de-recetas-de-cafe.netlify.app/",
    9:"https://calculadora-jordi.netlify.app/"
}
function iniciarApp(){
    
    crearGaleria();
    
}
function crearGaleria(){
    const galeria = document.querySelector('.galeria');
    var l = 0;
    for(let i = 1; i <= 9; i++){

        let link = Object.values(links);
        const imagen = document.createElement('picture');
        imagen.classList.add('contenedor');
        imagen.innerHTML =
        `<a href=${link[l]}> <img class="imagen" loading="lazy" src="assets/sitios/${i}.avif" alt="imagen de la galeria">
        </a>`;
        

        galeria.appendChild(imagen);
        
        
        l = l + 1; 
    }
    
}//ajustar
