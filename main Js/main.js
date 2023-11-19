let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// función de WhatsApp
function contactarPorWhatsApp() {
    // Número de teléfono en el formato internacional
    var numero = '5511958838782';  // Cambia esto al número deseado

    // Crear el enlace de WhatsApp
    var enlaceWhatsApp = 'https://wa.me/' + numero;

    // Abrir enlace en una nueva ventana o pestaña
    window.open(enlaceWhatsApp, '_blank');
}
