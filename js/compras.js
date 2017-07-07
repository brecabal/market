//instancia de la lista
var bodegaSupermercado = new Stock()
//acá el supermercado se llena con los productos generados aleatoriamente
bodegaSupermercado.generarStockSupermercado()
bodegaSupermercado.mostrarStock()
var carro = new Carrito()
carro.agregarACarrito()
carro.generarTotalPrecios()

var caja = new Caja()
caja.generarCaja(10000,100000)
carro.comprar()