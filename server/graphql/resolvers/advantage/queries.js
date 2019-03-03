import { Advantage } from "../../../db/models/";

const advantageQueries = {
  advantageRandom: async () => {
    const Qty = await Advantage.find().countDocuments();
    const random = Math.floor(Math.random() * Qty);
    return await Advantage.findOne().skip(random);
  }
};

export default advantageQueries;
 