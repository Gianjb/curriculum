document.getElementById("barra").addEventListener("click", mostrar_menu);
document.getElementById("back-menu").addEventListener("click", cerrar_menu);

document.getElementById("menu-contacto").addEventListener("click", cerrar_menu);
document.getElementById("menu-informacion").addEventListener("click", cerrar_menu);
document.getElementById("menu-experiencia").addEventListener("click", cerrar_menu);
document.getElementById("menu-educacion").addEventListener("click", cerrar_menu);
document.getElementById("menu-habilidades").addEventListener("click", cerrar_menu);

menu = document.getElementById("div-menu");
background_menu = document.getElementById("back-menu");
barra = document.getElementById("barra");

function mostrar_menu() {
    menu.style.left = "0px";
    background_menu.style.display = "block";
}

function cerrar_menu() {
    menu.style.left = "-250px";
    background_menu.style.display = "none";
}