function visualizar(selecto) {
    if (selecto == "1") {
        document.getElementById("hoja1").style.display = "block";
        document.getElementById("hoja2").style.display = "none";
    }
    if (selecto == "2") {
        document.getElementById("hoja1").style.display = "none";
        document.getElementById("hoja2").style.display = "block";
    }
}