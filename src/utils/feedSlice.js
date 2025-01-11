import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addFeed: (state, action) => action.payload,
        removeUserFromFeed: (state, action) => {
            const newFeed = state.filter(ele => ele._id !== action.payload);
            return newFeed;
        },
        removeFeed: (state, action) => null
    }
});

export const { addFeed, removeUserFromFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
