const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(401).json("Wrong credentials");
    }

    const hashPassword = Crypto.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const password = hashPassword.toString(Crypto.enc.Utf8);
    password !== req.body.password && res.status(401).json("Wrong credentials");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
