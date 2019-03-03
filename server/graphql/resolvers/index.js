// Profile stuff
import profileQueries from "./profile/queries";

// Industry stuff
import industryQueries from "./Industry/queries";

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
    ...profileQueries,
    ...industryQueries,
    ...problemQueries,
    ...categoryQueries,
    ...technologyQueries,
    ...advantageQueries,
  },
};

export default resolvers;
