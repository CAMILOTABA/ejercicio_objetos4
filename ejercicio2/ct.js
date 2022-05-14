var cuenta1;

function cuenta(){
	
	var nombre = prompt("Ingrese nombre del titular: ", "");
	var saldo = prompt("Ingrese el saldo: ", "");
	cuenta1 = new CuentaBancaria(nombre,saldo);
	cuenta1.mostrarDatos();
}
function validar(){

}

function CuentaBancaria (nombre,saldo) {
	//alert("hola");
	this.nombreTitular = nombre;

	this.saldo = parseInt(saldo);

	this.mostrarDatos = function () {
		var msg = 'Ha creado una cuenta bancaria ';

	    msg = msg + 'Los datos de la cuenta son Nombre: ' + this.nombreTitular;

	    msg = msg + '; Saldo: ' + this.saldo;

	    alert(msg);

		return msg;
	};


	this.depositar = () => {
		var depositar = prompt("Ingrese el aumento ", "");
		this.saldo = this.saldo + parseInt(depositar);
		return this.mostrarDatos();
	}
	

}









 /* 2. Crea un metodo constructor llamado cuenta que tendrá los siguientes atributos: titular (que es nombre de la persona) y cantidad. El titular será obligatorio y la cantidad es opcional. Construye los siguientes métodos para el metodo:
2.1 mostrar (): Muestra los datos de la cuenta. 
2.2 ingresar(cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
 2.3 retirar(cantidad): se retira una cantidad a la cuenta. La cuenta puede estar en números rojos.
 */