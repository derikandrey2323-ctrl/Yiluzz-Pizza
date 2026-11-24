# Yiluzz Pizza - Carta digital QR

Proyecto de carta digital responsive desarrollado con HTML, CSS y JavaScript.

## 1. Abrir el proyecto
1. Descarga y descomprime `YiluzzPizza.zip`.
2. Abre Visual Studio Code.
3. Selecciona **Archivo > Abrir carpeta** y elige `YiluzzPizza`.
4. Abre `index.html` en el navegador. También puedes usar la extensión Live Server.

## 2. Cambiar productos y precios
Abre `js/app.js`. Al inicio encontrarás la lista `productos`.
Cada producto tiene:
- `nombre`: nombre que verá el cliente.
- `categoria`: Pizzas, Hamburguesas, Perros calientes, Salchipapas o Bebidas.
- `descripcion`: ingredientes o información.
- `precio`: valor en pesos colombianos, sin puntos ni signos.
- `imagen`: dirección de la fotografía.

Duplica un bloque de producto para agregar otro. Guarda los cambios y recarga la página.

IMPORTANTE: los precios incluidos son ejemplos de demostración. Reemplázalos por los precios reales antes de publicar.

## 3. Fotografías
Las imágenes de ejemplo se cargan desde Unsplash mediante Internet. Para usar fotografías propias:
1. Guarda cada fotografía dentro de la carpeta `img`.
2. En `js/app.js`, cambia el valor de `imagen` por una ruta como `img/pizza-pepperoni.jpg`.
3. Usa nombres sencillos, sin espacios ni tildes.

## 4. Publicar gratis con GitHub Pages
1. Crea una cuenta en https://github.com si todavía no tienes.
2. Crea un repositorio público llamado `yiluzz-pizza`.
3. Sube los archivos y carpetas del proyecto. `index.html` debe quedar en la raíz del repositorio.
4. En el repositorio entra a **Settings > Pages**.
5. En **Build and deployment**, selecciona **Deploy from a branch**.
6. Selecciona la rama `main` y la carpeta `/ (root)`, y pulsa **Save**.
7. Espera a que GitHub Pages publique el sitio. La dirección será parecida a:
   `https://TU-USUARIO.github.io/yiluzz-pizza/`

La dirección exacta aparece en Settings > Pages. Comprueba que abre en un celular antes de imprimir los QR.

## 5. Crear el código QR
1. Copia la dirección pública exacta que te dio GitHub Pages.
2. Abre un generador de códigos QR de confianza, por ejemplo https://www.qrcode-monkey.com/.
3. Selecciona URL, pega la dirección y genera el QR.
4. Descarga el QR en PNG o SVG.
5. Escanéalo con tu celular para probarlo.
6. Imprímelo y pégalo en las mesas.

Puedes imprimir el mismo QR en todas las mesas porque todos consultarán la misma carta.

## 6. Importante
- Esta carta es informativa: no tiene carrito, pagos ni envío de pedidos.
- El cliente consulta los productos y le pide al mesero.
- Cada cambio que hagas en los archivos debe subirse nuevamente a GitHub para actualizar la carta publicada.
- No compartas el QR hasta comprobar que la página publicada funciona correctamente.
