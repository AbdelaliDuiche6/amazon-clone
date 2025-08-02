const express = require("express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");


const authRouter = express.Router();

authRouter.post("/api/signup", async (req, res) => {
  try {
    // get all data from the client
    const { name, email, password } = req.body;

    // post data into the database
    const exestingUser = await User.findOne({ email });
    if (exestingUser) {
      return res
        .status(400)
        .json({ msg: "A user with the same email already exists!" });
    }
    const hashedPasseord = await bcryptjs.hash(password, 8);
    let user = new User({
      email,
      password: hashedPasseord,
      name,
    });
    user = await user.save();
    // return that data to the user
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = authRouter;
