import e from "express";
import { Authenfication } from "../controllers/authController.js";

const router = e.Router();

router.get("/check", Authenfication);

export default router;
