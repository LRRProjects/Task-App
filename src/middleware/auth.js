const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, "helloIamtokenphrase");

    const user = await User.findOne({ id: decoded._id, "tokens.token": token });

    if (!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please Authenticate" });
  }
};

module.exports = auth;