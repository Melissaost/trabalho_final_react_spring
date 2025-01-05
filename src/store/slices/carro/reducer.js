import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carros: [],
  detalhe: {},
  loading: false,
  total: 0,
  filters: {},
};

export const counterSlice = createSlice({
  name: "carros",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCarros: (state, action) => {
      state.carros = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setDetalhes: (state, action) => {
      state.detalhe = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setCarros, setDetalhes, setLoading, setTotal, setFilters } = counterSlice.actions;

export default counterSlice.reducer;