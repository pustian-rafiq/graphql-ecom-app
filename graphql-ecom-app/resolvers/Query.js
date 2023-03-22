const { categories, products } = require("../data/db");

exports.Query = {
  userNames: () => {
    return ["Rahim", "Karim", "Tamim"];
  },

  // product resolvers
  products: () => {
    return products;
  },
  product: (parent, args, context) => {
    const { id } = args;
    const product = products.find((product) => product.id === id);

    if (!product) {
      return null;
    }
    return product;
  },

  // category resolvers
  categories: () => {
    return categories;
  },
  category: (parent, args, context) => {
    const { id } = args;
    const category = categories.find((data) => data.id === id);

    if (!category) {
      return null;
    }
    return category;
  },
};
