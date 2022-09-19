// SIMULADOR VIRTUAL DE TIENDA DE ARTÍCULOS PARA MASCOTAS

document.querySelector('h1').textContent = '¡Te damos la bienvenida a PetStore!'
document.querySelector('h2').textContent = 'Si el valor de su compra es igual o mayor a $200 recibirá un descuento en el total.'

// CONSTRUCCIÓN DE OBJETOS

class Producto {
    constructor(id, imagen, nombre, precio){
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;}
}

// LISTADO DE PRODUCTOS CON ID, IMAGEN DEL PRODUCTO, NOMBRE Y PRECIO

const cartProducts = []

const productos = [
    new Producto(1, './img/CorreaPaseo.png', 'Correa para paseo', 50),
    new Producto(2, './img/cajaArena.png', 'Caja de arena', 100),
    new Producto(3, './img/pelota.png', 'Pelota', 25),
    new Producto(4, './img/huesoGoma.png', 'Hueso de goma', 40),
]

cartProducts.push(productos)

// INFORMACIÓN ENVIADA AL HTML (DOM)

const card = document.getElementById('productosLista')
const fragment = document.createDocumentFragment();
const template = document.querySelector("#template-card").content;

productos.forEach((item) => {
  template.querySelector('.card-img-top').setAttribute ('src', `${item.imagen}`)  
  template.querySelector('.producto').textContent = `${item.nombre}.`;
  template.querySelector('.precio').textContent = `$${item.precio}.`;
  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

card.appendChild(fragment);






// OTRO INTENTO DE HACERLO DE UNA FORMA DISTINTA, NO SIRVE POR EL MOMENTO

// const showProducts = (products) => {
//     const productContainer = document.querySelector('#product_container')
//     // console.log (productContainer)
//     products.forEach(product => {
//         const card = document.createElement('card')
//         card.innerHTML += `<div style="width:18rem">
//         <div>
//         <h5>$(product.name)</h5>
//         <p>$$(product.price)</p>
//         </div>
//         </div>`
//     productContainer.appendChild(card)
// }) 
// }

// showProducts(cartProducts)
