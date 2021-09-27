import { configureStore } from '@reduxjs/toolkit';
import  basketReducer  from '../app/slices/basketSlice';
import userReducer from '../app/slices/userSlice';

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        user: userReducer
    }
})



