import "reflect-metadata"; // We need this in order to use @Decorators

import config from "./config";

import express from "express";

import Logger from "./loaders/logger";

import cors from "cors";

async function startServer() {
  const app = express();

  /**
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   **/
  // await require('./loaders').default({ expressApp: app });
  app.get("/status", (req, res) => {
    res.write("Here at Tosiden ");
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  app.enable("trust proxy");

  app.use(cors());

  app.use(require("method-override")());

  app
    .listen(config.port, () => {
      Logger.info(`
     
      🛡️  Server listening on port: ${config.port} 🛡️
      
    `);
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
