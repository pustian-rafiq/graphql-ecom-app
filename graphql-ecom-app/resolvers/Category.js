const { products } = require("../data/db");

// Category resolver
exports.Category = {
  products: (parent, args, context) => {
    const { products } = context.db;

    // parent use korle parent er id pabo
    const categoryId = parent.id;
    // const { onSale } = args.filter;
    const onSale = args ? args?.filter?.onSale : null;
    const categoryProducts = products.filter(
      (product) => product.categoryId === categoryId
    );

    let filteredCategoryProducts = categoryProducts;

    if (onSale === true) {
      filteredCategoryProducts = filteredCategoryProducts.filter(
        (product) => product.onSale
      );
    }

    if (onSale === false) {
      console.log(onSale);
      filteredCategoryProducts = filteredCategoryProducts.filter(
        (product) => !product.onSale
      );
    }

    // filter parameters pass korle filtering data dibe
    // filter parameters pass na korle all data dibe
    // filter parameters optional for filtering
    return filteredCategoryProducts;
  },
};
