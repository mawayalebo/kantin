import { createStore } from 'redux';
import  basketReducer  from '../app/slices/basketSlice ';


 export const store = createStore({
    reducer:{
        basket: basketReducer
    }

});



