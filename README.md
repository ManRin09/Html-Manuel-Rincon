De una bro 🔥📄
Ahora sí vamos con la **documentación profesional** para que lo puedas entregar y también sustentar si te preguntan.

Te la voy a dejar **lista para copiar en Word o PDF**, con lenguaje formal pero humano.

---

# DOCUMENTACIÓN DEL PORTAFOLIO WEB

**Autor:** Manuel Rincón
**Proyecto:** Portafolio personal + página de mascotas
**Tecnologías:** HTML5 y CSS3 (Grid y Flexbox)

---

## 1. Introducción

El presente proyecto consiste en el desarrollo de un portafolio web personal, cuyo objetivo es presentar información académica, habilidades técnicas, proyectos realizados y una sección adicional dedicada a las mascotas del autor.

Para el desarrollo de la interfaz se emplearon tecnologías web estándar como **HTML5** para la estructura del contenido y **CSS3** para el diseño visual y la maquetación.
Dentro de CSS se implementaron herramientas modernas como **Grid Layout** y **Flexbox**, lo que permitió construir un diseño organizado, adaptable y responsive.

---

## 2. Objetivo general

Diseñar y desarrollar un portafolio web personal que permita mostrar la información profesional y académica del desarrollador, integrando una interfaz visual limpia, organizada y adaptable a diferentes dispositivos.

---

## 3. Objetivos específicos

* Estructurar la página usando etiquetas semánticas de HTML5.
* Aplicar estilos modernos con CSS3.
* Implementar **CSS Grid** para la distribución estructural.
* Implementar **Flexbox** para la alineación interna de elementos.
* Diseñar una interfaz adaptable a dispositivos móviles.
* Organizar una galería visual para la sección de mascotas.

---

## 4. Estructura del proyecto

```text
Html-Manuel-Rincon/
│
├── index.html
├── mascotas.html
│
├── public/
│   └── img/
│
├── src/
│   └── css/
│       ├── general.css
│       ├── header.css
│       ├── main.css
│       ├── aside.css
│       ├── habilidades.css
│       ├── fooder.css
│       └── mascotas.css
```

---

## 5. Descripción técnica del HTML

### Header

La etiqueta `<header>` se utiliza para mostrar la parte superior de la página.

Incluye:

* barra de navegación
* saludo principal
* nombre del desarrollador

Ejemplo:

```html
<header>
    <nav>
        ...
    </nav>
    <p>Hola, soy</p>
    <h1>Manuel Rincon</h1>
</header>
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

Esto permite que las tarjetas se acomoden automáticamente.

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
@media (max-width: 768px)
```

Esto permite que el sitio se adapte correctamente en:

* celulares
* tablets
* portátiles

---

## 9. Conclusión

El proyecto permitió aplicar conocimientos en desarrollo web front-end, especialmente en la estructuración semántica con HTML5 y la maquetación moderna con CSS3.

La implementación de **Grid y Flexbox** mejoró considerablemente la organización visual y la adaptabilidad del sitio.

---

Bro, esto ya está **nivel entrega seria para SENA / Riwi** 🔥
Si quieres, el siguiente paso te ayudo a hacer la **documentación comentada dentro del código** línea por línea.


👤 Autor
Manuel Rincón

Desarrollador Fullstack en formación.
Correo: mandarin030290@gmail.com
