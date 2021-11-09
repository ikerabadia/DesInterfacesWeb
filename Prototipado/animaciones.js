function rotar() {
    document.getElementById("buscador").style.animation = "rotacion 2s infinite";
}
function noRotar() {
    document.getElementById("buscador").style.animation = "";
}
function moverCuadradoImagen() {
    var cuadrado = document.getElementById("cuadradoImagen");
    cuadrado.style.animation = "animacion1Cuadrado 3s forwards";
    cuadrado.onclick = "";
    setTimeout(() => {
        cuadrado.onclick = moverCuadradoImagen2;
        setTimeout(() => {
            cuadrado.style.animation = "animacion2Cuadrado 1s forwards";
            cuadrado.onclick = moverCuadradoImagen;
        }, 3000);
    }, 3000);



}
function moverCuadradoImagen2() {
    var cuadrado = document.getElementById("cuadradoImagen");
    cuadrado.style.animation = "animacion2Cuadrado 1s forwards";
    setTimeout(() => {
        setTimeout(() => {
            cuadrado.onclick = moverCuadradoImagen;
        }, 2000);
        
    }, 1000);

}
function envioFormulario() {
    cuadradosCarga();
}
function cuadradosCarga() {
    var cuadrado1 = document.getElementById("cuadradoCarga1");
    var cuadrado2 = document.getElementById("cuadradoCarga2");
    var cuadrado3 = document.getElementById("cuadradoCarga3");
    document.getElementById("cuadradosCarga").style.opacity = 1;

    
    
        cuadrado3.style.background = "transparent";
        cuadrado1.style.background = "black";
        setTimeout(() => {
            cuadrado1.style.background = "transparent";
            cuadrado2.style.background = "black";
            setTimeout(() => {
                cuadrado2.style.background = "transparent";
                cuadrado3.style.background = "black";
                cuadradosCarga();
            }, 300);
        }, 300);
        
    
}
function iniciarCarrera() {
    var coche = document.getElementById("contenedorCoche");
    coche.style.animation = "animacionCarrera linear 10s forwards";
}