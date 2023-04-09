import { configureStore } from '@reduxjs/toolkit'
import exchangeSlice from './Exchange/exchangeSlice'

export const store = configureStore({
    reducer: {
        exchange: exchangeSlice
    },
})