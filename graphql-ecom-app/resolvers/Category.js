const { products } = require("../data/db");

// Category resolver
exports.Category = {
  products: (parent, args, context) => {
    const { products } = context.db;
    console.log(parent);
    // parent use korle parent er id pabo
    const categoryId = parent.id;
    return products.filter((product) => product.categoryId === categoryId);
  },
};
