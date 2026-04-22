# DOCUMENTACIÓN DEL PORTAFOLIO WEB

**Autor:** Manuel Rincón  
**Proyecto:** Portafolio personal + página de mascotas  
**Tecnologías:** HTML5, CSS3 y JavaScript (Grid, Flexbox y Responsive Design)

---

## 1. Introducción

El presente proyecto consiste en el desarrollo de un portafolio web personal, cuyo objetivo es presentar información académica, habilidades técnicas, proyectos realizados y una sección adicional dedicada a las mascotas del autor.

Para el desarrollo de la interfaz se emplearon tecnologías web estándar como **HTML5** para la estructura del contenido, **CSS3** para el diseño visual y la maquetación, y **JavaScript** para la interacción del menú responsive.

Dentro de CSS se implementaron herramientas modernas como **Grid Layout**, **Flexbox** y **Media Queries**, lo que permitió construir un diseño organizado, adaptable y responsive.

---

## 2. Objetivo general

Diseñar y desarrollar un portafolio web personal que permita mostrar la información profesional y académica del desarrollador, integrando una interfaz visual limpia, organizada y adaptable a diferentes dispositivos.

---

## 3. Objetivos específicos

* Estructurar la página usando etiquetas semánticas de HTML5.
* Aplicar estilos modernos con CSS3.
* Implementar **CSS Grid** para la distribución estructural.
* Implementar **Flexbox** para la alineación interna de elementos.
* Implementar **Media Queries** para el diseño responsive.
* Separar la lógica del menú en un archivo JavaScript externo.
* Diseñar una interfaz adaptable a dispositivos móviles.
* Organizar una galería visual para la sección de mascotas.

---

## 4. Estructura del proyecto

```text
ManRin09.github.io/
│
├── index.html
├── mascotas.html
│
├── public/
│   └── img/
│
├── src/
│   ├── css/
│   │   ├── general.css
│   │   ├── header.css
│   │   ├── main.css
│   │   ├── aside.css
│   │   ├── habilidades.css
│   │   ├── fooder.css
│   │   └── mascotas.css
│   │
│   └── js/
│       └── header.js
```

---

## 5. Descripción técnica del HTML

### Header

La etiqueta `<header>` representa la parte superior del portafolio.

Incluye:

* barra de navegación
* saludo principal
* nombre del desarrollador

Ejemplo:

```html
<header>
    <nav>
        <button class="menu-toggle">☰</button>
        <ul id="nav-menu">
            ...
        </ul>
    </nav>
    <p>Hola, soy</p>
    <h1>Manuel Rincon</h1>
</header>
```

---

### Navegación responsive

Se agregó un botón hamburguesa para pantallas medianas y pequeñas.

Este botón se activa mediante JavaScript y permite mostrar u ocultar el menú.

```html
<button class="menu-toggle" id="menu-toggle">
    ☰
</button>
```

---

### Main

La etiqueta `<main>` contiene la estructura principal del portafolio.

Se divide en:

* contenido principal
* barra lateral (`aside`)

```html
<main>
    <div class="content">
        ...
    </div>
    <aside>
        ...
    </aside>
</main>
```

---

### Sections

Las secciones permiten dividir el contenido por categorías.

Ejemplo:

```html
<section id="inicio">
```

Se usaron para:

* proyectos
* acerca de mí
* habilidades

---

### Footer

Se empleó `<footer>` para la información de contacto.

```html
<footer id="contacto">
```

---

## 6. Implementación de CSS Grid

CSS Grid fue utilizado para la **estructura principal del diseño**.

Ejemplo:

```css
main {
    display: grid;
    grid-template-columns: 3fr 1fr;
}
```

Esto divide la pantalla en:

```text
contenido principal | aside
```

También se usó en la galería de mascotas:

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

---

## 7. Implementación de Flexbox

Flexbox fue usado para organizar elementos internos.

Ejemplo:

```css
article {
    display: flex;
    flex-direction: column;
}
```

Esto ordena:

* título
* descripción
* imagen
* texto

También se implementó en:

* header
* navegación
* tarjetas
* footer

---

## 8. Responsive Design

Se implementó diseño responsive usando `@media`.

```css
@media (max-width: 991.98px)
```

Se usó la medida estándar de **Bootstrap lg (992px)**.

Esto permite que el sitio se adapte correctamente en:

* celulares
* tablets
* portátiles

---

## 9. JavaScript

Se creó un archivo externo:

```text
src/js/header.js
```

Este archivo controla la apertura y cierre del menú responsive.

Ejemplo:

```javascript
const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggleBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
});
```

---

## 10. Actualización reciente

En la versión actual se implementaron las siguientes mejoras:

* menú responsive tipo hamburguesa
* uso de medidas Bootstrap
* separación del JavaScript en archivo externo
* mejor organización del código
* documentación interna del proyecto

---

## 11. Conclusión

El proyecto permitió aplicar conocimientos en desarrollo web front-end, especialmente en la estructuración semántica con HTML5 y la maquetación moderna con CSS3.

La implementación de **Grid, Flexbox, Media Queries y JavaScript** mejoró considerablemente la organización visual, la adaptabilidad y la experiencia del usuario.

---

## 👤 Autor

**Manuel Rincón**  
Desarrollador Fullstack en formación  

