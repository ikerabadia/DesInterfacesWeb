var intervalo;

window.onload = function () {
    document.getElementById("progressVideo").max = document.getElementById("video").duration;
    document.getElementById("progressVideo").value = 0;
}

function play() {
    var video = document.getElementById("video");
    video.play();
    iniciarReproduccionVideo();
    mostrarSimbolo("<i class=\"fa fa-play fa-2x\" aria-hidden=\"true\"></i>");
}
function stop() {
    document.getElementById("video").currentTime = 0;
    document.getElementById("video").pause();
    detenerReproduccionVideo();
    mostrarSimbolo("<i class=\"fa fa-stop fa-2x\" aria-hidden=\"true\"></i>");
}
function pause() {
    document.getElementById("video").pause();
}
function volume(valorVolumen) {
    document.getElementById("video").volume = valorVolumen;
}
function mute() {
    document.getElementById("video").volume = 0;
    document.getElementById("volumen").value = 0;
}
function iniciarReproduccionVideo() {
    var video = document.getElementById("video");
    var progresoVideo = document.getElementById("progressVideo");
    intervalo = setInterval(() => {
        progresoVideo.value = video.currentTime;
    }, 500);

}
function detenerReproduccionVideo() {
    var progresoVideo = document.getElementById("progressVideo");
    intervalo.stop;
    progresoVideo.value = 0;

}
function modificarReproduccionVideo(time) {
    var video = document.getElementById("video");
    video.currentTime = time;
}
function mostrarSimbolo(simbolo) {
    var divSimbolo = document.getElementById("simboloVideo");
    divSimbolo.innerHTML = simbolo;
    divSimbolo.style.transform = "scale(2,2)";
    divSimbolo.style.opacity = "1";
    var tiempo = 0;
    var interval = setInterval(() => {
        if (tiempo == 1000) {
            interval.stop;
            divSimbolo.style.opacity = "0";
            divSimbolo.style.transform = "scale(1,1)";
        }
        tiempo += 1000;
    }, 1000);
    
}