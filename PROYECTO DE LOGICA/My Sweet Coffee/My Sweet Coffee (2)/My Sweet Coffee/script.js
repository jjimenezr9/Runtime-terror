// Lista de productos
const productos = [
    { nombre: 'Café', precio: 5.00 },
    { nombre: 'Panqueques', precio: 25.00 },
    { nombre: 'Capuchino', precio: 7.00 },
    { nombre: 'Tarta de queso', precio: 10.00 },
    { nombre: 'Muffin', precio: 5.00 },
    { nombre: 'Sandwich', precio: 40.00 },
    { nombre: 'Pastel', precio: 15.00 },
    { nombre: 'ChocolateHot', precio: 10.00 },
];
const carrito = [];
// Función para mostrar el menú
function mostrarMenu() {
    const menuSection = document.getElementById('menu');
    const carritoSection = document.getElementById('carrito');
    const calculadoraSection = document.getElementById('calculadora');


    menuSection.style.display = 'block';
    carritoSection.style.display = 'none';
    calculadoraSection.style.display = 'none';
}
// Función para mostrar el carrito
function mostrarCarrito() {
    const menuSection = document.getElementById('menu');
    const carritoSection = document.getElementById('carrito');
    const calculadoraSection = document.getElementById('calculadora');


    menuSection.style.display = 'none';
    carritoSection.style.display = 'block';
    calculadoraSection.style.display = 'none';


    // Mostrar los productos en el carrito
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = '';


    let totalPedido = 0;
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} (Cantidad: ${item.cantidad}) - Precio: Q${(item.precio * item.cantidad).toFixed(2)}`;
        listaCarrito.appendChild(li);
        totalPedido += item.precio * item.cantidad;
    });


    const totalPedidoElement = document.getElementById('totalPedido');
    totalPedidoElement.textContent = `Q${totalPedido.toFixed(2)}`;


    // Actualizar el total del pedido en la sección de la calculadora
    const totalPedidoCalculadoraElement = document.getElementById('totalPedidoCalculadora');
    totalPedidoCalculadoraElement.textContent = `Total del pedido: Q${totalPedido.toFixed(2)}`;
}

// Función para agregar al carrito
function agregarAlCarrito(nombreProducto) {
    const cantidad = parseInt(prompt(`¿Cuántas unidades de ${nombreProducto} deseas agregar?`));


    const productoEncontrado = productos.find(item => item.nombre === nombreProducto);
    if (productoEncontrado) {
        const itemCarrito = {
            nombre: nombreProducto,
            precio: productoEncontrado.precio,
            cantidad: cantidad
        };
        carrito.push(itemCarrito);
    }
}

// Función para mostrar la calculadora
function mostrarCalculadora() {
    const menuSection = document.getElementById('menu');
    const carritoSection = document.getElementById('carrito');
    const calculadoraSection = document.getElementById('calculadora');


    menuSection.style.display = 'none';
    carritoSection.style.display = 'none';
    calculadoraSection.style.display = 'block';
}

// Función para calcular el cambio
function calcularCambio() {
    const montoAPagarElement = document.getElementById('montoAPagar');
    const montoAPagar = parseFloat(montoAPagarElement.value);


    const totalPedidoElement = document.getElementById('totalPedido');
    const totalPedido = parseFloat(totalPedidoElement.textContent.replace('Q', ''));


    const cambio = montoAPagar - totalPedido;


    const resultadoCalculadora = document.getElementById('resultadoCalculadora');
    if (cambio === 0) {
        resultadoCalculadora.textContent = '¡Compra realizada! Gracias por su pago.';
        // Eliminar los productos del carrito
        carrito.length = 0;
        // Redirigir al usuario al menú
        mostrarMenu();

        // Mostrar una alerta con botón "Seguir comprando"
        const seguirComprando = confirm('¡Compra realizada! Gracias por su pago. ¿Desea seguir comprando?');
        if (!seguirComprando) {
            // Si no desea seguir comprando, redirigir al menú
            mostrarMenu();
        }
    } else if (cambio > 0) {
        resultadoCalculadora.textContent = `Su cambio es de Q${cambio.toFixed(2)}.`;
    } else {
        resultadoCalculadora.textContent = `Faltan Q${Math.abs(cambio).toFixed(2)} para completar el pago.`;
    }
}

// Función para mostrar la sección de pago con tarjeta
function pagarTarjeta() {
    const menuSection = document.getElementById('menu');
    const carritoSection = document.getElementById('carrito');
    const calculadoraSection = document.getElementById('calculadora');

    menuSection.style.display = 'none';
    carritoSection.style.display = 'none';
    calculadoraSection.style.display = 'block';

    // Crear campos para llenar los datos de la tarjeta
    const calculadora = document.getElementById('calculadora');
    calculadora.innerHTML = `
     <h2>Llena los datos de tu tarjeta</h2>
        <input type="text" id="nombreTarjeta" placeholder="Nombre en la tarjeta">
        <input type="text" id="numeroTarjeta" placeholder="Número de tarjeta">
        <button onclick="realizarPagoTarjeta()">Realizar pago</button>
        
    `;
}

// Variable para rastrear si se ha realizado un pago
let pagoRealizado = false;

// Función para realizar el pago con tarjeta
function realizarPagoTarjeta() {
    if (pagoRealizado) {
        // Compra exitosa (segundo pago)
        alert('¡Pago realizado! Puede realizar otro pago.');
        // Redirigir al usuario al menú
        mostrarMenu();
    } else {
        // Compra exitosa (primer pago)
        alert('¡Pago realizado! Puede realizar otro pago.');
        // Eliminar los productos del carrito
        carrito.length = 0;
        // Redirigir al usuario al menú
        mostrarMenu();
        // Marcar que se ha realizado un pago
        pagoRealizado = true;
    }
}




