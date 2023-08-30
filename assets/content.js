(function () {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) n(a);
    new MutationObserver((a) => {
      for (const o of a)
        if (o.type === "childList")
          for (const r of o.addedNodes)
            r.tagName === "LINK" && r.rel === "modulepreload" && n(r);
    }).observe(document, { childList: !0, subtree: !0 });
    function l(a) {
      const o = {};
      return (
        a.integrity && (o.integrity = a.integrity),
        a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials"
          ? (o.credentials = "include")
          : a.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
        o
      );
    }
    function n(a) {
      if (a.ep) return;
      a.ep = !0;
      const o = l(a);
      fetch(a.href, o);
    }
  })();

    /*---------------------Content------------------------*/
  c = [
       { 
         h2: "Contenido", 
         h1: "Publicaciones recientes" 
        }
    ],

     /*---------------------publicaciones recientes-----------------------*/
  u = [
    {
      id: "1",
      img_1:
        "https://appmarketingnews.io/wp-content/uploads/2023/03/Captura-de-Pantalla-2023-03-21-a-las-14.25.02.jpg",
      link_post_1: "index.html",
      tittle_post_1: "Los lenguajes de programación más demandadosen 2023",
      author_name: "Kevin Julio Pineda",
      date: "03 de agosto de 2023",
    },
    {
      id: "2",
      img_1:
        "https://static.wixstatic.com/media/96edd2_cb4e4247d69b497bab9ddf024913b501~mv2.jpg/v1/fit/w_900%2Ch_505%2Cal_c%2Cq_80/file.jpg",
      link_post_1: "/post_2.html",
      tittle_post_1:
        "Los mejores frameworks frontend de 2023 para desarrollo web",
      author_name: "Kevin Julio Pineda",
      date: "03 de agosto de 2023",
    },
  ]
    