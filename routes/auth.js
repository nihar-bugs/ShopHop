const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // PERFORMING VALIDATION

  if (!username) {
    return res.json({
      error: "Name is required",
    });
  }

  if (!email) {
    return res.json({
      error: "Email is required",
    });
  }

  if (!password || password.length < 6) {
    return res.json({
      error: "Password is required and should be atleast 6 character long",
    });
  }

  try {
    const exist = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (exist) {
      return res.json({ error: "Either Email or Username is taken" });
    }
  } catch (err) {
    console.log("Error finding user:", err);
  }

  // SAVING USER TO DATABASE

  const newUser = new User({
    username: username,
    email: email,
    password: CryptoJS.AES.encrypt(password, process.env.PASS_KEY).toString(),
  });

  try {
    const savedUser = await newUser.save();

    return res.json(savedUser);
  } catch (err) {
    return res.json(err.toString());
  }
});

// LOGIN

router.post("/login", async (req, res) => {
  // Fetching login credentials from incoming request

  const { username, password: reqPassword } = req.body;

  // PERFORMING VALIDATION

  if (!username || username === "") {
    return res.json({
      error: "Name is required",
    });
  }

  if (!reqPassword || reqPassword.length < 6 || reqPassword == "") {
    return res.json({
      error: "Password is required and should be atleast 6 character long",
    });
  }

  try {
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(401).json({ error: "Wrong credentials" });
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_KEY
    ).toString(CryptoJS.enc.Utf8);

    if (reqPassword !== hashedPassword) {
      return res.status(401).json({ error: "Incorrect Password" });
    }

    const authToken = jwt.sign({ id: user._id }, process.env.JWT_SEC_KEY, {
      expiresIn: "10d",
    });

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, authToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
