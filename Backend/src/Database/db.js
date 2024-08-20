import mongoose from "mongoose";
import { CONNECTION_STRING, DATABASE_NAME } from "../constants.js";



async function dbConnect() {
  try {
    const connetion = await mongoose.connect(`${CONNECTION_STRING}${DATABASE_NAME}`);

    if (!connetion) {
      console.log("failed to connect");
    }

    console.log("Connected to the database");
  } catch (error) {
    console.log(" db.js try catch error ", error);
  }
}

export { dbConnect };
