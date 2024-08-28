import colors from "colors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import User from "./models/userModel.js";
import Chat from "./models/chatModel.js";
import users from "./data/users.js";
import messages from "./data/messages.js";
import Message from "./models/messageModel.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Chat.deleteMany();
    await Message.deleteMany();

    const createdUser = await User.insertMany(users);

    const sampleMessages = messages.map((message) => {
      return { ...message };
    });
    await Message.insertMany(sampleMessages);
    console.log("Data imported".green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Chat.deleteMany();
    await Message.deleteMany();

    console.log("Data destroyed".red.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
