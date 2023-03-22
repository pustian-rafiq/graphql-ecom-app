const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./schema/schema");
const { Query, Category, Product } = require("./resolvers/resolvers");

// const { db } = require("./data/db");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
  },
  // context: {
  //   db,
  // },
});

const PORT = 8800;

server.listen().then(({ url }) => {
  console.log(`Server is running on port ${url}`);
});
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
