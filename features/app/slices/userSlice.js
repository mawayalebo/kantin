import { createSlice } from '@reduxjs/toolkit';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase';


const initialState = {
    currentUser: ''
}

const userSlice = createSlice(
    {
        name: "user",
        initialState,
        reducers: {
            setCurrentUser: (state, action) => {
                state.currentUser = action.payload;
            } 
        }
    }
)

export const { setCurrentUser } = userSlice.actions;

export const selectUser = (state) => state.user.currentUser;

export default userSlice.reducer;