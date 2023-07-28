class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(product) {
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
      console.error("Todos los campos son obligatorios.");
      return;
    }

    if (this.products.some((p) => p.code === product.code)) {
      console.error("El código del producto ya existe.");
      return;
    }

    const newProduct = {
      id: this.nextId,
      ...product,
    };

    this.products.push(newProduct);
    this.nextId++;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);

    if (!product) {
      console.error("Producto no encontrado.");
      return;
    }

    return product;
  }
}

module.exports = ProductManager;
