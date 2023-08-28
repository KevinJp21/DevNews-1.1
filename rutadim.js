// vite.config.js
export default {
    // ... otras configuraciones ...
  
    // Configuración de rutas dinámicas
    routes: [
      {
        path: '/articulo/:id', // Define el parámetro dinámico ':id'
        component: '/src/pages/Articulo.vue' // Ruta al componente que mostrará el artículo
      }
    ]
  };