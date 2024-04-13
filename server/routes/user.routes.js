import express from "express"
import { login, register } from "../controller/user.controller.js";

const routes = express.Router();

routes.post('/register',register)
routes.post('/login',login)

export default routes;