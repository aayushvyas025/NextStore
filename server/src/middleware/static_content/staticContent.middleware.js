import express from "express";
import envVariables from "#constants/env.constant";
import path from "path";

const { nodeEnvironment } = envVariables;
const __dirname = path.resolve();

function setupStaticContentMiddleware(app) {
  if (nodeEnvironment === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));
    app.get("*", (request, response) => {
      response.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }
}

export default setupStaticContentMiddleware;
