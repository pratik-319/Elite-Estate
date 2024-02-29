import User from "../modules/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  //res.json({ message: "Hello world auth controller" });
  const { username, email, password } = req.body;
  // console.log(req.body);

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("user created successfuly!");
  } catch (error) {
    //if user already exit then send error
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    const validUSer = await User.findOne({ email });
    if (!validUSer) return next(errorHandler(404, 'User not found!'));
    const validPassword = bcrypt.compareSync(password, validUSer.password);
    if (!validPassword) return next(errorHandler(401, 'Invalid password / Wrong credentials'));
    //to do authen tication we use brower cookie store in the cookie JWT

    const token = jwt.sign({ id: validUSer._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUSer._doc;
    res
      .cookie('acceess_token', token, { httpOnly: true })
      .status(200)
      .json(rest);
    //cookie inside a brower
  } catch (error) {
    next(error);
  }
};
