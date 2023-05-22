import express from "express";
import LandingPageController from "../controllers/LandingPageController.js";
const router = express.Router();

/* GET home page. */
router.get('/', LandingPageController.landingPage);

export default router;
