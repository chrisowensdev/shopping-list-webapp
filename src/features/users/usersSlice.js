import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            const user = {
                id: uuid(),
                text: action.payload,
            };

            state.push(user);
        },
    },
});

// this is for dispatch
export const { addUser } = todoSlice.actions;

// this is for configureStore
export default userSlice.reducer;
