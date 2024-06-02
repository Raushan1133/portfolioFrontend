import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { viewerAuthApi } from '../services/viewerAuthApi'
export const store = configureStore({
  reducer: {
    [viewerAuthApi.reducerPath]: viewerAuthApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(viewerAuthApi.middleware),
})


setupListeners(store.dispatch)