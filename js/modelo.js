//constructor productos
class Product{
  constructor(name,price){
    this.nombre = name
    this.precio = price
  }
}

//constructor stock
class Stock{
  constructor(){
    this.bodega = []
    this.precios = [800,1500,1000,2000,
    3000,1000,500,900]
    this.groceries = ["Leche", "Cif", "Cafe", "Té", "Confort", "Aceite", "Tallarines", "Arroz"]
    this.leche = []
    this.cif = []
    this.cafe = []
    this.te = []
    this.confort = []
    this.aceite = []
    this.tallarines = []
    this.arroz = []
    this.productosTotales = 0
  }
}

//constructor carrito
class Carrito{
  constructor(){
    this.stockCarrito= []
    this.precioFinal= 0
  }
}

//constructor caja
class Caja{
	constructor(){
		this.fondo = 0
	}
}