import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../../shared';

export const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(moviesApi.middleware),
  devTools: true,
});
