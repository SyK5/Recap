import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const checkAuth = async (req, res, next) => {
  try {
    const token = req.cookies.Token;

    if (!token) {
      return res.status(401).json({
        message: "Nicht authentifiziert oder Benutzter nicht vorhanden",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      return res
        .status(401)
        .json({ message: "Token konnte nicht verifiziert werden" });
    }
    const user = await User.findById(decode.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Benutzer nicht gefunden" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error(
      "❌ Fehler beim Verifizieren des Tokens:",
      err.name,
      err.message
    );
    return res.status(401).json({ message: "Token ungültig oder abgelaufen" });
  }
};

export default checkAuth;
