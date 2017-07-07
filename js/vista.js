Stock.prototype.printProducts = function(){
  var supermarket = document.getElementById('supermarket')
  var print = ''
  var productos = [
    {
      nombre: "Leche",
      img: "http://www.soprole.cl/libs/thumb.php?pic=../imgs/producto/329_Leche-Soprole-Tetra-1L-Entera-MID.png&ancho=251",
      precio: "$800",
      idStock: "stLeche",
      idCantidad: "cantidadLeche",
      idBtn: "btnLeche"
  },
  {
    nombre: "Cif",
    img: "http://www.importadoraluz.cl/productos/5068_cif_crema.jpg",
    precio: "$1500",
    idStock: "stCif",
    idCantidad: "cantidadCif",
    idBtn: "btnCif"
  },
  {
    nombre: "Cafe",
    img: "https://www.agustoconlavida.es/imgdb/product/nescafe-classic-natural---cafe-soluble/563",
    precio: "$1000",
    idStock: "stCafe",
    idCantidad: "cantidadCafe",
    idBtn: "btnCafe"
  },
  {
    nombre: "Té",
    img: "http://www.marmelot.com/marmelot/images/twinings_earl_grey_100.jpg",
    precio: "$2000",
    idStock: "stTe",
    idCantidad: "cantidadTe",
    idBtn: "btnTe"
  },
  {
    nombre: "Confort",
    img: "https://s3-us-west-2.amazonaws.com/comparacion/images/24554_1773309ga.jpg",
    precio: "$2000",
    idStock: "stConfort",
    idCantidad: "cantidadConfort",
    idBtn: "btnConfort"
  },
  {
    nombre: "Aceite",
    img: "http://www.watts.cl/images/default-source/productos-watts/aceite-vegetal-belmont-1-lt-.jpg?sfvrsn=4",
    precio: "$2000",
    idStock: "stAceite",
    idCantidad: "cantidadAceite",
    idBtn: "btnAceite"
  },
  {
    nombre: "Fideos",
    img: "https://jumbo.vteximg.com.br/arquivos/ids/161255-750-750/267626.jpg",
    precio: "$2000",
    idStock: "stTallarines",
    idCantidad: "cantidadTallarines",
    idBtn: "btnTallarines"
  },
  {
    nombre: "Arroz",
    img: "https://jumbo.vteximg.com.br/arquivos/ids/160578-750-750/264594.jpg",
    precio: "$2000",
    idStock: "stArroz",
    idCantidad: "cantidadArroz",
    idBtn: "btnArroz"
  },
]

  for(var i = 0; i < productos.length; i++){
    var template = `<div class="col-md-3">
                    <div class="producto text-center">
                      <h2 class="text-success">${productos[i].nombre}</h2>
                      <img src="${productos[i].img}" alt="">
                      <h2>${productos[i].precio}</h2>
                      <p>Stock: <span id="${productos[i].idStock}"></span></p>
                      <span>Cantidad:</span> <input id="${productos[i].idCantidad}" type="number">
                      <button id="${productos[i].idBtn}" class="btn btn-success">Agregar</button>
                    </div>
                  </div>`
    print+=template
  }
  supermarket.innerHTML = print
}

//Función para agregar items según tipo
Carrito.prototype.agregarItem = function(boton,cantidad,producto,precio){
  var btn = document.getElementById(boton)
  var cantidad = document.getElementById(cantidad)
  var carro = document.getElementById('carro')
  btn.addEventListener("click",function(){
    var caja = document.createElement('div')
    caja.innerHTML = producto + ": " + cantidad.value + " | Subtotal : " + precio*cantidad.value
    carro.appendChild(caja)
  })
  var subtotal = precio*cantidad.value
  return subtotal
}
// Método para agregar el stock
Stock.prototype.mostrarStock = function(){
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

