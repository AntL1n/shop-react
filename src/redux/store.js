import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { catalogApi } from "./catalog/catalogOperations";
import { basketSlice } from "./basket/basketSlice";

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  catalogApi.middleware,
];

const basketPersistConfig = {
  key: "basket",
  storage,
  whitelist: ["basket"],
};

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    [basketSlice.name]: persistReducer(
      basketPersistConfig,
      basketSlice.reducer
    ),
  },
  middleware,
});

export const persistore = persistStore(store);
