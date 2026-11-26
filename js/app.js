const productos = [
    // PIZZAS
    { nombre: "Hawaiana", categoria: "Pizzas", precio: 10000, imagen: "pizzas/hawaiana.jpg", descripcion: "Jamón, Piña, Queso." },
    { nombre: "Pollo con champiñones", categoria: "Pizzas", precio: 10000, imagen: "pizzas/pollo-champinones.jpg", descripcion: "Jamón, Champiñones, Queso, Pollo." },
    { nombre: "Campesina", categoria: "Pizzas", precio: 10000, imagen: "pizzas/campesina.jpg", descripcion: "Jamón, Queso, Carne desmechada, Plátano maduro, Pimentón, Cebolla." },
    { nombre: "Camarones", categoria: "Pizzas", precio: 11000, imagen: "pizzas/camarones.jpg", descripcion: "Jamón, Queso, Camarones, Pimentón, Cebolla." },
    { nombre: "Ranchera", categoria: "Pizzas", precio: 10000, imagen: "pizzas/ranchera.jpg", descripcion: "Jamón, Queso, Chorizo." },
    { nombre: "Mexicana", categoria: "Pizzas", precio: 10000, imagen: "pizzas/mexicana.jpg", descripcion: "Jamón, Carne molida, Queso, Tostacos, Pimentón, Jalapeños." },
    { nombre: "Pollo con tocineta", categoria: "Pizzas", precio: 10000, imagen: "pizzas/pollo-tocineta.jpg", descripcion: "Jamón, Queso, Pollo, Tocineta." },
    { nombre: "Criolla", categoria: "Pizzas", precio: 10000, imagen: "pizzas/criolla.jpg", descripcion: "Jamón, Carne molida, Queso, Maíz." },
    { nombre: "Carne", categoria: "Pizzas", precio: 10000, imagen: "pizzas/carne.jpg", descripcion: "Jamón, Carne molida, Queso." },
    { nombre: "Distraída", categoria: "Pizzas", precio: 10000, imagen: "pizzas/distraida.jpg", descripcion: "Jamón, Champiñones, Queso, Carne picada, Maíz, Pimentón, Cebolla." },
    { nombre: "Costillas", categoria: "Pizzas", precio: 10000, imagen: "pizzas/costillas.jpg", descripcion: "Jamón, Queso, Costillitas." },

    // HAMBURGUESAS
    { nombre: "Hamburguesa sencilla", categoria: "Hamburguesas", precio: 11000, imagen: "hamburguesas/sencilla.jpg", descripcion: "Pan, Lechuga, Cebolla, Tomate, Carne, Queso, Jamón, Queso, Papa fosforito." },
    { nombre: "Hamburguesa con papas", categoria: "Hamburguesas", precio: 13000, imagen: "hamburguesas/con-papas.jpg", descripcion: "Pan, Lechuga, Cebolla, Tomate, Carne, Queso, Jamón, Queso, Papa fosforito, Porción de papas." },
    { nombre: "Hamburguesa doble carne", categoria: "Hamburguesas", precio: 14000, imagen: "hamburguesas/doble-carne.jpg", descripcion: "Pan, Lechuga, Cebolla, Tomate, Dos carnes, Queso, Jamón, Queso, Papa fosforito." },
    { nombre: "Hamburguesa doble carne con papas", categoria: "Hamburguesas", precio: 16000, imagen: "hamburguesas/doble-carne-papas.jpg", descripcion: "Pan, Lechuga, Cebolla, Tomate, Dos carnes, Queso, Jamón, Queso, Papa fosforito, Porción de papas." },
    { nombre: "Hamburguesa de la casa", categoria: "Hamburguesas", precio: 14000, imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600" },
    { nombre: "Hamburguesa de la casa con papas", categoria: "Hamburguesas", precio: 16000, imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600" },

    // PERROS CALIENTES
    { nombre: "Perro sencillo", categoria: "Perros calientes", precio: 11000, imagen: "perros/perro-sencillo.jpg", descripcion: "Pan, Salchicha, Papa fosforito, Queso." },
    { nombre: "Perro con papas", categoria: "Perros calientes", precio: 13000, imagen: "perros/perro-con-papas.jpg", descripcion: "Pan, Salchicha, Papa fosforito, Queso, Porción de papas." },

    // SALCHIPAPAS Y PEPITOS
    { nombre: "Salchipapa", categoria: "Salchipapas", precio: 15000, imagen: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600" },
    { nombre: "Pepito", categoria: "Pepitos", precio: 15000, imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600" },

    // BEBIDAS PERSONALES
    
    // BEBIDAS PERSONALES
    { nombre: "Manzana personal", categoria: "Bebidas", precio: 3000, imagen: "bebidas/manzana-personal.jpg" },
    { nombre: "Colombiana personal", categoria: "Bebidas", precio: 3000, imagen: "bebidas/colombiana-personal.jpg" },
    { nombre: "Seven Up personal", categoria: "Bebidas", precio: 3000, imagen: "bebidas/sevenup-personal.jpg" },
    { nombre: "Ginger personal", categoria: "Bebidas", precio: 3000, imagen: "bebidas/ginger-personal.jpg" },
    { nombre: "Cuatro personal", categoria: "Bebidas", precio: 3000, imagen: "bebidas/cuatro-personal.jpg" },
    { nombre: "Hipinto de piña personal", categoria: "Bebidas", precio: 3000, imagen: "bebidas/hipintopiña-personal.jpg" },

    { nombre: "Coca-Cola personal", categoria: "Bebidas", precio: 3500, imagen: "bebidas/cocacola-personal.jpg" },
    { nombre: "Agua personal", categoria: "Bebidas", precio: 2500, imagen: "bebidas/agua-personal.jpg" },
    { nombre: "Soda", categoria: "Bebidas", precio: 3000, imagen: "bebidas/soda-personal.jpg" },

    // JUGOS HIT PERSONALES
    { nombre: "Jugo HIT personal Mango", categoria: "Bebidas", precio: 3500, imagen: "bebidas/mango-personal.jpg" },
    { nombre: "Jugo HIT personal Naranja piña", categoria: "Bebidas", precio: 3500, imagen: "bebidas/naranjapiña-personal.jpg" },
    { nombre: "Jugo HIT personal Mora", categoria: "Bebidas", precio: 3500, imagen: "bebidas/mora-personal.jpg" },
    { nombre: "Jugo HIT personal Frutas Tropicales", categoria: "Bebidas", precio: 3500, imagen: "bebidas/frutastropical-personal.jpg" },

   
// JUGOS HIT DE LITRO
{ nombre: "Jugo HIT litro Mora", categoria: "Bebidas", precio: 5000, imagen: "bebidas/mora-litro.jpg" },
{ nombre: "Jugo HIT litro Mango", categoria: "Bebidas", precio: 5000, imagen: "bebidas/mango-litro.jpg" },
{ nombre: "Jugo HIT litro Naranja piña", categoria: "Bebidas", precio: 5000, imagen: "bebidas/naranjapiña-litro.jpg" },
{ nombre: "Jugo HIT litro Naranja", categoria: "Bebidas", precio: 5000, imagen: "bebidas/naranja-litro.jpg" },
{ nombre: "Jugo HIT litro Frutas Tropicales", categoria: "Bebidas", precio: 5000, imagen: "bebidas/frutastropical-litro.jpg" },

// GASEOSAS DE LITRO
{ nombre: "Manzana litro", categoria: "Bebidas", precio: 5000, imagen: "bebidas/manzana-litro.jpg" },
{ nombre: "Colombiana litro", categoria: "Bebidas", precio: 5000, imagen: "bebidas/colombiana-litro.jpg" },
{ nombre: "Pepsi litro", categoria: "Bebidas", precio: 5000, imagen: "bebidas/pepsi-litro.jpg" },
{ nombre: "Coca-Cola litro", categoria: "Bebidas", precio: 5000, imagen: "bebidas/cocacola-litro.jpg" },
{ nombre: "Naranja litro", categoria: "Bebidas", precio: 5000, imagen: "bebidas/gaseosanaranja-litro.jpg" },
{ nombre: "Uva litro", categoria: "Bebidas", precio: 5000, imagen: "bebidas/uva-litro.jpg" },
{ nombre: "Seven Up litro", categoria: "Bebidas", precio: 5000, imagen: "bebidas/sevenup-litro.jpg" },


   
// GASEOSAS CUATRO
{ nombre: "Manzana 1.5L", categoria: "Bebidas", precio: 7000, imagen: "bebidas/manzana-cuatro.jpg" },
{ nombre: "Colombiana 1.5L", categoria: "Bebidas", precio: 7000, imagen: "bebidas/colombiana-cuatro.jpg" },
{ nombre: "Hipinto de Piña 1.5L", categoria: "Bebidas", precio: 7000, imagen: "bebidas/hipintopiña-cuatro.jpg" },
{ nombre: "Ginger 1.5L", categoria: "Bebidas", precio: 7000, imagen: "bebidas/ginger-cuatro.jpg" },
{ nombre: "Cuatro 1.5L", categoria: "Bebidas", precio: 7000, imagen: "bebidas/cuatro-cuatro.jpg" },

// COCA-COLA CUATRO
{ nombre: "Coca-Cola 1.5L", categoria: "Bebidas", precio: 7500, imagen: "bebidas/cocacola-cuatro.jpg" },

// GASEOSAS TRESLITO
{ nombre: "Coca-Cola 3L", categoria: "Bebidas", precio: 12000, imagen: "bebidas/cocacola-tres.jpg" },

];

// ELEMENTOS DEL HTML
const contenedor = document.getElementById("productGrid");
const botones = document.querySelectorAll(".category");
const buscador = document.getElementById("searchInput");
const mensajeVacio = document.getElementById("emptyState");
const contador = document.getElementById("resultsCount");
const anio = document.getElementById("year");

let categoriaActual = "Todos";

// FORMATO DE PRECIOS
function formatoPrecio(precio) {
    return precio.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    });
}

// MOSTRAR PRODUCTOS
function mostrarProductos() {
    const busqueda = buscador.value.toLowerCase().trim();

    const filtrados = productos.filter(producto => {
        const coincideCategoria =
            categoriaActual === "Todos" ||
            producto.categoria === categoriaActual;

        const coincideBusqueda =
            producto.nombre.toLowerCase().includes(busqueda);

        return coincideCategoria && coincideBusqueda;
    });

    contenedor.innerHTML = "";

    filtrados.forEach(producto => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "product-card";

    tarjeta.innerHTML = `
        <img class="product-image"
         src="${producto.imagen}"
         alt="${producto.nombre}"
         loading="lazy">

    <div class="product-info">
        <h3>${producto.nombre}</h3>

        ${producto.descripcion ? `
            <p class="product-description">
                ${producto.descripcion}
            </p>
        ` : ""}

        <p class="product-price">
            ${formatoPrecio(producto.precio)}
        </p>
    </div>
    `;

    contenedor.appendChild(tarjeta);
});

    mensajeVacio.hidden = filtrados.length > 0;

    contador.textContent =
        filtrados.length + (filtrados.length === 1 ? " producto" : " productos");
}

// FILTRAR POR CATEGORÍA
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        botones.forEach(item => item.classList.remove("active"));

        boton.classList.add("active");
        categoriaActual = boton.dataset.category;

        mostrarProductos();
    });
});

// BUSCADOR
buscador.addEventListener("input", mostrarProductos);

// AÑO DEL PIE DE PÁGINA
anio.textContent = new Date().getFullYear();

// MOSTRAR TODO AL ABRIR LA PÁGINA
mostrarProductos()