//Funcion para el submenú que mostrará las opciones de generación a elegir
var subMenuSedes = document.getElementsByClassName("submenu-sedes");
for (var i = 0; i < subMenuSedes.length; i++) {
    subMenuSedes[i].addEventListener("click", showMenu)
    subMenuSedes[i].addEventListener("click", hola);
}

function showMenu() {
    var subMenuGen = this.getElementsByClassName("submenu-gen")[0];
    //console.log(subMenuGen);

    if (subMenuGen.classList.contains("hide")) {
        subMenuGen.classList.remove("hide");
        subMenuGen.classList.add("show");
        //  console.log("subMenuGen");
    } else {
        subMenuGen.classList.remove("show");
        subMenuGen.classList.add("hide");
        //console.log(subMenuGen);
    }
}

// Función para acceder a los datos desde el submenú
function hola() {
    console.log(event.target);
    var target = event.target;
    var sede = target.dataset.sede;
    console.log(sede);
    var gen = target.dataset.gen;
    console.log(gen)
    console.log(data[sede]);
}

SECCIÓN DASHBOARD
Funciones para mostrar el dashboard por generación
var showDash = document.getElementsById("are1602");
for (var i = 0; i < showDash.length; i++) {
    showDash.addEventListener("click", showImg)
}

function showImg() {
    var dashAqp1 = this.getElementsByClassName("aqp-dash-1");
    console.log(dashAqp1);

    if (dashAqp1.classList.contains("hide")) {
        dashAqp1.classList.remove("hide");
        dashAqp1.classList.add("show");
        console.log("dashAqp1");
    } else {
        dashAqp1.classList.remove("show);
            dashAqp1.classList.add("hide"); console.log(dashAqp1);
        }
    }

    function myFunctionDash1() {
        var x = document.getElementById("d1").innerHTML;
        document.getElementById("d1").innerHTML = '<img src="assets/images/AQP_2016-2.jpg"></img>';
        if (x.classList.contains("hide")) {
            x.classList.remove("hide");
            x.classList.add("show")
        } else {
            x.classList.remove("show");
            x.classList.add("hide");
        }
    }

    function myFunctionDash2() {
        var x = document.getElementById("d2").innerHTML;
        document.getElementById("d2").innerHTML = '<img src="assets/images/AQP_2017-1.jpg"></img>';
    }

    /*var drawDashScl1702 = document.getElementById('scl1702');
    drawDashScl1702.onclick = function() {
        scl172.style.display = "block";
        aqp162.style.display = "none";
        /*informationStudentScl.style.display = "none";
        informationStudentLim2.style.display = "none";
        informationStudentLim1.style.display = "none";
        informationStudentLim.style.display = "none";
        informationStudentCdmx2.style.display = "none";
        informationStudentCdmx.style.display = "none";
        informationStudentArequipa1.style.display = "none";
        informationStudentArequipa.style.display = "none";
    }*/