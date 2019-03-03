import { Profile } from "../../../db/models/";

const profileQueries = {
  profileRandom: async () => {
    const Qty = await Profile.find().countDocuments();
    const random = Math.floor(Math.random() * Qty);
    return await Profile.findOne().skip(random);
  }
};

export default profileQueries;
 