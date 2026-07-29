import express from "express";
import envVariables from "#constants/env.constant";

const { backendPort } = envVariables;

const app = express();

app.listen(backendPort, () => {
  console.log(
    `Server is up and running successfully on http://localhost:${backendPort}`,
  );
});
