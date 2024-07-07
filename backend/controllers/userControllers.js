import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

/**
 * @desc    Auth user
 * @route   POST /api/users/login
 * @acces   public
 */
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password.");
  }
});

export { authUser };
