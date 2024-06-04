const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT = '2994A49B6EB1D919FCB922D861443'

function verifyToken(req, res, next) { //conhecido como authenticateToken em outros lugares
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(' ')[1];

  if (!authHeader) {
    return res.status(401).send({ message: "No token provided!" });
  }

  // console.log("Authentication:", authHeader); //* DEBUG
  /*   console.log(token); */ //* DEBUG

  jwt.verify(token, JWT, (err, user) => {
    if(err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
module.exports = verifyToken;
