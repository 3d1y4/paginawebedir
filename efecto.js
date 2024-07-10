/*creamos un arreglo de imagenes */


var imagenes= ["img/imagen1.jpeg","img/imagen2.jpeg","img/imagen3.jpeg","img/imagen4.jpeg","img/imagen5.jpeg","img/imagen6.jpeg"]
/*mostramos la primera imagen para el slider */
document.Imagen.src=imagenes[0];  
/* hacemos referencia a los botones derecho e izquierdo con queryselector*/
var sliderderecha= document.querySelector(".slider-derecho");
var sliderizquierda=document.querySelector(".slider-izquierdo");
/*declaramos un contador para las transiciones */
var contador=0; /*incrementa y disminuye */

/*implementamos la funcion mover derecha*/
function moverderecha()
{
    contador++; /*el contador se incrementa */
    if(contador>imagenes.length-1)/*con la condicion reiniciamo el slider */
        {
            contador=0;  /*el contador se pone en cero otra vez*/
        }
    document.Imagen.src=imagenes[contador];/*mostrando de acuerdo al indice*/
}
/*este es el evento cuando hacemos clic las imagenes se mueven a la derecha */
sliderderecha.addEventListener("click",moverderecha)

/*transicion automatica del slider*/
setInterval(moverderecha,4000); // cada 5000 segundos se mueve en automatico con el taimer que ejecuta una tarea en un determinado tiempo

/*implementamos la funcion mover izquierda*/
function moverizquierda()
{
    contador--; /*el contador desminuye */
    if(contador<0)/*salvamos el indexado no existe posicion -1 */
        {
            contador=imagenes.length-1;/*el contador vuelve a 3 */
        }
        document.Imagen.src=imagenes[contador];/*mostrando de acuerdo al indice*/
}
/*este es el evento cuando hacemos clic las imagenes se mueven a la derecha */
sliderizquierda.addEventListener("click",moverizquierda);