
var nave;

function cuenta(){
	
	var nombre = "enterprise";
	var potencia = 100;
  var coraza = 20;
	nave = new CuentaBancaria(nombre,potencia,coraza);
	nave.mostrarDatos();
}
function validar(){

}

function CuentaBancaria (nombre,potencia,coraza) {
	//alert("hola");

	this.nombreTitular = nombre;

  this.potencia = parseInt(potencia);

  this.coraza = parseInt(coraza);

	this.mostrarDatos = function () {
		var msg = 'Ha creado una nave nueva  ';

	    msg = msg + 'Los datos de la nave son ' + this.nombreTitular;

	    msg = msg + '; La potencia de la nave es ' + this.potencia;

      msg = msg + '; La coraza  de la nave es ' + this.coraza;

	    alert(msg);

		return msg;
	};

  this.encontrarPilaAtomica = () => {
		var encontrarPilaAtomica = 25;
		this.potencia = this.potencia + parseInt(encontrarPilaAtomica);
		return this.mostrarDatos();
	}

  this.encontrarEscudo = () => {
		var encontrarEscudo = 10;
		this.coraza = this.coraza + parseInt(encontrarEscudo);
		return this.mostrarDatos();
	}
	


}






  
  
  






/*Agregar al metodo constructor de la Enterprise del ejercicio 12, la capacidad de entender estos mensajes. fortalezaDefensiva(), 
que es el máximo nivel de ataque que puede resistir, o sea, coraza más potencia. necesitaFortalecerse(), tiene que ser true si su coraza es 0 y su potencia es menos de 20. fortalezaOfensiva(),
 que corresponde a cuántos puntos de fuerza tendría un ataque de la Enterprise. 
 Se calcula así: si tiene menos de 20 puntos de potencia entonces es 0, si no es (puntos de potencia - 20) / 2.*/