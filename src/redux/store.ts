import {
  Action,
  Middleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import { persistReducer, persistStore } from "redux-persist";

import caseReducer from "@/features/case/slice";
import counterReducer from "@/features/counter/slice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const syncStateMiddleware = createStateSyncMiddleware({
  blacklist: ["persist/PERSIST", "persist/REHYDRATE"],
}) as Middleware;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  case: caseReducer,
  counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(syncStateMiddleware),
});

initMessageListener(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
