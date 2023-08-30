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

  /*---------------------TOPBAR------------------------*/
const g = [
    {
      id: 1,
      logo: "DevNews",
      link_logo: "index.html",
      "title_link-1": "Inicio",
      "title_link-2": "Contenido",
      link_1: "index.html",
      link_2: "content.html",
    },
  ],

  i = { data: g },

   /*---------------------FOOTER-----------------------*/
   f = [
    {
      footer1:
        "&copy; Copyright 2023 - Todos los derechos reservados | KevinJp",
    },
  ],
  h = { footer: f },
  

  b = i.data.map(
    (e) => `
    <div class="title">
    <a class="display-1" href="${e.link_logo}">${e.logo}</a>
    </div>
    `
  );

document.querySelector("#topbar_id").innerHTML = b.join("");

const y = i.data.map(
  (e) => `
  <div class="topbar-elements">
    <div class="enlaces">
        <a class="fs-1" href="${e.link_1}">${e["title_link-1"]}</a>
    </div>

    <div class="enlaces">
        <a class="fs-1" href="${e.link_2}">${e["title_link-2"]}</a>
    </div>

  </div>

  <div class="btn-light-mode">
    <li><i id="DarkModeOn" class="fa-solid fa-moon fa-2xl"></i></li>
    <li><i  id="LightModeOn" class="fa-solid fa-sun fa-2xl"></i></li>
  </div>
    `
);
document.querySelector("#row-id").innerHTML = y.join("");

const v = h.footer.map(
  (e) => `
      <p class="fs-5 m-0">${e.footer1}</p>
  `
);

document.querySelector(".footer").innerHTML = v.join("");



const _ = document.getElementById("DarkModeOn");
_.addEventListener("click", () => {
  document.body.classList.add("dark-mode"),
    localStorage.setItem("modo", "oscuro");
});
const q = document.getElementById("LightModeOn");
q.addEventListener("click", () => {
  document.body.classList.remove("dark-mode"),
    localStorage.setItem("modo", "claro");
});
document.addEventListener("DOMContentLoaded", () => {
  localStorage.getItem("modo") === "oscuro" &&
    document.body.classList.add("dark-mode");
});