import '../css/content.css'
import '../css/style.css'
import post from '../Json/posts.json'


const site_main = post.content.map(site_main =>{
    return `
   
            <div class="article-post">
                <div class="img-article">
                    <img class=" img-fluid" width="200" height="200" src="${site_main.img_1}">
                </div>
    
                <div class="entry-container">
                    <a class="fs-2 title-article" href="${site_main.link_post_1}">${site_main.tittle_post_1}</a>
                    <div class="entry-meta">
                        <span>por</span>
                        <span class=" author">${site_main.author_name}</span>
                        <span class="posted-on">
                            ${site_main.date}
                        </span>
                    </div>
                </div>
            </div>   
    `
})


document.querySelector('#articles_container').innerHTML = site_main.join('')