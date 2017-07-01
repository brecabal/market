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
  generarStockProductos(producto,precio){
    var box = []
    for(var i = 0; i< Math.floor(Math.random() * 11); i++){
      var nuevoProducto = new Product(producto,precio)
      box.push(nuevoProducto);
    }
    return box;
  }
  generarStockSupermercado(){
    this.leche = this.generarStockProductos("Leche",800)
    this.cif = this.generarStockProductos("Cif",1500)
    this.cafe = this.generarStockProductos("Café",1000)
    this.te = this.generarStockProductos("Té",1500)
    this.confort = this.generarStockProductos("Confort",1500)
    this.aceite = this.generarStockProductos("Aceite",1500)
    this.tallarines = this.generarStockProductos("Tallarines",1500)
    this.arroz = this.generarStockProductos("Arroz",1500)
  }
  mostrarStock(){
    var leche = document.getElementById("stLeche")
    var cif = document.getElementById("stCif")
    var cafe = document.getElementById("stCafe")
    var te = document.getElementById("stTe")
    var confort = document.getElementById("stConfort")
    var aceite = document.getElementById("stAceite")
    var tallarines = document.getElementById("stTallarines")
    var arroz = document.getElementById("stArroz")

    leche.innerHTML = this.leche.length
    cif.innerHTML = this.cif.length
    cafe.innerHTML = this.cafe.length
    te.innerHTML = this.te.length
    confort.innerHTML = this.confort.length
    aceite.innerHTML = this.aceite.length
    tallarines.innerHTML = this.tallarines.length
    arroz.innerHTML = this.arroz.length
  }
  actualizarStock(){

  }
}

//constructor carrito

class Carrito{
  constructor(){
    this.stockCarrito= []
    this.precioFinal= 0
  }
  agregarLeche(){
    var btn = document.getElementById('btnLeche')
    var cantidad = document.getElementById('cantidadLeche')
    var carro = document.getElementById('carro')
    btn.addEventListener("click",function(){
      var caja = document.createElement('div')
      caja.classList.add('caja')
      caja.innerHTML = "Leche : " + cantidad.value + " | Subtotal : " + 800*cantidad.value
      carro.appendChild(caja)
    })
    var subtotal = 800*cantidad.value
    return subtotal
  }
  agregarCif(){
    var btn = document.getElementById('btnCif')
    var cantidad = document.getElementById('cantidadCif')
    var carro = document.getElementById('carro')
    btn.addEventListener("click",function(){
      var caja = document.createElement('div')
      caja.classList.add('caja')
      caja.innerHTML = "Cif : " + cantidad.value + " | Subtotal : " + 1500*cantidad.value
      carro.appendChild(caja)
    })
    var subtotal = 1500*cantidad.value
    return subtotal
  }
  agregarCafe(){
    var btn = document.getElementById('btnCafe')
    var cantidad = document.getElementById('cantidadCafe')
    var carro = document.getElementById('carro')
    btn.addEventListener("click",function(){
      var caja = document.createElement('div')
      caja.classList.add('caja')
      caja.innerHTML = "Cafe : " + cantidad.value + " | Subtotal : " + 1000*cantidad.value
      carro.appendChild(caja)
    })
    var subtotal = 1000*cantidad.value
    return subtotal
  }
  agregarTe(){
    var btn = document.getElementById('btnTe')
    var cantidad = document.getElementById('cantidadTe')
    var carro = document.getElementById('carro')
    btn.addEventListener("click",function(){
      var caja = document.createElement('div')
      caja.classList.add('caja')
      caja.innerHTML = "Te : " + cantidad.value + " | Subtotal : " + 2000*cantidad.value
      carro.appendChild(caja)
    })
    var subtotal = 2000*cantidad.value
    return subtotal
  }
  agregarConfort(){
    var btn = document.getElementById('btnConfort')
    var cantidad = document.getElementById('cantidadConfort')
    var carro = document.getElementById('carro')
    btn.addEventListener("click",function(){
      var caja = document.createElement('div')
      caja.classList.add('caja')
      caja.innerHTML = "Confort : " + cantidad.value + " | Subtotal : " + 3000*cantidad.value
      carro.appendChild(caja)
    })
    var subtotal = 3000*cantidad.value
    return subtotal
  }
  agregarAceite(){
    var btn = document.getElementById('btnAceite')
    var cantidad = document.getElementById('cantidadAceite')
    var carro = document.getElementById('carro')
    btn.addEventListener("click",function(){
      var caja = document.createElement('div')
      caja.classList.add('caja')
      caja.innerHTML = "Aceite : " + cantidad.value + " | Subtotal : " + 1000*cantidad.value
      carro.appendChild(caja)
    })
    var subtotal = 1000*cantidad.value
    return subtotal
  }
  agregarArroz(){
    var btn = document.getElementById('btnArroz')
    var cantidad = document.getElementById('cantidadArroz')
    var carro = document.getElementById('carro')
    btn.addEventListener("click",function(){
      var caja = document.createElement('div')
      caja.classList.add('caja')
      caja.innerHTML = "Arroz : " + cantidad.value + " | Subtotal : " + 900*cantidad.value
      carro.appendChild(caja)
    })
    var subtotal = 900*cantidad.value
    return subtotal
  }
  agregarTallarines(){
    var btn = document.getElementById('btnTallarines')
    var cantidad = document.getElementById('cantidadTallarines')
    var carro = document.getElementById('carro')
    btn.addEventListener("click",function(){
      var caja = document.createElement('div')
      caja.classList.add('caja')
      caja.innerHTML = "Tallarines : " + cantidad.value + " | Subtotal : " + 500*cantidad.value
      carro.appendChild(caja)
    })
    var subtotal = 500*cantidad.value
    return subtotal
  }
  agregarACarrito(){
    var subLeche = this.agregarLeche()
    var subCif = this.agregarCif()
    var subCafe = this.agregarCafe()
    var subTe = this.agregarTe()
    var subConfort = this.agregarConfort()
    var subAceite = this.agregarAceite()
    var subTallarines = this.agregarTallarines()
    var subArroz = this.agregarArroz()
    var suma = subLeche + subCif + subCafe + subTe + subConfort + subAceite + subTallarines + subArroz
    return suma
  }
  generarTotalPrecios(){
    var verTotal = document.getElementById('verTotal')
    verTotal.addEventListener('click',function(){
      var total = document.getElementById('total')
      var suma = this.agregarACarrito()
      this.precioFinal = suma
      total.innerHTML = this.precioFinal
    })
  }
}

//Todo instanciado

//instancia de la lista
var bodegaSupermercado = new Stock()
//acá el supermercado se llena con los productos generados aleatoriamente
bodegaSupermercado.generarStockSupermercado()
bodegaSupermercado.mostrarStock()
var carro = new Carrito()
carro.agregarACarrito()
carro.generarTotalPrecios()