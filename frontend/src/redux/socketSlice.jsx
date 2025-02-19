// import { createSlice } from "@reduxjs/toolkit";

// const socketSlice = createSlice({
//   name: "socket",
//   initialState: {
//     socket: null,
//   },
//   reducers: {
//     setSocket: (state, action) => {
//       state.socket = action.payload;
//     },
//   },
// });

// export const { setSocket } = socketSlice.actions;
// export default socketSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const socketSlice = createSlice({
//   name: "socket",
//   initialState: {
//     socketId: null, // Store only the socket ID
//     isConnected: false, // Store connection status
//   },
//   reducers: {
//     setSocketId: (state, action) => {
//       state.socketId = action.payload;
//     },
//     setSocketConnected: (state, action) => {
//       state.isConnected = action.payload;
//     },
//   },
// });

// export const { setSocketId, setSocketConnected } = socketSlice.actions;
// export default socketSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const socketSlice = createSlice({
  name: "socket",
  initialState: {
    socketId: null, // Store only the socket ID
    isConnected: false, // Store connection status
  },
  reducers: {
    setSocketId: (state, action) => {
      state.socketId = action.payload;
    },
    setSocketConnected: (state, action) => {
      state.isConnected = action.payload;
    },
  },
});

export const { setSocketId, setSocketConnected } = socketSlice.actions;
export default socketSlice.reducer;
