import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "username",
  initialState: {
    authUser: null,
    otherUsers: [],
    selectedUser: null,
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
  },
});

export const { setAuthUser, setOtherUsers, setSelectedUser } =
  userSlice.actions;
export default userSlice.reducer;
