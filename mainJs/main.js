function ejemploAsync() {
  return new Promise((resolve, reject) => {
      // Simulación de operación asincrónica
      setTimeout(() => {
          // Éxito
          resolve("¡Operación completada!");

          // O error
          // reject("Hubo un error");
      }, 1000);
  });
}

// Uso de la Promesa


// función menu responsibo

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};


// función de WhatsApp
function contactarPorWhatsApp() {
  // Número de teléfono en el formato internacional
  var numero = "5511958838782"; // Cambia esto al número deseado

  // Crear el enlace de WhatsApp
  var enlaceWhatsApp = "https://wa.me/" + numero;

  // Abrir enlace en una nueva ventana o pestaña
  window.open(enlaceWhatsApp, "_blank");
}

// link para abrir las pagina en otra ventana resdes social

const githubURL = "https://github.com/jhonmanuelg";
const twitterURL = "https://twitter.com/JhonManuelGil2";
const linkedinURL = "https://www.linkedin.com/in/jhon-manuel-gil/";

// evento clink redes social
function openLink(event, link) {
  event.preventDefault();
  // Abrir enlace en una nueva ventana 
  window.open(link, "_blank");
}

// link para abrir los projeto en otra ventana

const NetflixUrl = "https://jhonmanuelg.github.io/Netflix-Landing-Page-Website/";
const NetfliGit = "https://github.com/jhonmanuelg/Netflix-Landing-Page-Website";

const crudUrl = "https://jhonmanuelg.github.io/Operaciones_CRUD_JavaScript/"; 
const CrudGit = "https://github.com/jhonmanuelg/Operaciones_CRUD_JavaScript";

const PageUrl = "https://jhonmanuelg.github.io/Landing_Page_using_Bootstrap_5/";
const PageGit = "https://github.com/jhonmanuelg/Landing_Page_using_Bootstrap_5";

// evento clink projeto
function projetLink(event, link) {
    event.preventDefault();
    // Abrir enlace en una nueva ventana 
    window.open(link, "_blank");
  }

   
  
  
 // Usando el ejemploAsync con .then y .catch
ejemploAsync()
.then(result => {
   console.log(result);
})
.catch(error => {
   console.error(error);
});

  
  