import jwt from "jsonwebtoken";

export const createSendToken = (res, status, user) => {
  const { JWT_EXP, JWT_SECRET, COOKIE_EXP, NODE_ENV } = process.env;
  const Token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: JWT_EXP });

  const isProduction = NODE_ENV === "production";

  const cookieOptions = {
    expires: new Date(Date.now() + Number(COOKIE_EXP) * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: isProduction ? "None" : "Lax",
  };

  res.cookie("Token", Token, cookieOptions);
  user.password = undefined;

  res.status(status).json({ success: true, status, user });
};
