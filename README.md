![logo](images/Logo-jhon.webp)

# ❤️ Portfólio de desenvolvedores front-end

## Bem-vindo 😍😍😍

- Minha cativante projeto de portfólio! Este site inovador, desenvolvido em HTML, CSS3 e JavaScript, é uma janela para minha paixão pelo desenvolvimento Front-End. Projetado especificamente para este evento, meu portfólio não só reflete minha experiência e habilidades técnicas, mas também demonstra minha criatividade e dedicação ao mundo do desenvolvimento web. Explore as diversas seções para ter uma visão abrangente da minha formação acadêmica, dos projetos notáveis ​​e das tecnologias de ponta que domino. Estou animado para compartilhar minha jornada e ansioso para contribuir com minha experiência para sua equipe. Obrigado pela visita e espero que você ache meu trabalho inspirador!

## Autores 🥰🥰🥰

👨‍🎓 Jhon Manuel Gil

  - [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://jhonmanuelg.github.io/Jhon-Portfolio-Front-End/)

## 🚀 Sobre mim

- Apaixonado por tecnologia e com mais de 2 anos de experiência em telemarketing. Esta carreira me proporcionou habilidades valiosas como comunicação eficaz, resolução de conflitos, trabalho em equipe, organização e gerenciamento de projetos, além de adaptabilidade para alcançar resultados sólidos. Essas habilidades são essenciais para aproveitar as oportunidades de desenvolvimento durante um potencial período de estágio.

---

## Outras seções comuns em perfis do GitHub

- 👩‍💻 Trabalho atualmente meu aprezaje cada dia

- 🧠 Estou aprendendo cada dia mas

## 🔗 Links

📫 Como entrar em contato comigo:



[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jhon-manuel-gil/)

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/JhonManuelGil2)

[![whatsapp](images/what.png)](https://api.whatsapp.com/send/?phone=5511958838782&text&type=phone_number&app_absent=0)

### Visão do projeto em uma tela diferente com @madia

![img-tipo-tela](images/img-tipo-tela.png)

### Implementação

Para fazer o deploy desse projeto rode

```bash
HTML
<a onclick="contactarPorWhatsApp()">
    <i class="fab fa-whatsapp"></i>
</a>

 // función de WhatsApp
function contactarPorWhatsApp() {
    // Número de teléfono en el formato internacional
    var numero = "5511 + numero";

    // Crear el enlace de WhatsApp
    var enlaceWhatsApp = "https://wa.me/" + numero;

    // Abrir enlace en una nueva ventana o pestaña
    window.open(enlaceWhatsApp, "_blank");
  }
```

```bash
  // para abrir las paginas en otra ventana redes sociales Exemplo
<a href="https://www.linkedin.com/in/jhon-manuel-gil/" onclick="openLinkevent, linkedinURL)">
    <i class="fab fa-linkedin"></i>
</a>

// evento click redes sociales
function openLink(event, link) {
  event.preventDefault();
  // Abrir enlace en una nueva ventana
  window.open(link, "_blank");
}
```

```bash
 HTML Exemplo
<li><a href="#home" onclick="scrollToSection('home')">Exemplo</a></li>


  //Função em JavaScript para navegar suavemente entre seções

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

```
