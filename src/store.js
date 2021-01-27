/* global process */

import { configureStore } from '@reduxjs/toolkit';
import characters from 'Reducers/characters';
import powers from 'Reducers/powers';

export default configureStore({
  devTools: {
    ...(process.env.NODE_ENV === 'production' && { features: {} }),
  },
  reducer: {
    characters,
    powers,
  },
});
