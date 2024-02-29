const jwt = require("jsonwebtoken");
require("dotenv").config();

//! NÃO SEI COMO USA ISSO, DIGO COMO ENVIO O TOKEN QUANDO USAR ISSO

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).send({ message: "No token provided!" });
  }

  console.log("Authentication:", authHeader);

  const token = authHeader.split(" ")[1];

  /*   console.log(token); */ //* DEBUG

  jwt.verify(token, process.env.REACT_APP_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(500)
        .send({ message: "Failed to authenticate token! " + err });
    }
    /*     console.log(decoded); */ //* DEBUG
    req.userId = decoded.userId;
    /*     console.log(decoded.userId); */ //* DEBUG
    next();
  });
}
module.exports = verifyToken;
