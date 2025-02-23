import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    addMessage: (state, action) => {
      console.log("Received message payload:", action.payload);
      if (!state.messages.some((msg) => msg._id === action.payload._id)) {
        state.messages.push(action.payload); // Add only unique messages
      }
    },
  },
});

export const { setMessages, addMessage } = messageSlice.actions;
export default messageSlice.reducer;
