function muestraCara() {
    var cara = getRandomInt(1,7);
    var dado = document.getElementById("cubo");
    switch (cara) {
        case 1:
            dado.style.transform = "perspective(700px) rotateX(270deg) rotateY(0deg)";
            break;
        case 2:
            dado.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";            
            break;
        case 3:
            dado.style.transform = "perspective(700px) rotateX(0deg) rotateY(180deg)";               
            break;
        case 4:
            dado.style.transform = "perspective(700px) rotateX(0deg) rotateY(270deg)"; 
            break;
        case 5:            
            dado.style.transform = "perspective(700px) rotateX(180deg) rotateY(270deg)"; 
            break;
        case 6:            
            dado.style.transform = "perspective(700px) rotateX(90deg) rotateY(0deg)"; 
            break;
    }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }