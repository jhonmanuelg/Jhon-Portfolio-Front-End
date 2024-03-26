document.addEventListener('DOMContentLoaded', function() {
  // variables para enlaces y mensajes
  const phoneNumber = 5511958838782;
  const message = '¿Olá, muito obrigado pela oportunidade, estou muito animado que você venha falar comigo, me sinto muito feliz?';

  // Obtener elementos con la clase "whatsappButton" y agregar evento click
  const whatsappButtons = document.querySelectorAll('.whatsappButton');
  whatsappButtons.forEach(button => {
    button.addEventListener('click', function() {
      const whatsappURL = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
      window.open(whatsappURL, '_blank');
    });
  });

  // Función para abrir enlaces en otra ventana
  function openLink(event, link) {
    event.preventDefault();
    window.open(link, "_blank");
  }

});




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


// Encontrar o elemento com a classe 'eventCv' urriculum-Jhon.pdf
const eventCv = href="./CV_Jhon/Curriculum-Jhon.pdf"


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
