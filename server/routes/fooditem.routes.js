import express from 'express';
import { getFoodItems } from '../controller/foodItem.controller.js';

const router = express.Router();

router.get('/fooditem', getFoodItems);

export default router;