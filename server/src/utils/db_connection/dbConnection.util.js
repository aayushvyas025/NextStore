import envVariables from "#constants/env.constant";
import databaseConfig from "#configs/database/database.config";

const { backendPort } = envVariables;

async function databaseConnection(app) {
  try {
    await databaseConfig();
    console.log(`Database is connected successfully`);
    app.listen(backendPort, () => {
      console.log(
        `Server is up and running successfully on http://localhost:${backendPort}`,
      );
    });
  } catch (error) {
    console.log(`Error, while connecting with database ${error.message}`);
  }
}

export default databaseConnection;
