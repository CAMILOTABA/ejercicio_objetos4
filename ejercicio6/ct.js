function contarcaracteres(){
		
	//Numero de caracteres permitidos
		var total=120;

 setTimeout(function(){
 var valor=document.getElementById('contador');
 var respuesta=document.getElementById('res');
 var cantidad=valor.value.length;
 document.getElementById('res').innerHTML = cantidad + ' caractere/s, te quedan ' + (total - cantidad) ;
 if(cantidad>total){
	 respuesta.style.color = "red";
 }
 else {
	 respuesta.style.color = "black";
 }
 },10);

}




/*. Implementar un objeto que modele un contador. Un contador se puede incrementar o decrementar, recordando el valor actual. Al resetear un contador, se pone en cero.
Además es posible indicar directamente cual es el valor actual. Este objeto debe entender los siguientes mensajes: 6.1 reset() 6.2 inc() 6.3 dec() 6.4 valorActual() 6.5 valorActual(nuevoValor) P.ej. si se evalúa la siguiente secuencia contador.valorActual(10) contador.inc() contador.inc() contador.dec() contador.inc() contador.valorActual() el resultado debe ser 12.*/
