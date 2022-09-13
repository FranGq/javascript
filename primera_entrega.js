// SIMULADOR VIRTUAL DE TIENDA DE ARTÍCULOS PARA MASCOTAS

alert("¡Te damos la bienvenida a PetStore! Si el valor de su compra es igual o mayor a $200 recibirá un descuento en el total.")

// CONSTRUCCIÓN DE OBJETOS

class Producto {
    constructor(id, nombre, precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;}
    }

// LISTADO DE PRODUCTOS CON ID, NOMBRE Y PRECIO

let productos = [
    new Producto(1, 'Correa para paseo', 50),
    new Producto(2, 'Caja de arena', 100),
    new Producto(3, 'Pelota', 25),
    new Producto(4, 'Hueso de goma', 40),
]

let carrito = []

// FUNCIÓN QUE SERVIRÁ PARA AGREGAR PRODUCTOS AL CARRITO DE COMPRAS, PUDIENDO ELEGIR PRODUCTO Y CANTIDAD. SI NO SE SELECCIONA ALGUNA DE LAS OPCIONES VÁLIDAS, NO SE AGREGA NINGÚN PRODUCTO AL CARRITO NI TAMPOCO UN MONTO Y PASA AUTOMÁTICAMENTE A LA SIGUIENTE OPCIÓN DE COMPRA.

function addToCart() {
    let cantidad
    let productoId = Number(prompt('Elija la opción del producto que desea agregar al carrito:\n 1: Correa para paseo - $50 \n 2: Caja de arena - $100 \n 3: Pelota - $25 \n 4: Hueso de goma - $40'))
    if (productoId > "4") {
        alert ("No existen productos asociados al número seleccionado. Intente nuevamente con una opción válida.")
        productoId = 0
        cantidad = 0
    }
    else{
    let filtro = productos.filter(name => name.id===productoId)
    let nombreProducto = filtro.map(name=> name.nombre)
    cantidad =  Number(prompt(`Seleccione la cantidad para: ${nombreProducto}`))
    let producto = productos.find(product => product.id===productoId)
    producto.cantidad = cantidad
    producto.total = producto.precio * cantidad
    carrito.push(producto)
}
}

addToCart()
addToCart()

// FUNCIÓN PARA CALCULAR EL TOTAL DE LA COMPRA

function calcularTotal(carrito){

    let total = 0;
    carrito.forEach(producto=> {
        total += producto.total
    })
    return total
}

// FUNCIÓN QUE APLICA UN DESCUENTO EN CASO SE CUMPLA LA CONDICIÓN Y MUESTRA DEL RESUMEN DE COMPRA CON LA OPCIÓN DE COMPLETAR EL PAGO O VACIAR EL CARRITO

function resumen (){
    if (calcularTotal(carrito) >= 200){
    let resumen1 = prompt (`¡Felicidades! Se te aplicó un 10% al total de tu compra. \n Monto de compra: $${calcularTotal(carrito)}. \n Monto total a pagar con descuento: $${calcularTotal(carrito) - (calcularTotal(carrito)*0.1)}. \n\n 1. Pagar \n 2. Vaciar carrito`);
    if (resumen1 == 1){
        alert ('Pago realizado con éxito.')
    }
    else{
        carrito = []
        alert ('Tu carrito está vacío. Vuelve al inicio para realizar una nueva compra.')
    }
    }
    else{
    let resumen2 = prompt (`No tienes ningún descuento en esta oportunidad. \n Monto total a pagar: $${calcularTotal(carrito)}. \n\n 1. Pagar \n 2. Vaciar carrito`);
    if (resumen2 == 1){
        alert ('Pago realizado con éxito.')
    }
    else{
        carrito = []
        alert ('Tu carrito está vacío. Vuelve al inicio para realizar una nueva compra.')
    }
    }
    }
    
resumen ()
