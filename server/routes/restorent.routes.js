import express from 'express'
import { addReatorent } from '../controller/restorent.controller.js';

const routes = express.Router();

routes.post("/registerrestorent",addReatorent)

export default routes