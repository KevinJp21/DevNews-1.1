import '../css/content.css'
import '../css/style.css'
import topbar from '../Json/topbar.json'



const navbar = topbar.data.map(topbar => {
  return `
    <div class="title">
    <a class="display-1" href="Index.html">${topbar.logo}</a>
    </div>
    `
})

document.querySelector('#topbar_id').innerHTML = navbar.join('')

const navbar_elements = topbar.data.map(topbar_elements => {
  return `
  <div class="topbar-elements">
    <div class="enlaces">
        <a class="fs-1" href="Index.html">${topbar_elements['link-1']}</a>
    </div>

    <div class="enlaces">
        <a class="fs-1" href="Content.html">${topbar_elements['link-2']}</a>
    </div>

  </div>

  <div class="btn-light-mode">
    <li><i id="DarkModeOn" class="fa-solid fa-moon fa-2xl"></i></li>
    <li><i  id="LightModeOn" class="fa-solid fa-sun fa-2xl"></i></li>
  </div>
    `
})

document.querySelector('#row-id').innerHTML = navbar_elements.join('')


// Script para activar y desactivar el modo oscuro
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