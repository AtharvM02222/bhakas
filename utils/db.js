import mongoose from "mongoose";

export default async function () {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("hogya shyd!!")
  }
    catch (bhakass) {
    console.log(bhakass);
    }
}
