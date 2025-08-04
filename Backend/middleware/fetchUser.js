const jwt = require("jsonwebtoken");
const JWT_SECRET = "MyNameIsKrishnaSai";

const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send("Access token");
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    if (data) {
      req.user = data.user;
      next();
    }
  } catch (error) {
    return res.status(401).send("Access token");
  }
};

module.exports = fetchUser;
