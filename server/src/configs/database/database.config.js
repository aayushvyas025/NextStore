import envVariables from "#constants/env.constant";
import mongoose from "mongoose";

const { mongodbUri } = envVariables;

const databaseConfig = async () => {
  try {
    await mongoose.connect(mongodbUri);
    console.log(`Database connection establish successfully`); 
  } catch (error) {
    console.error(`Error, while configure database ${error.message}`);
    process.exit(1);
  }
};

export default databaseConfig;
