import express from "express"
import  getAllCities  from "../controller/city.controllers.js"

// Routes

const routes = express.Router();

routes.get('/city',getAllCities)


export default routes;