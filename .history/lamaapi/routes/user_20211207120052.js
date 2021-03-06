const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();
const CryptoJS = require("crypto-js");

// Update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Xóa tài khoản thành công!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get user
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await User.findById(req.params.id);
    res.status(200).json("Xóa tài khoản thành công!");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
