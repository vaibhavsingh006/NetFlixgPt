import { configureStore } from '@reduxjs/toolkit'
import slice from './userSlice';

const appStore = configureStore({
    reducer: {
        user: slice,
    }
})

export default appStore;