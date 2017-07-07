//Función para agregar items según tipo
Carrito.prototype.agregarItem = function(boton,cantidad,producto,precio){
  var btn = document.getElementById(boton)
  var cantidad = document.getElementById(cantidad)
  var carro = document.getElementById('carro')
  btn.addEventListener("click",function(){
    var caja = document.createElement('div')
    caja.classList.add('caja')
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