import '../css/content.css'
import '../css/style.css'
import post from '../Json/posts.json'

const entry_header = post.content_title.map(header=>{
    return `
    <h2 class="subtitles fs-3">${header.h2}</h2>
    <h1 class="display-1 title-header">${header.h1}</h1>
    `
})



const article_link = post.content.map(article_link =>{
    return `
   
            <div class="article-post">
                <div class="img-article">
                    <img class=" img-fluid" width="200" height="200" src="${article_link.img_1}">
                </div>
    
                <div class="entry-container">
                    <a class="fs-2 title-article" href="${article_link.link_post_1}">${article_link.tittle_post_1}</a>
                    <div class="entry-meta">
                        <span>por</span>
                        <span class=" author">${article_link.author_name}</span>
                        <span class="posted-on">
                            ${article_link.date}
                        </span>
                    </div>
                </div>
            </div>   
    `
})

document.querySelector('#entry_header').innerHTML = entry_header.join('')+article_link.join('');