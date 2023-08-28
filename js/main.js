import '../css/content.css'
import '../css/style.css'
import post from '../Json/posts.json'



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

    <div class="link_page me-auto">
        <h3 class="fs-1 contenido_rel">${site_main.h3}</h3>
        <div class="container-links ms-5">
            <a class="fs-4 links" href="${site_main.link_article}">${site_main.link_title}</a>
        </div>
    </div>

    <div class="form-container">
        <div class="form">
            <div class="add-comment">
                <h4 class="display-3 subtitles2">Agrega un comentario</h4>
                <div class="comment-textarea">
                    <textarea name="Comentario" placeholder="Comentario*"></textarea>
                </div>
                <div class="comment-name">
                    <input type="text" name="firstname" placeholder="Nombre*">
                </div>
                      
                <div class="comment-email">
                    <input type="email" name="email" placeholder="Email*">
                </div>
                    <button class="ms-auto mb-5 fs-2 submit-btn">Enviar</button>
                </div>
        </div>
    </div>
    `
})
document.querySelector('#site-main').innerHTML = site_main.join('')