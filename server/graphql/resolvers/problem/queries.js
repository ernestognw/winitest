import { Problem } from "../../../db/models/";

const problemQueries = {
  problemRandom: async () => {
    const Qty = await Problem.find().countDocuments();
    const random = Math.floor(Math.random() * Qty);
    return await Problem.findOne().skip(random);
  }
};

export default problemQueries;
 