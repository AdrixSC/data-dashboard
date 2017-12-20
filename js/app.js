//Accediendo a la data

//Total de estudiantes por sede y generación
function totalStudents() {
    var studentsAQP1 = data.AQP["2016-2"].students;
    var studentsAQP2 = data.AQP["2017-1"].students;

    var studentsCDMX1 = data.CDMX["2017-1"].students;
    var studentsCDMX2 = data.CDMX["2017-2"].students;


    var studentsLIM1 = data.LIM["2016-2"].students;
    var studentsLIM2 = data.LIM["2017-1"].students;
    var studentsLIM3 = data.LIM["2017-2"].students;

    var studentsSCL1 = data.SCL["2016-2"].students;
    var studentsSCL2 = data.SCL["2017-1"].students;
    var studentsSCL3 = data.SCL["2017-2"].students;
}


//Estudiantes inactivas
function statusInactive() {
    var studentsAqp1 = data.AQP["2016-2"].students
    for (var i = 0; i < studentsAqp1.length; i++) {
        if (studentsAqp1[i]["active"] == false) {
            //return ("inactive")
        }
    }

    var studentsAqp2 = data.AQP["2017-1"].students
    for (var i = 0; i < studentsAqp2.length; i++) {
        if (studentsAqp2[i]["active"] == false) {
            //return ("inactive")
        }
    }

    var studentsCdmx1 = data.CDMX["2017-1"].students
    for (var i = 0; i < studentsCdmx1.length; i++) {
        if (studentsCdmx1[i]["active"] == false) {
            //return ("inactive")
        }
    }

    var studentsCdmx2 = data.CDMX["2017-2"].students
    for (var i = 0; i < studentsCdmx2.length; i++) {
        if (studentsCdmx2[i]["active"] == false) {
            //return ("inactive")
        }
    }

    var studentsLima1 = data.LIM["2016-2"].students
    for (var i = 0; i < studentsLima1.length; i++) {
        if (studentsLima1[i]["active"] == false) {
            //return ("inactive")
        }
    }

    var studentsLima2 = data.LIM["2017-1"].students
    for (var i = 0; i < studentsLima2.length; i++) {
        if (studentsLima2[i]["active"] == false) {
            //return ("inactive")
        }
    }

    var studentsLima3 = data.LIM["2017-2"].students
    for (var i = 0; i < studentsLima3.length; i++) {
        if (studentsLima3[i]["active"] == false) {
            //return ("inactive")
        }
    }

    var studentsSan1 = data.SCL["2016-2"].students
    for (var i = 0; i < studentsSan1.length; i++) {
        if (studentsSan1[i]["active"] == false) {
            //return ("inactive")
        }
    }

    var studentsSan2 = data.SCL["2017-1"].students
    for (var i = 0; i < studentsSan2.length; i++) {
        if (studentsSan2[i]["active"] == false) {
            //return ("inactive")
        }
    }

    var studentsSan3 = data.SCL["2017-2"].students
    for (var i = 0; i < studentsSan3.length; i++) {
        if (studentsSan3[i]["active"] == false) {
            //return ("inactive")
            //accediendo a el sprint 1
            var sprint1 = studentsSan3[i]["sprints"].score
        }
        //console.log("A", sprint1)
    }

}


//NPS por generación
function nps() {
    var ratingAqp1 = data.AQP["2016-2"].ratings

    var ratingAqp2 = data.AQP["2017-1"].ratings

    var ratingCdmx1 = data.CDMX["2017-1"].ratings

    var ratingCdmx2 = data.CDMX["2017-2"].ratings

    var ratingLima1 = data.LIM["2016-2"].ratings

    var ratingLima2 = data.LIM["2017-1"].ratings

    var ratingLima3 = data.LIM["2017-2"].ratings

    var ratingScl1 = data.SCL["2016-2"].ratings

    var ratingScl2 = data.SCL["2017-1"].ratings

    var ratingScl3 = data.SCL["2017-2"].ratings
}



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

//SECCIÓN DASHBOARD
// Funciones para mostrar el dashboard por generación
//intento 1
/*var showDash = document.getElementsById("are1602");
//for (var i = 0; i < showDash.length; i++) {
showDash.addEventListener("click", showImg)
    //}

function showImg() {
    var dashAqp1 = this.getElementsByClassName("aqp-dash-1");
    console.log(dashAqp1);

    if (dashAqp1.classList.contains("hide")) {
        dashAqp1.classList.remove("hide");
        dashAqp1.classList.add("show");
        console.log("dashAqp1");
    } else {
        dashAqp1.classList.remove("show);
        dashAqp1.classList.add("hide");
        console.log(dashAqp1);
    }
}*/

//intento 2
/*function myFunctionDash1() {
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
}*/

//intento 3
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


//SECCIÓN ESTUDIANTES
//Eventos para mostrar los perfiles de las estudiantes
var wrapperAre1602 = document.getElementById('are1602');
wrapperAre1602.onclick = function() {
    informationStudentArequipa1.style.display = "none";
    informationStudentArequipa.style.display = "block";
    informationStudentCdmx.style.display = "none";
    informationStudentCdmx2.style.display = "none";
    informationStudentLim.style.display = "none";
    informationStudentLim1.style.display = "none";
    informationStudentLim2.style.display = "none";
    informationStudentScl.style.display = "none";
    informationStudentScl1.style.display = "none";
    informationStudentScl2.style.display = "none";
}

