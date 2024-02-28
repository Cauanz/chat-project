const jwt = require("jsonwebtoken");
require("dotenv").config();

//! NÃO SEI COMO USA ISSO, DIGO COMO ENVIO O TOKEN QUANDO USAR ISSO

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, process.env.REACT_APP_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(500)
        .send({ message: "Failed to authenticate token!" + err });
    }

    req.userId = decoded.id;
    next();
  });
}
module.exports = verifyToken;
