import jwt from "jsonwebtoken";
import User from "../models/userModel";

const checkAuth = async (req, res, next) => {
  try {
    const token = req.cookies.Token;
    if (!token) {
      return res.status(401).json({ message: "Nicht authentifiziert" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Benutzer nicht gefunden" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token ungültig oder abgelaufen" });
  }
};

export default checkAuth;
