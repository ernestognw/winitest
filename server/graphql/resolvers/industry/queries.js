import { Industry } from "../../../db/models/";

const industryQueries = {
  industryRandom: async () => {
    const Qty = await Industry.find().countDocuments();
    const random = Math.floor(Math.random() * Qty);
    return await Industry.findOne().skip(random);
  }
};

export default industryQueries;
 