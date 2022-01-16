function smoothScroll() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    const top = section.offsetTop;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  linksInternos.forEach((element) => {
    element.addEventListener('click', scrollToSection);
  });
}
smoothScroll();

const handleMenu = () => {
  document.getElementById('check').checked = false;
};

const teste = () => {
  const langMenu = document.querySelector('.lang-menu ul');
  langMenu.classList.toggle('activeFlex');
};

const lang = document.querySelector('.selected-lang');
lang.addEventListener('click', teste);
