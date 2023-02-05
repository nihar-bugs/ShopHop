const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username) {
    res.json({
      error: "Name is required",
    });
  }

  if (!password || password.length < 6) {
    res.json({
      error: "Password is required and should be atleast 6 character long",
    });
  }

  if (!email) {
    res.json({
      error: "Email is required",
    });
  }

  try {
    const exist = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (exist) {
      console.log("Entered 1st try");
      return res.json({ error: "Either Email or Username is taken" });
    }
  } catch (err) {
    console.log("EXISt ME DIKKAT");
  }

  const newUser = new User({
    username: username,
    email: email,
    password: CryptoJS.AES.encrypt(password, process.env.PASS_KEY).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.json(err.toString());
  }
});

module.exports = router;
