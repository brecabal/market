// Método para agregar los items al carrito
Carrito.prototype.agregarACarrito = function() {
	var subLeche = this.agregarItem('btnLeche','cantidadLeche', 'Leche', 800)
	var subCif = this.agregarItem('btnCif','cantidadCif', 'Cif', 1500)
	var subCafe =  this.agregarItem('btnCafe','cantidadCafe', 'Café', 1000)
	var subTe =  this.agregarItem('btnTe','cantidadTe', 'Té', 2000)
	var subConfort = this.agregarItem('btnConfort','cantidadConfort', 'Confort', 3000)
	var subAceite = this.agregarItem('btnAceite','cantidadAceite', 'Aceite', 1000)
	var subTallarines = this.agregarItem('btnArroz','cantidadArroz', 'Arroz', 900)
	var subArroz = this.agregarItem('btnTallarines','cantidadTallarines', 'Tallarines', 500)

	var suma = subLeche + subCif + subCafe + subTe + subConfort + subAceite + subTallarines + subArroz
	return suma
}
//Método para generar el total de la compra
Carrito.prototype.generarTotalPrecios = function(){
  var verTotal = document.getElementById('verTotal')
	var self = this
  verTotal.addEventListener('click',function(){
    var total = document.getElementById('total')
    var suma = self.agregarACarrito()
    self.precioFinal = suma
    total.innerHTML = self.precioFinal
  })
}

// Método para generar el stock aleatorio de los productos
 Stock.prototype.generarStockProductos = function(producto,precio){
  var box = []
  for(var i = 0; i< Math.floor(Math.random() * 11); i++){
    var nuevoProducto = new Product(producto,precio)
    box.push(nuevoProducto)
  }
  return box
}

// Método para generar el stock del supermercado
 Stock.prototype.generarStockSupermercado = function(){
  this.leche = this.generarStockProductos("Leche",800)
  this.cif = this.generarStockProductos("Cif",1500)
  this.cafe = this.generarStockProductos("Café",1000)
  this.te = this.generarStockProductos("Té",1500)
  this.confort = this.generarStockProductos("Confort",1500)
  this.aceite = this.generarStockProductos("Aceite",1500)
  this.tallarines = this.generarStockProductos("Tallarines",1500)
  this.arroz = this.generarStockProductos("Arroz",1500)
}

// Método para genenerar dinero aleatorio en la caja
Caja.prototype.generarCaja = function(min,max){
	this.fondo = Math.floor(Math.random() * (max - min) + min)
}

// Método para comprar y dar vuelto
Carrito.prototype.comprar = function(){
  var btnComprar = document.getElementById('check')
	var totalCompra = parseInt(document.getElementById('total').innerText)
	var self = this
  btnComprar.addEventListener('click' , function(){
    var pago= parseInt(prompt('¿Con cuánto dinero vas a pagar?'))
    var vuelto =  parseInt(pago) - self.precioFinal
    return alert("Tu vuelto es " + vuelto)
  })
}