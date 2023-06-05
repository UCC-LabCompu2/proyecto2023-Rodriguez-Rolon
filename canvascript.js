/* Función para animar el canvas (movimiento de izquiera a derecha)
* @method animarAvion()
* @param no hay parámetros. Se crean variables globales
*/

/* Se inicializan las variables x y dx. x representa la posición horizontal del personaje Pacman en el lienzo,
y dx es la cantidad que se sumará a x en cada iteración para mover el personaje.*/
x = 0;
dx = 9;

function animarPacman() {

    /*obtenemos el elemento de lienzo HTML con el ID "myCanvas" y creamos un contexto de dibujo 2D.*/
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    /*Creamos una nueva instancia de la clase Image y asignamos la ruta de la imagen del personaje Pacman a la propiedad src de la instancia.*/
    var img = new Image();
    img.src = "img/canvaspacman.png";

    /*Se borra el contenido previo del lienzo usando el método clearRect() del contexto de dibujo, pasando las
    coordenadas (0, 0) como punto de inicio y las dimensiones del lienzo como ancho y alto.*/

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /*Esperamos a que la imagen se cargue completamente y, una vez cargada, se dibuja la
    imagen en el lienzo utilizando el método . La posición horizontal x se utiliza
    como coordenada x del dibujo y se fija en 100 como coordenada y.
     */
    img.onload = function () {
        ctx.drawImage(img, x, 100);
    }
    /*Verificamos si la posición x ha superado el ancho del lienzo (canvas.width). Si es así, se reinicia x a 0, lo que
    permite que el personaje Pacman vuelva a la posición inicial.
     */
    if (x > canvas.width) {
        x = 0;
    }

    /*Incrementamos x en dx, lo que mueve gradualmente el personaje Pacman hacia la derecha en el lienzo.*/
    x += dx;
}



