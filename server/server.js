import express from "express";
import setupCommonMiddleware from "#middleware/common/common.middleware";
import setupErrorMiddleware from "#middleware/error/error.middleware";
import databaseConnection from "#utils/db_connection/dbConnection.util";


const app = express(); 

setupCommonMiddleware(app); 
setupErrorMiddleware(app); 

databaseConnection(app); 