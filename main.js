const ProductManager = require('./ProductManager');

const filePath = 'products.json';

// Crear una instancia del gestor de productos
const productManager = new ProductManager(filePath);

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

// Actualizar producto por id
const productIdToUpdate = 1;
productManager.updateProduct(productIdToUpdate, { price: 150, stock: 15 });

// Obtener todos los productos después de la actualización
const updatedProducts = productManager.getProducts();
console.log("Productos después de la actualización:", updatedProducts);

// Eliminar producto por id
const productIdToDelete = 2;
productManager.deleteProduct(productIdToDelete);

// Obtener todos los productos después de la eliminación
const remainingProducts = productManager.getProducts();
console.log("Productos después de la eliminación:", remainingProducts);