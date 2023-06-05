/* Función para animar el canvas (movimiento de izquiera a derecha)
* @method animarAvion()
* @param no hay parámetros. Se crean variables globales
*/
x = 0;
dx = 9;
function animarPacman() {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.src = "img/canvaspacman.png";

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    img.onload = function () {
        ctx.drawImage(img, x, 100);
    }

    if (x > canvas.width) {
        x = 0;
    }

    x += dx;
}


//<!--onload="setInterval(animarPacman, 50)"-->
// <div class="divCanvas">
//     <canvas id="myCanvas" class="canvas" height="500" width="1500">
//     </canvas>
// </div>

//.divCanvas {
//     margin-top: -15%;
//     height: auto;
// }
//
// .canvas {
//     height: 100%;
//     width: 100%;
// }
//
// .canvas img {
//     height: 20%;
//     width: fit-content;
// }

