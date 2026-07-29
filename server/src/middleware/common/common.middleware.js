import express from "express";
import cors from "cors";
import envVariables from "#constants/env.constant";

const { nodeEnvironment, clientBaseURL } = envVariables;

function setupCommonMiddleware(app) {
  // app-level body json parser
  app.use(express.json());
  // cors connection
  if (nodeEnvironment !== "production") {
    app.use(
      cors({
        origin: clientBaseURL,
      }),
    );
  }
}

export default setupCommonMiddleware;
