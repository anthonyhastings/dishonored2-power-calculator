import { configureStore } from '@reduxjs/toolkit';
import { reducer as charactersReducer } from '@/slices/characters';
import { reducer as powersReducer } from '@/slices/powers';

export const store = configureStore({
  devTools: {
    ...(process.env.NODE_ENV === 'production' && { features: {} }),
  },
  reducer: {
    characters: charactersReducer,
    powers: powersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
