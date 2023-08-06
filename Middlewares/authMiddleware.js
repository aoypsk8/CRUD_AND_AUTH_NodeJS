const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers["authtoken"];
    if (!token) {
      return res.status(401).send("No token");
    }
    const decoded = jwt.verify(token, "jwtsecret"); //jwtsecret defind in auth controller is == generate token
    req.user = decoded.user;
    next();
  } catch (error) {
    console.log(error);
    res.send("Server Error").status(500);
  }
};
