

  /*---------------------POST 1------------------------*/
const post1 = [
    {
      id: 1,
      author_name: "Kevin Julio Pineda",
      date: "03 de agosto de 2023",
      title: "Los lenguajes de programación más demandados en 2023",
      paragraph_1:
        "Los lenguajes de programación sirven para crear apps, páginas web, procesar datos y mucho más. De ahí que los haya más populares o menos en el ámbito científico o empresarial.",
      img_1:
        "https://appmarketingnews.io/wp-content/uploads/2023/03/Captura-de-Pantalla-2023-03-21-a-las-14.25.02.jpg",
      paragraph_2:
        "Los lenguajes de programación son la base para escribir instrucciones, órdenes y algoritmos. Lo que conocemos como código. Y con ese código hacemos funcionar máquinas físicas, dispositivos electrónicos, programas, aplicaciones y demás software. Vamos, que necesitamos lenguajes de programación para crear código y necesitamos código para comunicarnos con máquinas, ordenadores y aparatos en general.",
      paragraph_3:
        "Sea como fuere, resulta humanamente imposible conocer todos los lenguajes de programación. Se pueden dominar varios de ellos, pero para lograr ese dominio es necesario aprenderlos. ¿Por dónde empezar? ¿Qué lenguajes de programación deberías conocer si quieres ser programador, experto en análisis de datos o desarrollador web? Te damos la respuesta en tres rankings distintos que se complementan entre sí.",
      subitle_2: "Índice TIOBE de lenguajes de programación",
      paragraph_4:
        "TIOBE. Es una empresa holandesa dedicada al análisis de código. Según ellos, cada día analizan más de 1.000 millones de líneas de código de desarrollos públicos y privados de empresas de todo tipo. Y además de eso son conocidos por confeccionar un índice con los lenguajes de programación más populares.",
      paragraph_5:
        "El índice se suele publicar en julio, buen momento para aprender lenguajes de programación nuevos. ¿Cómo realizan este análisis? A partir de las búsquedas detectadas en Google, Bing, Yahoo!, Wikipedia, Amazon, YouTube y Baidu. Con los resultados estipulan la popularidad de cada lenguaje y ofrecen un ranking de popularidad. Es decir, qué lenguajes buscan los programadores y las empresas.",
      img_2:
        "https://p7.itc.cn/q_70/images03/20230107/f06bb6de36cd416288701b024e211389.png",
      paragraph_6:
        "El índice TIOBE también incluye otros lenguajes que no están en el top 10, pero que tienen un interés relevante o una tendencia al alza. Algunos ejemplos son Rust, que ocupa el puesto 17 y es el lenguaje más rápido en crecer, COBOL, que vuelve al top 20 después de mucho tiempo, y Julia, que se acerca peligrosamente al top 20.",
      paragraph_7:
        "El índice TIOBE es una herramienta interesante para conocer el panorama actual de los lenguajes de programación y sus perspectivas de futuro. Sin embargo, hay que tener en cuenta que el índice no mide la calidad o la cantidad de código escrito en cada lenguaje, sino su popularidad entre los desarrolladores y las fuentes disponibles. Por lo tanto, no se debe tomar el índice como una verdad absoluta, sino como una referencia orientativa.",
      h3: "Contenido relacionado:",
      link_article: "post_2.html",
      link_title: "Los mejores framework frontend de 2023 para desarollo web.",
    },
  ],

  post_1 = {article1: post1}

  
  /*---------------------POST 1------------------------*/
  const site_main =post_1.article1.map((e) => `
    <header class="entry-header" id="entry-header-id">
        <h1 class="display-1 title-header">${e.title}</h1>

        <div class="fs-2 subtitle">
            <p>${e.paragraph_1}</p>
        </div>

        <div class="entry-meta">
            <span class="fs-4">por</span>
            <span class="fs-4 author">${e.author_name}</span>
            <span class="fs-4 posted-on">${e.date}</span>
        </div>
    </header>

    <div class="img-box">
        <img class="img-fluid"
        src="${e.img_1}"
        alt="Lenguajes de programacion">
    </div>

    <div class="entry-text">
            <article class="post-1">
              <p class="fs-2">${e.paragraph_2}</p>
              <p class="fs-2">${e.paragraph_3}</p>
              <h2 class="subtitles display-3">${e.subitle_2}</h2>
              <p class="fs-2">${e.paragraph_4}</p>
              <p class="fs-2">${e.paragraph_5}</p>
              <img class="img-fluid" src="${e.img_2}" alt>
              <p class="fs-2">${e.paragraph_6}</p>
              <p class="fs-2">${e.paragraph_7}</p>
            </article>
          </div>

    <div class="link_page me-auto">
        <h3 class="fs-1 contenido_rel">${e.h3}</h3>
        <div class="container-links ms-5">
            <a class="fs-4 links" href="${e.link_article}">${e.link_title}</a>
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
  );


document.querySelector("#site-main").innerHTML = site_main.join("")