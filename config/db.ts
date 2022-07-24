import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
  } catch (error) {
    console.error("Error on connect to database");
  }
}

export default connect;
