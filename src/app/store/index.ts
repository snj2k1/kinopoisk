import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../../shared';

export const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(moviesApi.middleware),
    devTools: true,
  });
}
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
