import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './userSlice';
import moviesReducer from './movieSlice';

const appStore = configureStore({
    reducer: {
        users: usersReducer,
        movies: moviesReducer,
    }
})

export default appStore;