import { createSlice } from '@reduxjs/toolkit';

const alimenteSlice = createSlice({
    name: 'alimente',
    initialState: {
        alimente: [],
    },
    reducers: {
        addAliment: (state, action) => {
            return { alimente: [...state.alimente, action.payload] }
        },
        setAlimente: (state, action) => {
            return { alimente: [...action.payload] };
        },
    },
});

export const { addAliment, setAlimente } = alimenteSlice.actions;

export default alimenteSlice.reducer;