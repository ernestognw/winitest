import { Technology } from "../../../db/models/";

const technologyQueries = {
  technologyRandom: async () => {
    const Qty = await Technology.find().count();
    const random = Math.floor(Math.random() * Qty);
    return await Technology.findOne().skip(random);
  },
  technologiesRandom: async () => {
    const arrayLength = Math.ceil(Math.random() * 5)
    const Qty = await Technology.find().count();
    const random = Math.floor(Math.random() * Qty);
    const techArray = await Technology.find().skip(random);
    return await techArray.slice(0, arrayLength)
  }
};

export default technologyQueries;
 