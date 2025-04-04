import CheckAuth from "../middleware/auth";

app.get("/api/auth", CheckAuth, (req, res) => {
  console.log(`Auth verifiziert: ${req.user}`);

  res.status(200).json({ user: req.user });
});
