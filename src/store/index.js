import { configureStore } from "@reduxjs/toolkit";
import carroReducer from './slices/carro/reducer'

export const store = configureStore({
  reducer: {
    carros: carroReducer,
  },
});
