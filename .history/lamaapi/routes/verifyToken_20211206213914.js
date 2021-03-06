const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    jwt.verify(token, process.env.JWT_SEC);
  } else {
    return res.status(401).json("Tài khoản chưa được xác thực");
  }
};
