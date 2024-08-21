import { createSlice } from "@reduxjs/toolkit";

// const userInfoFromStorage = localStorage.authUser;
const userSlice = createSlice({
  name: "username",
  initialState: {
    authUser: null,
    otherUsers: [],
    selectedUser: null,
    // logout: userInfoFromStorage,
    // status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    // error: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    logout: (state) => {
      state.authUser = null; // Clear the authUser state
      // localStorage.removeItem("userInfo"); // Remove user info from localStorage
    },
  },
});

export const { setAuthUser, setOtherUsers, setSelectedUser, logout } =
  userSlice.actions;
export default userSlice.reducer;
