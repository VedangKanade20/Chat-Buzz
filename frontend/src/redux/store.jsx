// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
// import messageReducer from "./messageSlice";

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     message: messageReducer,
//   },
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
import messageReducer from "./messageSlice.jsx";
import socketReducer from "./socketSlice.jsx";
import userReducer from "./userSlice.jsx";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  messages: messageReducer,
  socket: socketReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;