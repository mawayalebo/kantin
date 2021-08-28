import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
                console.log(state)
            },
        }
    }
)

export const { addToBasket, removefromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export default basketSlice.reducer;
