// SIMULADOR VIRTUAL DE TIENDA DE ACCESORIOS PARA MASCOTAS

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

// FUNCIÓN QUE SERVIRÁ PARA AGREGAR PRODUCTOS AL CARRITO DE COMPRAS, PUDIENDO ELEGIR PRODUCTO Y CANTIDAD

function addToCart() {
    let productoId = Number(prompt('Elija la opción del producto que desea agregar al carrito:\n 1: Correa para paseo - $50 \n 2: Caja de arena - $100 \n 3: Pelota - $25 \n 4: Hueso de goma - $40'))
    let filtro = productos.filter(name => name.id===productoId)
    let nombreProducto = filtro.map(name=> name.nombre)
    let cantidad =  Number(prompt(`Cantidad: ${nombreProducto}`))
    let producto = productos.find(product => product.id===productoId)
    producto.cantidad = cantidad
    producto.total = producto.precio * cantidad
    carrito.push(producto)
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

// FUNCIÓN QUE APLICA UN DESCUENTO EN CASO SE CUMPLA LA CONDICIÓN Y MUESTRA DEL RESUMEN DE COMPRA

function resumen (){
    if (calcularTotal(carrito) >= 200){
    alert (`¡Felicidades! Se te aplicó un 10% al total de tu compra. \n Monto de compra: $${calcularTotal(carrito)}. \n Monto total a pagar con descuento: $${calcularTotal(carrito) - (calcularTotal(carrito)*0.1)}.`);
    }
    else{
    alert (`No tienes ningún descuento en esta oportunidad. \n Monto total a pagar: $${calcularTotal(carrito)}.`);
    }
    }
    
resumen ()