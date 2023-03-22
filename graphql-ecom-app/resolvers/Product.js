const { categories } = require("../data/db");

// Product resolver
exports.Product = {
  category: (parent, args, context) => {
    const categoryId = parent.categoryId;
    return categories.find((category) => category.id === categoryId);
  },
};
