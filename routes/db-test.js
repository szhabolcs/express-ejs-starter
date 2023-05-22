import express from "express";
import DBTestController from "../controllers/DBTestController.js";
const router = express.Router();

/* GET home page. */
router.get('/', DBTestController.testPage);

export default router;