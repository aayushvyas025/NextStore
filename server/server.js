import databaseConnection from "#utils/db_connection/dbConnection.util";
import express from "express";


const app = express();

databaseConnection(app); 