import express from 'express'
import { addReatorent, getReatorent } from '../controller/restorent.controller.js';
import router from './fooditem.routes.js';

const routes = express.Router();

routes.post("/registerrestorent",addReatorent)
router.get("/getrestorent",getReatorent)

export default routes