// // import { combineReducers, configureStore } from "@reduxjs/toolkit";
// // import {
// //   FLUSH,
// //   PAUSE,
// //   PERSIST,
// //   persistReducer,
// //   PURGE,
// //   REGISTER,
// //   REHYDRATE,
// // } from "redux-persist";
// // import storage from "redux-persist/lib/storage";
// // import messageReducer from "./messageSlice.jsx";
// // import socketReducer from "./socketSlice.jsx";
// // import userReducer from "./userSlice.jsx";

// // const persistConfig = {
// //   key: "root",
// //   version: 1,
// //   storage,
// // };

// // const rootReducer = combineReducers({
// //   user: userReducer,
// //   messages: messageReducer,
// //   socket: socketReducer,
// // });

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // const store = configureStore({
// //   reducer: persistedReducer,
// //   middleware: (getDefaultMiddleware) =>
// //     getDefaultMiddleware({
// //       serializableCheck: {
// //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //         ignoredPaths: ["socket.socket"], // Ignore serializability check for socket state
// //         // blacklist: ["socket"],
// //       },
// //     }),
// // });

// // export default store;

// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   persistReducer,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import messageReducer from "./messageSlice";
// import socketReducer from "./socketSlice";
// import userReducer from "./userSlice";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["socket"], // ✅ Exclude `socket` from persistence
// };

// const rootReducer = combineReducers({
//   user: userReducer,
//   messages: messageReducer,
//   socket: socketReducer, // ✅ This remains here, but won't be persisted
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         ignoredPaths: ["socket"], // ✅ Ignore `socket` in serialization checks
//       },
//     }),
// });

// export default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import messageReducer from "./messageSlice";
import socketReducer from "./socketSlice";
import userReducer from "./userSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["socket"], // ✅ Exclude `socket` from persistence
};

const rootReducer = combineReducers({
  user: userReducer, // ✅ Ensured `user` is the correct key
  messages: messageReducer,
  socket: socketReducer, // ✅ This remains here, but won't be persisted
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ["socket"], // ✅ Ignore `socket` in serialization checks
      },
    }),
});

export default store;
