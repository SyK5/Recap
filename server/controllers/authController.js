import asyncHandler from "../middleware/asyncHandler";
import CheckAuth from "../middleware/auth";


const Authenfication = CheckAuth(async(req, res, next) => {
    console.log(`Auth verifiziert: ${req.user}`);

    res.status(200).json({ user: req.user });
});