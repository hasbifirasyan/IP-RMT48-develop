const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

module.exports = class UserController {
  static async createUser(req, res, next) {
    try {
      let { email, password, username } = req.body;
      const user = await User.create({
        email,
        password,
        username,
      });
      res.status(201).json({ id: user.id, email: user.email });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      if (!email) {
        throw { name: "EntityEmpty", message: "Email is required" };
      }
      if (!password) {
        throw { name: "EntityEmpty", message: "Password is required" };
      }

      const user = await User.findOne({ where: { email } });

      if (!user || !comparePassword(password, user.password)) {
        throw {
          name: "InvalidAuthorization",
          message: "Invalid email/password!",
        };
      }

      const access_token = signToken({ id: user.id });
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }

  static async googleLogin(req, res, next) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
};
