import { configureStore } from '@reduxjs/toolkit'
import { postsReducer, usersReducer } from '../features'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
