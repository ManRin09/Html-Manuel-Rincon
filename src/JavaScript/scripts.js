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
/*Alert, mensaje de bienvenida*/
Swal.fire({
    title: "¡Hola! 👋",
    text: "Bienvenido a mi portafolio. ¡Espero que disfrutes la visita!",
    icon: "success",
    confirmButtonText: "¡Gracias!",
    confirmButtonColor: "#8F16D4",
    showClass: {
    popup: `animate__animated animate__fadeInUp animate__faster`
    },
    hideClass: {
    popup: `animate__animated animate__fadeOutDown animate__faster`
    }
});