import { createSlice } from "@reduxjs/toolkit";
import { fetchExchangeResult } from "./exchangeActions";

const initialState = {
    result: '',
};

export const exchange = createSlice({
    name: "exchange",
    initialState,
    reducers: {
        resetResult: (state) => {
            state.result = null;
        },

        addResult: (state, action) => {
            state.result = action.payload;
        },

    },
    extraReducers: {
        [fetchExchangeResult.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },

        [fetchExchangeResult.fulfilled]: (state, action) => {
            const { data, params } = action.payload;
            
            state.loading = false;
            state.error = false;
            state.result = `${params.q} ${params.from} equals ${data} ${params.to}`;
        },

        [fetchExchangeResult.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },


    },
});

export const {
    addResult,
    resetResult
} = exchange.actions;
export default exchange.reducer;
