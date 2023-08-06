const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGUISTER \\
exports.register = async (req, res) => {
  try {
    const { name, password } = req.body;
    var user = await UserModel.findOne({ name });
    if (user) {
      return res.status(400).send("There are user already !!");
    }

    const salt = await bcrypt.genSalt(10);
    user = new UserModel({
      name,
      password,
    });

    user.password = await bcrypt.hash(password, salt);
    user.save();
    res.send("Register Sccuss !!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

// LOGIN \\
exports.login = async (req, res) => {
  try {
    const { name, password } = req.body;
    var user = await UserModel.findOneAndUpdate({ name }, { new: true });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).send("Password is not match");

      const payload = {
        user: {
          name: user.name,
        },
      };

      jwt.sign(payload, "jwtsecret", { expiresIn: "2h" }, (error, token) => {
        if (error) throw error;
        res.json({ token, payload });
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
