// синхронный редакс - reducers
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      state.basket.push(payload);
    },
    removeToBasket: (state, { payload }) => {
      // state.basket = state.basket.filter((e) => e.id !== payload.id);
      // state.basket.splice(payload.basketCardIndex, 1, payload.newCard);
      // return [...state.basket];
      state.basket = [...state.basket].splice(
        payload.basketCardIndex,
        1,
        payload.newCard
      );
      return state.basket;
    },
    countBasket: (state, { payload }) => {
      state.basket = payload;
    },
  },
});

export const { addToBasket, removeToBasket, countBasket } = basketSlice.actions;
export const getBasket = (state) => state.basket.basket;
