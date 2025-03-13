import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    authUser: null,
    otherUsers: [],
    selectedUser: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setOtherUsers: (state, action) => {
      if (JSON.stringify(state.otherUsers) !== JSON.stringify(action.payload)) {
        state.otherUsers = action.payload;
      }
    },
    setSelectedUser: (state, action) => {
      if (state.selectedUser?._id !== action.payload?._id) {
        state.selectedUser = action.payload;
      }
    },
    logout: (state) => {
      state.authUser = null;
      state.selectedUser = null;
    },
  },
});

export const { setAuthUser, setOtherUsers, setSelectedUser, logout } =
  userSlice.actions;
export default userSlice.reducer;
