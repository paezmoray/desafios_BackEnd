const ProductManager = require('./ProductManager');

// Crear una instancia del gestor de productos
const productManager = new ProductManager();

// Obtener todos los productos devuelve un arreglo vacío
const allProducts = productManager.getProducts();
console.log("Todos los productos:", allProducts);

// Agregar productos
productManager.addProduct({
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
});

productManager.addProduct({
    title: 'Producto 1',
    description: 'Descripción del Producto 1',
    price: 20,
    thumbnail: 'ruta/imagen1.jpg',
    code: '12345',
    stock: 10,
});

productManager.addProduct({
    title: 'Producto 2',
    description: 'Descripción del Producto 2',
    price: 30,
    thumbnail: 'ruta/imagen2.jpg',
    code: '67890',
    stock: 5,
});

// Obtener todos los productos recien agregados
console.log("Todos los productos:", allProducts);

// Obtener producto por id
const productIdToFind = 2;
const foundProduct = productManager.getProductById(productIdToFind);
console.log("Producto encontrado:", foundProduct);
