import '../css/style.css'
import post from '../Json/posts.json'

const site_main = post.post2.map(site_main =>{
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
              <h2 class="subtitles display-3">${site_main['h2-1']}</h2>
              <p class="fs-2">${site_main.paragraph_2}</p>
              <p class="fs-2">${site_main.paragraph_3}</p>
              <p class="fs-2">${site_main.paragraph_4}</p>
              <p class="fs-2">${site_main.paragraph_5}</p>
              <p class="fs-2">${site_main.paragraph_6}</p>
              <h2 class="subtitles">${site_main['h2-2']}</h2>
              
              <h3 class="fs-1 subtitles2">${site_main['h3-1']}</h3>
              <img class="img-fluid"src="${site_main['img-react']}"alt="React Logo">
              <p class="fs-2">${site_main.paragraph_react_1}</p>
              <p class="fs-2">${site_main.paragraph_react_2}</p>
              <p class="fs-2">${site_main.paragraph_react_3}</p>

              <h3 class="fs-1 subtitles2">${site_main['h3-2']}</h3>
              <img class="img-fluid"src="${site_main['img-angular']}"alt="Jquery Logo">
              <p class="fs-2">${site_main.paragraph_angular_1}</p>
              <p class="fs-2">${site_main.paragraph_angular_2}</p>
              <p class="fs-2">${site_main.paragraph_angular_3}</p>
              <p class="fs-2">${site_main.paragraph_angular_4}</p>

              <h3 class="fs-1 subtitles2">${site_main['h3-3']}</h3>
              <img class="img-fluid"src="${site_main['img-jquery']}"alt="Jquery Logo">
              <p class="fs-2">${site_main.paragraph_jquery_1}</p>
              <p class="fs-2">${site_main.paragraph_jquery_2}</p>
              <p class="fs-2">${site_main.paragraph_jquery_3}</p>
              <p class="fs-2">${site_main.paragraph_jquery_4}</p>

              <h3 class="fs-1 subtitles2">${site_main['h3-4']}</h3>
              <img class="img-fluid"src="${site_main['img-vuejs']}"alt="Jquery Logo">
              <p class="fs-2">${site_main.paragraph_vuejs_1}</p>
              <p class="fs-2">${site_main.paragraph_vuejs_2}</p>
              <p class="fs-2">${site_main.paragraph_vuejs_3}</p>
              
              <h2 class="subtitles display-3">${site_main['h2-3']}</h2>
              <h3 class="fs-1 subtitles2">${site_main['h3-5']}</h3>
              <p class="fs-2">${site_main.paragraph_quest_1}</p>

              <h3 class="fs-1 subtitles2">${site_main['h3-6']}</h3>
              <p class="fs-2">${site_main.paragraph_quest_2}</p>

              <h3 class="fs-1 subtitles2">${site_main['h3-7']}</h3>
              <p class="fs-2">${site_main.paragraph_quest_3}</p>

              <h2 class="subtitles display-3">${site_main['h2-4']}</h2>
              <p class="fs-2">${site_main.paragraph_concl_1}</p>
              <p class="fs-2">${site_main.paragraph_concl_2}</p>
              <p class="fs-2">${site_main.paragraph_concl_3}</p>
            </article>
          </div>

    <div class="link_page me-auto">
        <h3 class="fs-1 contenido_rel">${site_main['h3-8']}</h3>
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