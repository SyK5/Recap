import asyncHandler from "../middleware/asyncHandler.js";
import CheckAuth from "../middleware/auth.js";

export const Authenfication = [
  CheckAuth,
  asyncHandler(async (req, res) => {
    res.status(200).json({ user: req.user });
  }),
];
