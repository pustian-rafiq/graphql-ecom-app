// parent parameters theke parent resolvers er id pai jmon  Product reolver theke category resolver call dile product er categoryId pai
// args params theke passing all arguments gulo pai
// context params theke database pai

exports.Query = {
  // product
  products: (parent, args, context) => {
    const { products, reviews } = context.db;
    // const { onSale } = args ? args?.filter : null;
    const onSale = args ? args?.filter?.onSale : null;
    const avgRating = args ? args?.filter?.avgRating : null;

    let filteredProducts = products;

    if (onSale === true) {
      filteredProducts = filteredProducts.filter(
        (product) => product.onSale === onSale
      );
    }
    if (onSale === false) {
      filteredProducts = filteredProducts.filter(
        (product) => product.onSale === onSale
      );
    }

    // Filter products according to avg rating
    if ([1, 2, 3, 4, 5].includes(avgRating)) {
      filteredProducts = filteredProducts.filter((product) => {
        let sumRating = 0;
        let numberOfReviews = 0;

        reviews.forEach((review) => {
          if (review.productId === product.id) {
            sumRating += review.rating;
            numberOfReviews++;
          }
        });
        const avgProductRating = sumRating / numberOfReviews;
        console.log("avgProductRating", avgProductRating, product.name);
        return avgProductRating >= avgRating;
      });
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
  categories: (parent, args, context) => {
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
