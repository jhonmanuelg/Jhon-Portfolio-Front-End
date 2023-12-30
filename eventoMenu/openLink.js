
// función de WhatsApp
// Obtener elementos con la clase "whatsappButton"
var whatsappButtons = document.getElementsByClassName('whatsappButton');

//  clase "whatsappButton"
for (var i = 0; i < whatsappButtons.length; i++) {
  // Asignar un controlador de eventos botón
  whatsappButtons[i].addEventListener('click', function () {
    // número de teléfono al que deseas enviar el mensaje
    var phoneNumber = '5511958838782';

    // el mensaje predeterminado
    var message = 'Olá, sou Jhon MAnuel Gil muito obrigado por entrar em contato comigo.';

    // Construir la URL de WhatsApp
    var whatsappURL = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);

    // Abrir WhatsApp en una nueva ventana o pestaña
    window.open(whatsappURL, '_blank');
  });
}

// link para abrir las paginas en otra ventana redes sociales
const githubURL = "https://github.com/jhonmanuelg";
const twitterURL = "https://twitter.com/JhonManuelGil2";
const discordURL = "https://discord.com/users/835269507663659048";
const linkedinURL = "https://www.linkedin.com/in/jhon-manuel-gil/";

// link para abrir los proyectos en otra ventana
const netflixUrl = "https://jhonmanuelg.github.io/Netflix-Landing-Page-Website/";
const netflixGit = "https://github.com/jhonmanuelg/Netflix-Landing-Page-Website";

const crudUrl = "https://jhonmanuelg.github.io/Operaciones_CRUD_JavaScript/";
const crudGit = "https://github.com/jhonmanuelg/Operaciones_CRUD_JavaScript";

const pageUrl = "https://jhonmanuelg.github.io/Landing_Page_using_Bootstrap_5/";
const pageGit = "https://github.com/jhonmanuelg/Landing_Page_using_Bootstrap_5";


// evento click redes sociales
function openLink(event, link) {
  event.preventDefault();
  // Abrir enlace en una nueva ventana 
  window.open(link, "_blank");
}

//function in JavaScript to smoothly navigate between sections of

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