var wrapperAre1601 = document.getElementById('are1601');
wrapperAre1601.onclick = function() {
    informationStudentArequipa1.style.display = "block";
    informationStudentArequipa.style.display = "none";
    informationStudentCdmx.style.display = "none";
    informationStudentCdmx2.style.display = "none";
    informationStudentLim.style.display = "none";
    informationStudentLim1.style.display = "none";
    informationStudentLim2.style.display = "none";
    informationStudentScl.style.display = "none";
    informationStudentScl1.style.display = "none";
    informationStudentScl2.style.display = "none";
}

var wrapperCdmx1701 = document.getElementById('cdmx1701');
wrapperCdmx1701.onclick = function() {
    informationStudentCdmx.style.display = "block";
    informationStudentArequipa1.style.display = "none";
    informationStudentArequipa.style.display = "none";
    informationStudentCdmx2.style.display = "none";
    informationStudentLim.style.display = "none";
    informationStudentLim1.style.display = "none";
    informationStudentLim2.style.display = "none";
    informationStudentScl.style.display = "none";
    informationStudentScl1.style.display = "none";
    informationStudentScl2.style.display = "none";
}

var wrapperCdmx1702 = document.getElementById('cdmx1702');
wrapperCdmx1702.onclick = function() {
    informationStudentCdmx2.style.display = "block";
    informationStudentCdmx.style.display = "none";
    informationStudentArequipa1.style.display = "none";
    informationStudentArequipa.style.display = "none";
    informationStudentLim.style.display = "none";
    informationStudentLim1.style.display = "none";
    informationStudentLim2.style.display = "none";
    informationStudentScl.style.display = "none";
    informationStudentScl1.style.display = "none";
    informationStudentScl2.style.display = "none";
}

var wrapperLim1602 = document.getElementById('lim1602');
wrapperLim1602.onclick = function() {
    informationStudentLim.style.display = "block";
    informationStudentLim1.style.display = "none";
    informationStudentCdmx2.style.display = "none";
    informationStudentCdmx.style.display = "none";
    informationStudentArequipa1.style.display = "none";
    informationStudentArequipa.style.display = "none";
    informationStudentLim2.style.display = "none";
    informationStudentScl.style.display = "none";
    informationStudentScl1.style.display = "none";
    informationStudentScl2.style.display = "none";
}

var wrapperLim1701 = document.getElementById('lim1701');
wrapperLim1701.onclick = function() {
    informationStudentLim1.style.display = "block";
    informationStudentLim.style.display = "none";
    informationStudentCdmx2.style.display = "none";
    informationStudentCdmx.style.display = "none";
    informationStudentArequipa1.style.display = "none";
    informationStudentArequipa.style.display = "none";
    informationStudentLim2.style.display = "none";
    informationStudentScl.style.display = "none";
    informationStudentScl1.style.display = "none";
    informationStudentScl2.style.display = "none";
}

var wrapperLim1702 = document.getElementById('lim1702');
wrapperLim1702.onclick = function() {
    informationStudentLim2.style.display = "block";
    informationStudentLim1.style.display = "none";
    informationStudentLim.style.display = "none";
    informationStudentCdmx2.style.display = "none";
    informationStudentCdmx.style.display = "none";
    informationStudentArequipa1.style.display = "none";
    informationStudentArequipa.style.display = "none";
    informationStudentScl.style.display = "none";
    informationStudentScl1.style.display = "none";
    informationStudentScl2.style.display = "none";
}

var wrapperScl1602 = document.getElementById('scl1602');
wrapperScl1602.onclick = function() {
    informationStudentScl.style.display = "block";
    informationStudentLim2.style.display = "none";
    informationStudentLim1.style.display = "none";
    informationStudentLim.style.display = "none";
    informationStudentCdmx2.style.display = "none";
    informationStudentCdmx.style.display = "none";
    informationStudentArequipa1.style.display = "none";
    informationStudentArequipa.style.display = "none";
    informationStudentScl1.style.display = "none";
    informationStudentScl2.style.display = "none";
}
var wrapperScl1701 = document.getElementById('scl1701');
wrapperScl1701.onclick = function() {
    informationStudentScl1.style.display = "block";
    informationStudentScl.style.display = "none";
    informationStudentLim2.style.display = "none";
    informationStudentLim1.style.display = "none";
    informationStudentLim.style.display = "none";
    informationStudentCdmx2.style.display = "none";
    informationStudentCdmx.style.display = "none";
    informationStudentArequipa1.style.display = "none";
    informationStudentArequipa.style.display = "none";
    informationStudentScl2.style.display = "none";
}
var wrapperScl1702 = document.getElementById('scl1702');
wrapperScl1702.onclick = function() {
    informationStudentScl2.style.display = "block";
    informationStudentScl1.style.display = "none";
    informationStudentScl.style.display = "none";
    informationStudentLim2.style.display = "none";
    informationStudentLim1.style.display = "none";
    informationStudentLim.style.display = "none";
    informationStudentCdmx2.style.display = "none";
    informationStudentCdmx.style.display = "none";
    informationStudentArequipa1.style.display = "none";
    informationStudentArequipa.style.display = "none";
}