const getUserChat = asyncHandler(async (req, res) => {
  const userId = req.params.userId; // Assuming userId is passed as a URL parameter

  const chats = await Chat.find({ user: userId }); // Fetching chats for the specific user

  if (chats.length > 0) {
    res.json(chats);
  } else {
    res.status(404);
    throw new Error("Chats not found for the user");
  }
});

export { getUserChat };
