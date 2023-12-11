// Utiliza JavaScript para cargar diferidamente estilo después de que la página haya cargado los elemento para el CEO
function cargarEstiloDiferido() {
  const enlaceEstilo = document.createElement('link');
  enlaceEstilo.rel = 'eventoMenu/menu.js';
  enlaceEstilo.href = 'css/style.css';
  document.head.appendChild(enlaceEstilo);
}

// Llama a la función después de que la página ha cargado
document.addEventListener('DOMContentLoaded', function() {
  cargarEstiloDiferido('eventoMenu/menu.js', 'css/style.css');
});



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




