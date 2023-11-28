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


  //libreria AOS EFECTO
  AOS.init({
    duration: 1000,
    animatedClassName: 'aos-animate'
});



