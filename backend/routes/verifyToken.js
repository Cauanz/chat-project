const jwt = require("jsonwebtoken");
require("dotenv").config();

function verifyToken(req, res, next) { //conhecido como authenticateToken em outros lugares
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(' ')[1];

  if (!authHeader) {
    return res.status(401).send({ message: "No token provided!" });
  }

  // console.log("Authentication:", authHeader); //* DEBUG
  /*   console.log(token); */ //* DEBUG

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if(err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
module.exports = verifyToken;
