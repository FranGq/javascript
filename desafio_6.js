// SIMULADOR VIRTUAL DE TIENDA DE ARTÍCULOS PARA MASCOTAS

document.querySelector("h1").textContent =
  "¡Te damos la bienvenida a PetStore!";
document.querySelector("h2").textContent =
  "Si el valor de su compra es igual o mayor a $200 recibirá un descuento en el total.";

// CONSTRUCCIÓN DE OBJETOS

class Producto {
  constructor(id, imagen, nombre, precio) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
  }
}

// LISTADO DE PRODUCTOS CON ID, IMAGEN DEL PRODUCTO, NOMBRE Y PRECIO

const cartProducts = [];

const productos = [
  new Producto(1, "./img/CorreaPaseo.png", "Correa para paseo", 50),
  new Producto(2, "./img/cajaArena.png", "Caja de arena", 100),
  new Producto(3, "./img/pelota.png", "Pelota", 25),
  new Producto(4, "./img/huesoGoma.png", "Hueso de goma", 40),
];

cartProducts.push(productos);

// ARRAY DE PRODUCTOS A JSON

const jsonCartProducts = JSON.stringify(cartProducts)
console.log(jsonCartProducts)

// CARRITO DE COMPRAS

let carrito = {};

const card = document.getElementById("productosLista");
const calculoCompra = document.getElementById("calculoCompra");
const totalPagar = document.getElementById("totalPagar");
const template = document.getElementById("template-card").content;
const templateCarrito = document.getElementById("template-carrito").content;
const templateTotalPagar = document.getElementById("template-total-pagar").content;
const fragment = document.createDocumentFragment();

// CONSTRUCCIÓN DE TARJETAS DE PRODUCTOS

productos.forEach((item) => {
  template.querySelector(".card-img-top").setAttribute("src", `${item.imagen}`);
  template.querySelector(".producto").textContent = `${item.nombre}`;
  template.querySelector(".precio").textContent = `${item.precio}`;
  template.querySelector(".agregarButton").dataset.id = `${item.id}`;
  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

card.appendChild(fragment);

// FUNCIÓN PARA AGREGAR PRODUCTOS CON BOTÓN, LOS PRODUCTOS SE VAN AGREGANDO AL CARRITO DE COMPRAS

card.addEventListener("click", (e) => {
  addCarrito(e);
});

const addCarrito = (e) => {
  e.target.classList.contains("agregarButton") && carritoCompra(e.target.parentElement);
  e.stopPropagation();

  // const addCarrito = (e) => {
  //   if (e.target.classList.contains("agregarButton")) {
  //     carritoCompra(e.target.parentElement);
  //   }
  //   e.stopPropagation();
};

const carritoCompra = (objeto) => {
  const producto = {
    id: objeto.querySelector(".agregarButton").dataset.id,
    // imagen: objeto.querySelector('.card-img-top').setAttribute("src", `${item.imagen}`), (NO SÉ CÓMO HACER PARA QUE CAPTURE LA IMAGEN DEL PRODUCTO TAMBIÉN!!)
    nombre: objeto.querySelector(".producto").textContent,
    precio: objeto.querySelector(".precio").textContent,
    cantidad: 1,
  };

  carrito.hasOwnProperty(producto.id) && (producto.cantidad = carrito[producto.id].cantidad + 1)

  // if (carrito.hasOwnProperty(producto.id)) {
  //   producto.cantidad = carrito[producto.id].cantidad + 1;
  // }

  carrito[producto.id] = {...producto};
  mostrarProductosCarrito();
};

// LOS PRODUCTOS AGREGADOS SE MUESTRAN

const mostrarProductosCarrito = () => {
  calculoCompra.innerHTML = " ";
  Object.values(carrito).forEach((producto) => {
    templateCarrito.querySelectorAll("td")[0].textContent = producto.id;
    templateCarrito.querySelectorAll("td")[1].textContent = producto.nombre;
    templateCarrito.querySelectorAll("td")[2].textContent = producto.cantidad;
    templateCarrito.querySelector("span").textContent =
      producto.precio * producto.cantidad;
    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  calculoCompra.appendChild(fragment);

  pagoFinal ()

  localStorage.setItem('carrito', JSON.stringify(carrito))
};

// LOS PRECIOS Y LAS CANTIDADES SE SUMAN Y SE MUESTRA EL TOTAL DE COMPRA

const pagoFinal = () =>{
  totalPagar.innerHTML = ''
  Object.keys(carrito).length === 0 && (totalPagar.innerHTML = '')
  
  // const pagoFinal = () =>{
  //   totalPagar.innerHTML = ''
  //   if(Object.keys(carrito).length === 0){
  //     totalPagar.innerHTML = ''
  //   }

  const sumaPrecios = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
  templateTotalPagar.querySelector("span").textContent = sumaPrecios
  const clone = templateTotalPagar.cloneNode(true)
  fragment.appendChild(clone)
  totalPagar.appendChild(fragment)
}

// LOCAL STORAGE PARA QUE NO SE BORRE LA INFORMACIÓN DEL CARRITO AL REINICIAR

(localStorage.getItem('carrito')) && (carrito = JSON.parse (localStorage.getItem('carrito'))) 
mostrarProductosCarrito()

// if (localStorage.getItem('carrito')) {
//   carrito = JSON.parse (localStorage.getItem('carrito'))
//   mostrarProductosCarrito()
// }































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

// js 85
// templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
// templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;

// html 24
// <tfoot>
//       <tr id="footer">
//         <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
//       </tr>
//     </tfoot>

// html despues de table antes de cerrar el div
//  <div class="row" id="cards"> </div>

// html 39
// <template id="template-footer">
//       <th scope="row" colspan="2">Total productos</th>
//       <td>10</td>
//       <td>
//         <button class="btn btn-danger btn-sm" id="vaciar-carrito">
//           vaciar todo
//         </button>
//       </td>
//       <td class="font-weight-bold">$ <span>5000</span></td>
//     </template>

// html template carrito despues de td1
//  <td>
//           <button class="btn btn-info btn-sm">+</button>
//           <button class="btn btn-danger btn-sm">-</button>
//         </td>

// html 
// <template id="template-footer">
// <th scope="row" colspan="2">Total productos</th>
// <td>10</td>
// <td>
//   <button class="btn btn-danger btn-sm" id="vaciar-carrito">
//     vaciar todo
//   </button>
// </td>
// <td class="font-weight-bold">$ <span>5000</span></td>
// </template>

