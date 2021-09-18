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
                state.items = [...state.items, action.payload];
            },
            removefromBasket: (state, action) => {

                const newItems = state.items.filter(item => item.id !== action.payload);
                state.items = newItems;
                
    
            },
        }
    }
)

export const { addToBasket, removefromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export default basketSlice.reducer;
