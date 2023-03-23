const { categories, products } = require("../data/db");

exports.Query = {
  // product
  products: (parent, args, context) => {
    const { products } = context.db;
    const { onSale } = args.filter;

    let filteredProducts = products;

    if (onSale) {
      filteredProducts = filteredProducts.filter((product) => product.onSale);
    }
    return filteredProducts;
  },
  product: (parent, args, context) => {
    const { products } = context.db;
    const { id } = args;
    const product = products.find((product) => product.id === id);

    if (!product) {
      return null;
    }
    return product;
  },

  // categories
  categories: () => {
    const { categories } = context.db;
    return categories;
  },
  category: (parent, args, context) => {
    const { categories } = context.db;
    const { id } = args;
    const category = categories.find((data) => data.id === id);

    if (!category) {
      return null;
    }
    return category;
  },

  // Reviews
  reviews: (parent, args, context) => {
    const { reviews } = context.db;
    return reviews;
  },
};
