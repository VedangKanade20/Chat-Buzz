import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

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
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password.");
  }
});

/**
 * @desc   Get user profile
 * @route  GET /api/users/profile
 * @access private
 */
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      picture: user.picture,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

/**
 *@desc   Register new user
 *@route  POST /api/users/
 *@access   public
 */
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, username, password, gender, picture } =
    req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400); //bad request
    throw new Error("User already exists");
  }

  if (
    !firstName ||
    !lastName ||
    !email ||
    !username ||
    !password ||
    !gender ||
    !picture
  ) {
    return res.status(400);
    throw new Error("Required Fields cannot be Empty!!!");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    username,
    password,
    gender,
    picture,
  });
  if (user) {
    //201 -success
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      password: user.password,
      gender: user.gender,
      picture: user.picture,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

/**
 * @desc  Search a user
 * @route GET api/users/
 * @access  public*/ //THIS IS OUR CODE
/* const searchUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      picture: user.picture,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
}); */

/**
 * @desc  Search a user
 * @route GET api/users/search
 * @access  public*/
const searchUser = async (req, res) => {
  const rootUserId = req.user._id;
  try {
    const search = req.query.search
      ? {
          $or: [
            { username: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
            { firstName: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};

    const users = await User.find(search).find({
      _id: { $ne: rootUserId },
    });

    if (users.length === 0) {
      return res.status(404).send({ message: "No users found" });
    }

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: "Server error", error: error.message });
  }
};

/**
 * @desc    Get list of all users the logged-in user can chat with
 * @route   GET /api/users
 * @access  Private
 */
const getUsersToChatWith = asyncHandler(async (req, res) => {
  const loggedInUserId = req.user._id;

  // Find all users except the logged-in user
  const users = await User.find({ _id: { $ne: loggedInUserId } }).select(
    "-password"
  );

  res.status(200).json(users);
});

export {
  authUser,
  getUserProfile,
  registerUser,
  searchUser,
  getUsersToChatWith,
};
