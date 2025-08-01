document.getElementById("projects").onclick = function project(){
     document.getElementById("projects").style.borderBottom = "1px solid black";
     document.getElementById("work").style.borderBottom = "none";
     document.getElementById("certificate").style.borderBottom = "none";
     document.getElementById("achievement").style.borderBottom = "none";
    document.getElementById("project-items").style.visibility = "visible"
    document.getElementById("work-exp").style.visibility = "hidden"
    document.getElementById("certificate-items").style.visibility = "hidden"
    document.getElementById("achievement-items").style.visibility = "hidden"
}

document.getElementById("work").onclick = function work(){
     document.getElementById("projects").style.borderBottom = "none";
     document.getElementById("work").style.borderBottom = "1px solid black";
     document.getElementById("certificate").style.borderBottom = "none";
     document.getElementById("achievement").style.borderBottom = "none";
    document.getElementById("project-items").style.visibility = "hidden"
    document.getElementById("work-exp").style.visibility = "visible"
    document.getElementById("certificate-items").style.visibility = "hidden"
    document.getElementById("achievement-items").style.visibility = "hidden"
}

document.getElementById("certificate").onclick = function certificate(){
     document.getElementById("projects").style.borderBottom = "none";
     document.getElementById("work").style.borderBottom = "none";
     document.getElementById("certificate").style.borderBottom = "1px solid black";
     document.getElementById("achievement").style.borderBottom = "none";
    document.getElementById("project-items").style.visibility = "hidden"
    document.getElementById("work-exp").style.visibility = "hidden"
    document.getElementById("certificate-items").style.visibility = "visible"
    document.getElementById("achievement-items").style.visibility = "hidden"
}

document.getElementById("achievement").onclick = function achievement(){
     document.getElementById("projects").style.borderBottom = "none";
     document.getElementById("work").style.borderBottom = "none";
     document.getElementById("certificate").style.borderBottom = "none";
     document.getElementById("achievement").style.borderBottom = "1px solid black";
    document.getElementById("project-items").style.visibility = "hidden"
    document.getElementById("work-exp").style.visibility = "hidden"
    document.getElementById("certificate-items").style.visibility = "hidden"
    document.getElementById("achievement-items").style.visibility = "visible"
}