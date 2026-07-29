import express from "express";
import setupCommonMiddleware from "#middleware/common/common.middleware";
import setupErrorMiddleware from "#middleware/error/error.middleware";
import databaseConnection from "#utils/db_connection/dbConnection.util";
import setupRouteMiddleware from "#middleware/route/route.middleware";


const app = express(); 

setupCommonMiddleware(app);
setupRouteMiddleware(app);  
setupErrorMiddleware(app); 

databaseConnection(app); 