//Funcion para el submenú que mostrará las opciones de generación a elegir
var subMenuSedes = document.getElementsByClassName("submenu-sedes");
for (var i = 0; i < subMenuSedes.length; i++) {
    subMenuSedes[i].addEventListener("click", showMenu)
}

function showMenu() {
    var subMenuGen = this.getElementsByClassName("submenu-gen")[0];
    console.log(subMenuGen);

    if (subMenuGen.classList.contains("hide")) {
        subMenuGen.classList.remove("hide");
        subMenuGen.classList.add("show");
        console.log("subMenuGen");
    } else {
        subMenuGen.classList.remove("show");
        subMenuGen.classList.add("hide");
        console.log(subMenuGen);
    }
}