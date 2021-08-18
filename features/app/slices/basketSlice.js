import { createSlice } from '@reduxjs/toolkit';

const intialState = {
    items:[]
}

const basketSlice = createSlice(
    {
        name: "basket",
        initialState,
        reducers: {
            addToBasket: (state, action) => {
                state.items = [...state.items, action.item];
            },
            removefromBasket: (state, action) => {

            }
        }
    }
)

export const { addToBasket, removefromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export default basketSlice.reducer;
