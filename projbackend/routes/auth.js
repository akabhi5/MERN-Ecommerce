const express = require("express");
const router = express.Router();
const { signup, signin, signout, isSignedIn } = require("../controllers/auth");
const { check } = require("express-validator");

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("name must be at least 3 chars long"),
    check("email").isEmail().withMessage("enter a valid email"),
    check("password")
      .isLength({ min: 3 })
      .withMessage("password must be at least 3 chars long"),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("enter a valid email"),
    check("password")
      .isLength({ min: 3 })
      .withMessage("password field is required"),
  ],
  signin
);

router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req, res) => {
  res.send("a protected route");
});

module.exports = router;
