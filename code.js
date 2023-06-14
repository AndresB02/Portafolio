let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

//funcion para ocultar menu cuando se escoge una opción
function seleccionar() {
    document.getElementById("nav").classList ="";
    menuVisible = true;
}

