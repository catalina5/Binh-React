const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user test is successful");
});

router.post(
  "userosttext",
  (req,
  (res) => {
    const username = req.body.username;
    console.log(username);
  })
);

module.exports = router;
