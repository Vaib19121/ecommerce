import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import sessionStorage from "redux-persist/es/storage/session";

import Productslice from "./productslice";
import authslice  from "./authslice";


const reducers = combineReducers({
  auth: authslice,
  product: Productslice,
});

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["product"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
