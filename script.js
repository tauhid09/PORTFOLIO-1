document.getElementById("projects").onclick = function project(){
    document.getElementById("projects").style.backgroundColor = "white";
    document.getElementById("projects").style.Color = "black";
    document.getElementById("work").style.backgroundColor = "transparent";
    document.getElementById("work").style.Color = "white";
    document.getElementById("certificate").style.backgroundColor = "transparent";
    document.getElementById("certificatek").style.Color = "white";
    document.getElementById("achievement").style.backgroundColor = "transparent";
    document.getElementById("achievement").style.Color = "white";
    document.getElementById("project-items").style.visibility = "visible";
    document.getElementById("work-exp").style.visibility = "hidden";
    document.getElementById("certificate-items").style.visibility = "hidden";
    document.getElementById("achievement-items").style.visibility = "hidden";
}

document.getElementById("work").onclick = function work(){
    document.getElementById("projects").style.backgroundColor = "transparent";
    document.getElementById("projects").style.Color = "white";
    document.getElementById("work").style.backgroundColor = "white";
    document.getElementById("work").style.Color = "black";
    document.getElementById("certificate").style.backgroundColor = "transparent";
    document.getElementById("certificatek").style.Color = "white";
    document.getElementById("achievement").style.backgroundColor = "transparent";
    document.getElementById("achievement").style.Color = "white";
    document.getElementById("project-items").style.visibility = "hidden";
    document.getElementById("work-exp").style.visibility = "visible";
    document.getElementById("certificate-items").style.visibility = "hidden";
    document.getElementById("achievement-items").style.visibility = "hidden";
}

document.getElementById("certificate").onclick = function certificate(){

    document.getElementById("project-items").style.visibility = "hidden";
    document.getElementById("work-exp").style.visibility = "hidden";
    document.getElementById("certificate-items").style.visibility = "visible";
    document.getElementById("achievement-items").style.visibility = "hidden";
}

document.getElementById("achievement").onclick = function achievement(){

    document.getElementById("project-items").style.visibility = "hidden";
    document.getElementById("work-exp").style.visibility = "hidden";
    document.getElementById("certificate-items").style.visibility = "hidden";
    document.getElementById("achievement-items").style.visibility = "visible";
}