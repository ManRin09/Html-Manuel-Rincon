/*
    =========================================
    ARCHIVO: header.js
    =========================================
    FUNCIÓN:
    Controla la apertura y cierre
    del menú responsive
*/

/*
    Busca el botón hamburguesa
*/
const toggleBtn = document.getElementById("menu-toggle");

/*
    Busca la lista del menú
*/
const menu = document.getElementById("nav-menu");

/*
    EVENTO CLICK
    Cuando el usuario hace click
    se agrega o elimina la clase active
*/
toggleBtn.addEventListener("click", function () {

    /*
        Toggle:
        si existe la quita
        si no existe la agrega
    */
    menu.classList.toggle("active");
});