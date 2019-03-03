import { Category } from "../../../db/models/";

const categoryQueries = {
  categoryRandom: async () => {
    const Qty = await Category.find().countDocuments();
    const random = Math.floor(Math.random() * Qty);
    return await Category.findOne().skip(random);
  }
};

export default categoryQueries;
 