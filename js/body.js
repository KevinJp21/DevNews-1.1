import '../css/content.css'
import '../css/style.css'
import topbar from '../Json/topbar.json'
import footer from '../Json/footer.json'


/*TOPBAR*/
const navbar = topbar.data.map(topbar => {
  return `
    <div class="title">
    <a class="display-1" href="${topbar.link_logo}">${topbar.logo}</a>
    </div>
    `
})

document.querySelector('#topbar_id').innerHTML = navbar.join('')

const navbar_elements = topbar.data.map(topbar_elements => {
  return `
  <div class="topbar-elements">
    <div class="enlaces">
        <a class="fs-1" href="${topbar_elements.link_1}">${topbar_elements['title_link-1']}</a>
    </div>

    <div class="enlaces">
        <a class="fs-1" href="${topbar_elements.link_2}">${topbar_elements['title_link-2']}</a>
    </div>

  </div>

  <div class="btn-light-mode">
    <li><i id="DarkModeOn" class="fa-solid fa-moon fa-2xl"></i></li>
    <li><i  id="LightModeOn" class="fa-solid fa-sun fa-2xl"></i></li>
  </div>
    `
})

document.querySelector('#row-id').innerHTML = navbar_elements.join('')

/*fOOTER*/
const body = footer.footer.map(footer =>{
  return `
      <p class="fs-5 m-0">${footer.footer1}</p>
      <a href="https://github.com/KevinJp21?tab=repositories"><i class="fa-brands fa-github"></i></a>
  `
})

document.querySelector('.footer').innerHTML = body.join('')


/*Activar o desactivar el modo oscuro*/

const DarkModeOn = document.getElementById('DarkModeOn');
DarkModeOn.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('modo', 'oscuro');
});

const LightModeOn = document.getElementById('LightModeOn');
LightModeOn.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('modo', 'claro');
});

// Verifica el modo al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const modoGuardado = localStorage.getItem('modo');
  if (modoGuardado === 'oscuro') {
    document.body.classList.add('dark-mode');
  }
});