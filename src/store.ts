import { configureStore } from '@reduxjs/toolkit';
import characters from '@/slices/characters';
import powers from '@/slices/powers';

const store = configureStore({
  devTools: {
    ...(process.env.NODE_ENV === 'production' && { features: {} }),
  },
  reducer: {
    characters,
    powers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
