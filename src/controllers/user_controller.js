import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user";

const UserController = {
  async CreateUser(req, res) {
    try {
      const { firstName, lastName, password, email } = req.body;

      const existentUser = await User.find({ email });

      if (existentUser.length === 0) {
        const hashedPassword = await bcrypt.hash(password, 10);

        let newUser = await User.create({
          firstName,
          lastName,
          password: hashedPassword,
          email,
        });

        newUser = newUser.toObject();
        delete newUser["password"];

        return jwt.sign(
          newUser,
          process.env.TOKEN_SECRET,
          (err, token) => {
            if (!err) {
              return res
                .status(200)
                .json({ user: token, user_id: newUser._id });
            }
          }
        );
      }

      return res
        .status(400)
        .json({ message: "Email already exist!! please login" });
    } catch (error) {
      console.log(error)
      return res
        .status(400)
        .json({ message: "Error while registerering user" });
    }
  },
};

export default UserController;
