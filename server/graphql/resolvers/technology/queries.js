import { Technology } from "../../../db/models/";

const technologyQueries = {
  technologyRandom: async () => {
    const Qty = await Technology.find().count();
    const random = Math.floor(Math.random() * Qty);
    return await Technology.findOne().skip(random);
  }
};

export default technologyQueries;
 