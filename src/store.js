/* global process */

import { configureStore } from '@reduxjs/toolkit';
import characters from 'slices/characters';
import powers from 'slices/powers';

export default configureStore({
  devTools: {
    ...(process.env.NODE_ENV === 'production' && { features: {} }),
  },
  reducer: {
    characters,
    powers,
  },
});
