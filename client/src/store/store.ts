import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import authSlice from './features/authSlice'
import discoverSlice from './features/discoverSlice'
import glossarySlice from './features/glossarySlice'


export const store = configureStore({
  reducer: {
   discover: discoverSlice,
   glossary: glossarySlice,
   auth: authSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector

export default store