import e from "express";
import { signup } from "../controllers/userController.js";

const router = e.Router();

router.post('/signup', signup);

export default router;
