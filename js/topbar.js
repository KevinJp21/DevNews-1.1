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
    `
})

document.querySelector('#topbar-elements-id').innerHTML = navbar_elements.join('')