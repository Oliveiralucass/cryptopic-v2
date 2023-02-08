import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import authSlice from './features/authSlice'
import claimSlice from './features/claimSlice'
import coinSlice from './features/coinSlice'
import discoverSlice from './features/discoverSlice'
import expeditionSlice from './features/expeditionSlice'
import glossarySlice from './features/glossarySlice'


export const store = configureStore({
  reducer: {
   discover: discoverSlice,
   expedition: expeditionSlice,
   glossary: glossarySlice,
   auth: authSlice,
   claim: claimSlice,
   coin: coinSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector

export default store