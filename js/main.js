import '../css/content.css'
import '../css/style.css'
import post from'../Json/posts.json'

const site_main = post.posts.map(site_main =>{
    return `
    <header class="entry-header" id="entry-header-id">
        <h1 class="display-1 title-header">${site_main.title}</h1>

        <div class="fs-2 subtitle">
            <p>${site_main.paragraph_1}</p>
        </div>

        <div class="entry-meta">
            <span class="fs-4">por</span>
            <span class="fs-4 author">${site_main.author_name}</span>
            <span class="fs-4 posted-on">${site_main.date}</span>
        </div>
    </header>

    <div class="img-box">
        <img class="img-fluid"
        src="${site_main.img_1}"
        alt="Lenguajes de programacion">
    </div>

    <div class="entry-text">
            <article class="post-1">
              <p class="fs-2">${site_main.paragraph_2}</p>
              <p class="fs-2">${site_main.paragraph_3}</p>
              <h2 class="subtitles display-3">${site_main.subitle_2}</h2>
              <p class="fs-2">${site_main.paragraph_4}</p>
              <p class="fs-2">${site_main.paragraph_5}</p>
              <img class="img-fluid" src="${site_main.img_2}" alt>
              <p class="fs-2">${site_main.paragraph_6}</p>
              <p class="fs-2">${site_main.paragraph_7}</p>
            </article>
          </div>
    `
})

document.querySelector('#site-main-id').innerHTML = site_main.join('')
