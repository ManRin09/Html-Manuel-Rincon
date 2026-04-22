/*
    =========================================
    ARCHIVO: scripts.js
    =========================================
    FUNCIÓN:
    Controla únicamente el menú hamburguesa
*/

/* Botón hamburguesa */
const toggleBtn = document.getElementById("menu-toggle");

/* Lista del menú */
const menu = document.getElementById("nav-menu");

/*
    Verifica que existan
*/
if (toggleBtn && menu) {

    /*
        Abrir / cerrar menú
    */
    toggleBtn.addEventListener("click", function () {

        /*
            Activa clase responsive
        */
        menu.classList.toggle("active");
    });
}