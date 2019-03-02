// Target stuff
import targetQueries from "./target/queries";

// Problem stuff
import problemQueries from "./problem/queries";

// Category stuff
import categoryQueries from "./category/queries";

// Technology stuff
import technologyQueries from "./technology/queries";

// Advantage stuff
import advantageQueries from "./advantage/queries";


const resolvers = {
  Query: {
    ...targetQueries,
    ...problemQueries,
    ...categoryQueries,
    ...technologyQueries,
    ...advantageQueries,
  },
};

export default resolvers;
