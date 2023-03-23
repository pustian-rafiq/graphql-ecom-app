const { categories } = require("../data/db");

// Product resolver
exports.Product = {
  category: (parent, args, context) => {
    const { categories } = context.db;
    const categoryId = parent.categoryId;
    return categories.find((category) => category.id === categoryId);
  },
  reviews: ({ id }, args, context) => {
    const { reviews } = context.db;

    return reviews.filter((review) => review.productId === id);
  },
};
