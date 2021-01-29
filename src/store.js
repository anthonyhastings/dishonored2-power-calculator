/* global process */

import { configureStore } from '@reduxjs/toolkit';
import characters from 'Slices/characters';
import powers from 'Slices/powers';

export default configureStore({
  devTools: {
    ...(process.env.NODE_ENV === 'production' && { features: {} }),
  },
  reducer: {
    characters,
    powers,
  },
});
