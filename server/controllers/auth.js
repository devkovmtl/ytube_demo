import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();

    res.status(200).json("User has been created");
  } catch (error) {}
};

export const signin = async (req, res, next) => {};

export const googleAuth = async (req, res, next) => {};
