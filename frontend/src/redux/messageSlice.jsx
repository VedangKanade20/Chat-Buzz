import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messages", // ✅ Ensure this matches `store.messages`
  initialState: {
    messages: [],
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    addMessage: (state, action) => {
      if (!state.messages.some((msg) => msg._id === action.payload._id)) {
        state.messages.push(action.payload);
      }
    },
  },
});

export const { setMessages, addMessage } = messageSlice.actions;
export default messageSlice.reducer;
