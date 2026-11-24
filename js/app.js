const productos = [
    // PIZZAS
    { nombre: "Hawaiana", categoria: "Pizzas", precio: 9000, imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600" },
    { nombre: "Mexicana", categoria: "Pizzas", precio: 9000, imagen: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600" },
    { nombre: "Ranchera", categoria: "Pizzas", precio: 9000, imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600" },
    { nombre: "Distraída", categoria: "Pizzas", precio: 9000, imagen: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600" },
    { nombre: "Costillas", categoria: "Pizzas", precio: 9000, imagen: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600" },
    { nombre: "Pollo con champiñones", categoria: "Pizzas", precio: 9000, imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600" },
    { nombre: "Pollo con tocineta", categoria: "Pizzas", precio: 9000, imagen: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600" },
    { nombre: "Campesina", categoria: "Pizzas", precio: 9000, imagen: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600" },
    { nombre: "Criolla", categoria: "Pizzas", precio: 9000, imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600" },
    { nombre: "Carne", categoria: "Pizzas", precio: 9000, imagen: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600" },
    { nombre: "Camarones", categoria: "Pizzas", precio: 10000, imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600" },

    // HAMBURGUESAS
    { nombre: "Hamburguesa sencilla", categoria: "Hamburguesas", precio: 10000, imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600" },
    { nombre: "Hamburguesa sencilla con papas", categoria: "Hamburguesas", precio: 12000, imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600" },
    { nombre: "Hamburguesa doble carne", categoria: "Hamburguesas", precio: 13000, imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600" },
    { nombre: "Hamburguesa doble carne con papas", categoria: "Hamburguesas", precio: 15000, imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600" },
    { nombre: "Hamburguesa de la casa", categoria: "Hamburguesas", precio: 14000, imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600" },
    { nombre: "Hamburguesa de la casa con papas", categoria: "Hamburguesas", precio: 16000, imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600" },

    // PERROS CALIENTES
    { nombre: "Perro caliente", categoria: "Perros calientes", precio: 10000, imagen: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?w=600" },
    { nombre: "Perro caliente con papas", categoria: "Perros calientes", precio: 12000, imagen: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?w=600" },

    // SALCHIPAPAS Y PEPITOS
    { nombre: "Salchipapa", categoria: "Salchipapas", precio: 15000, imagen: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600" },
    { nombre: "Pepito", categoria: "Pepitos", precio: 15000, imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600" },

    // BEBIDAS PERSONALES
    ...["Manzana", "Colombiana", "Seven Up", "Ginger", "Cuatro", "Hipinto de piña"].map(nombre => ({
        nombre: nombre + " personal",
        categoria: "Bebidas",
        precio: 3000,
        imagen: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600"
    })),

    { nombre: "Coca-Cola personal", categoria: "Bebidas", precio: 3500, imagen: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600" },
    { nombre: "Agua personal", categoria: "Bebidas", precio: 2500, imagen: "https://images.unsplash.com/photo-1560023907-5f339617ea30?w=600" },
    { nombre: "Soda", categoria: "Bebidas", precio: 3000, imagen: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" },

    // JUGOS HIT PERSONALES
    ...["Mango", "Naranja piña", "Mora", "Frutas tropicales"].map(nombre => ({
        nombre: "Jugo HIT personal " + nombre,
        categoria: "Bebidas",
        precio: 3500,
        imagen: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600"
    })),

    // JUGOS HIT DE LITRO
    ...["Mora", "Mango", "Naranja piña", "Naranja", "Frutas tropicales"].map(nombre => ({
        nombre: "Jugo HIT litro " + nombre,
        categoria: "Bebidas",
        precio: 5000,
        imagen: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600"
    })),

    // GASEOSAS DE LITRO
    ...["Manzana", "Colombiana", "Pepsi", "Coca-Cola", "Naranja", "Uva", "Seven Up"].map(nombre => ({
        nombre: nombre + " litro",
        categoria: "Bebidas",
        precio: 5000,
        imagen: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600"
    })),

    // GASEOSAS DE LITRO Y CUARTO
    ...["Manzana", "Colombiana", "Hipinto de piña", "Ginger", "Cuatro"].map(nombre => ({
        nombre: nombre + " litro y cuarto",
        categoria: "Bebidas",
        precio: 7000,
        imagen: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600"
    })),

    { nombre: "Coca-Cola litro y cuarto", categoria: "Bebidas", precio: 7500, imagen: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600" },
    { nombre: "Coca-Cola 3 litros", categoria: "Bebidas", precio: 12000, imagen: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600" }
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
                <p class="product-price">${formatoPrecio(producto.precio)}</p>
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