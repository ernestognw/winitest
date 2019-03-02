import { Target } from "../../../db/models/";

const targetQueries = {
  targetRandom: async () => {
    const Qty = await Target.find().count();
    const random = Math.floor(Math.random() * Qty);
    return await Target.findOne().skip(random);
  }
};

export default targetQueries;
 