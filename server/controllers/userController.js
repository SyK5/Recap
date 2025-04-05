import bcrypt from "bcrypt";

import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { createSendToken } from "../config/jwt.js";

export const signup = asyncHandler(async (req, res, next) => {
  const { password, ...userData } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({ ...userData, password: hashedPassword });
  createSendToken(res, 201, user);
});
