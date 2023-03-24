const { v4: uuid } = require("uuid");

exports.Mutation = {
  addCategory: (parent, { input }, context) => {
    const { name } = input;
    console.log(name);
    const { categories } = context.db;

    const newCategory = {
      id: uuid(),
      name,
    };

    categories.push(newCategory);

    return newCategory;
  },
  addProduct: (parent, { input }, context) => {
    const { products } = context.db;
    const { name, description, quantity, image, price, onSale, categoryId } =
      input;

    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      image,
      price,
      onSale,
      categoryId,
    };

    products.push(newProduct);

    return newProduct;
  },
  addReview: (parent, { input }, context) => {
    const { reviews } = context.db;
    const { date, title, comment, rating, productId } = input;

    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    };

    reviews.push(newReview);

    return newReview;
  },
};
