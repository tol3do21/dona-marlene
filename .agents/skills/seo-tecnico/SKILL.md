---
name: seo-tecnico
description: Directrices de SEO técnico, estructura semántica HTML5 y estándares de optimización técnica para indexación, rendimiento y redes sociales.
---

# SEO Técnico y Estructura Semántica

Este skill se activa cuando es necesario estructurar la página, inicializar documentos HTML, editar la sección `<head>` o realizar optimizaciones técnicas para buscadores y redes sociales.

## 1. Estructura y Semántica HTML5 (Obligatorio)
- **Estructura limpia:** Utilizar etiquetas semánticas nativas de HTML5 en lugar de `<div>` genéricos para definir el layout principal:
  - `<header>` para la cabecera/navegación.
  - `<main>` para el contenedor principal de contenido único.
  - `<section>` para agrupar contenido temático (cada una debe tener un encabezado claro).
  - `<article>` para contenido autocontenido y distribuible.
  - `<footer>` para el pie de página de contacto y derechos de autor.
- **Jerarquía de Encabezados:**
  - Debe haber **exactamente un (1) encabezado `<h1>`** por documento, el cual debe representar el título principal del sitio (ej. "Seiken Training Box | Centro de Entrenamiento Funcional").
  - Los encabezados secundarios deben seguir un orden jerárquico estricto (`<h2>` para secciones principales, `<h3>` para subsecciones dentro de un `<h2>`). No saltar niveles (ej. no pasar de `<h1>` a `<h3>` directamente).

## 2. Metadatos y Optimización del `<head>`
Todo documento HTML principal debe incluir en el `<head>` las siguientes etiquetas meta esenciales:
- **Viewport:** Para un diseño adaptativo responsive:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```
- **SEO Básico:**
  - `<title>` único y descriptivo, idealmente menor a 60 caracteres e incluyendo la palabra clave principal y marca.
  - `<meta name="description" content="..." />` único y atractivo, de entre 120 y 160 caracteres.
  - `<meta name="keywords" content="..." />` con términos relevantes locales (ej. "crossfit sucre, entrenamiento funcional bolivia, gimnasio sucre").
- **Open Graph (Redes Sociales):** Para que los enlaces se visualicen premium al compartirse en WhatsApp, Facebook, Instagram, etc.:
  - `<meta property="og:title" content="..." />`
  - `<meta property="og:description" content="..." />`
  - `<meta property="og:image" content="..." />` (URL absoluta a la imagen de portada de la web).
  - `<meta property="og:url" content="..." />`
  - `<meta property="og:type" content="website" />`

## 3. Accesibilidad e Imágenes
- **Atributo Alt Obligatorio:** Todas las etiquetas `<img>` deben incluir un atributo `alt` descriptivo que explique el contenido de la imagen de forma natural para lectores de pantalla y bots de búsqueda (ej. `alt="Atleta entrenando levantamiento olímpico en Seiken Box Sucre"`). Evitar textos genéricos como `alt="imagen"`.
- **Nombres de archivo descriptivos:** Las imágenes deben guardarse con nombres limpios y descriptivos en minúsculas y separados por guiones (ej. `seiken-box-instalaciones.jpg` en lugar de `IMG_58392.jpg`).

## 4. Rendimiento y Core Web Vitals (WPO)
- **Carga de imágenes:** Implementar el atributo `loading="lazy"` para todas las imágenes que estén fuera del primer scroll de pantalla (below the fold) para mejorar el tiempo de carga inicial.
- **Formatos modernos:** Utilizar formatos de imagen optimizados de última generación como **WebP** o **AVIF** para reducir el peso de los recursos sin perder calidad visual.
- **Scripts y CSS:** Cargar hojas de estilo CSS en el `<head>` y los scripts JS justo antes del cierre del `</body>` o con atributos `defer`/`async` para evitar bloquear el renderizado de la página.
