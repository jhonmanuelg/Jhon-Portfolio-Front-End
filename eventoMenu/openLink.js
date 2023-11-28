
// función de WhatsApp
function contactarPorWhatsApp() {
    // Número de teléfono en el formato internacional
    var numero = "5511958838782"; 
  
    // Crear el enlace de WhatsApp
    var enlaceWhatsApp = "https://wa.me/" + numero;
  
    // Abrir enlace en una nueva ventana o pestaña
    window.open(enlaceWhatsApp, "_blank");
  }



// link para abrir las paginas en otra ventana redes sociales
const githubURL = "https://github.com/jhonmanuelg";
const twitterURL = "https://twitter.com/JhonManuelGil2";
const  discordURL = "https://discord.com/users/835269507663659048";
const linkedinURL = "https://www.linkedin.com/in/jhon-manuel-gil/";


// evento click redes sociales
function openLink(event, link) {
  event.preventDefault();
  // Abrir enlace en una nueva ventana 
  window.open(link, "_blank");
}

// link para abrir los proyectos en otra ventana
const netflixUrl = "https://jhonmanuelg.github.io/Netflix-Landing-Page-Website/";
const netflixGit = "https://github.com/jhonmanuelg/Netflix-Landing-Page-Website";

const crudUrl = "https://jhonmanuelg.github.io/Operaciones_CRUD_JavaScript/"; 
const crudGit = "https://github.com/jhonmanuelg/Operaciones_CRUD_JavaScript";

const pageUrl = "https://jhonmanuelg.github.io/Landing_Page_using_Bootstrap_5/";
const pageGit = "https://github.com/jhonmanuelg/Landing_Page_using_Bootstrap_5";

// evento click proyectos
function projectLink(event, link) {
    event.preventDefault();
    // Abrir enlace en una nueva ventana 
    window.open(link, "_blank");
} 
