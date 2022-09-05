alert("¡Te damos la bienvenida a la tienda! Usted podrá elegir 3 productos para su compra. Si el valor de compra es igual o mayor a $12 recibirá un descuento en el total.")

class producto {
    constructor(nombre, precio, disponible){
        this.nombre = nombre
        this.precio = precio
        this.disponible = disponible
    }
}

let manzana = new producto ("Manzana", 2, true)
let frambuesa = new producto ("Frambuesa", 6, true)
let sandia = new producto ("Sandía", 4, true)

let price
let fruit
let stock

function productos (){
    let compra = prompt(`Elija la opción del producto que desea agregar al carrito:
    1: Manzana - $2
    2: Frambuesa - $6
    3: Sandía - $4`)
    switch (compra){
        case "1": price = manzana.precio
        fruit = manzana.nombre
        stock = manzana.disponible
        break
        case "2": price = frambuesa.precio
        fruit = frambuesa.nombre
        stock = frambuesa.disponible
        break
        case "3": price = sandia.precio
        fruit = sandia.nombre
        stock = sandia.disponible
        break
        default: price = 0
        fruit = "NA"
        stock = false
        alert ("No existen productos asociados al número seleccionado. Intente nuevamente con una opción válida.")
        break
    }
    return price
}

let compra1 = productos()
let compra2 = productos()
let compra3 = productos()

// Me hubiese gustado que que el número de selección de productos no sea limitado y que el usuario elija la cantidad de productos que desea comprar, pero no encontré la manera de hacerlo por eso lo planteé con tres oportunidades de selección. 

resultado = Number(compra1 + compra2 + compra3)

function resumen (){
if (resultado >= 12){
alert (`¡Felicidades! Se te aplicó un 10% al total de tu compra.
Monto de compra: $${resultado}.
Monto total a pagar con descuento: $${resultado - (resultado*0.1)}.`);
}
else if ((compra1 || compra2 || compra3) == 0){
alert (`No tienes ningún producto en tu bolsa de compra. 
Monto total a pagar: $0`)    
}
else{
alert (`No tienes ningún descuento en esta oportunidad. 
Monto total a pagar: $${resultado}.`);
}
}

resumen ()

// Me hubiese gustado que en el resumen también puedan aparecer los nombres de los productos que el usuario ha seleccionado. Pero como la "función productos" solo retorna un resultado, tuve que escoger entre el precio y el nombre para poder sumarlos. No encontré la forma de obtener un resultado asociado que de nombre y precio.