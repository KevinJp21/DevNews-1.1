
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';

// Read JSON data
const rawData = readFileSync('../Json/posts.json')
const data = JSON.parse(rawData);

// Create HTML files
data.posts.forEach((post) => {
    const postId = post.id;
    const htmlContent = `
    <!doctype html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/ab205d1cfa.js" crossorigin="anonymous"></script>
      <title>DevNews</title>
    </head>
    
    <body>
      <div class="container-fluid">
        <div class="row">
          <div class="container-topbar" id="topbar_id"></div>
        </div>
        <div class="row" id="row-id"></div>
        <div class="container-sm site-content">
          <main class="site-main" id="site-main"></main>
        </div>
      </div>
    
      <footer>
      <div class="footer">
          <p class="fs-5 m-0">&copy; Copyright 2023 - Todos los derechos reservados | KevinJp</p>
    </footer>
    
    <script type="module" src="/js/post${postId}.js"></script>
      <script type="module" src="/js/topbar.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous">
      </script>
    
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa"
        crossorigin="anonymous">
      </script>
    
    </body>
    
    </html>
    `;

      // Write HTML content to a new HTML file
  const htmlFilePath = `../articles/post_${postId}.html`;
  writeFileSync(htmlFilePath, htmlContent);

  console.log(`Created HTML file: ${htmlFilePath}`);
});

