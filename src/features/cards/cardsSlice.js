import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    addCard(state, action) {
      return {
        cards: {
          ...state.cards,
          [action.payload.id]: {
            id: action.payload.id,
            front: action.payload.front,
            back: action.payload.back
          }
        }
      };
    }
  }
});

export const selectCards = (state) => state.cards.cards;
export const addCard = cardsSlice.actions.addCard;
export const cardsReducer = cardsSlice.reducer;
