import { configureStore } from '@reduxjs/toolkit'
import selectedCarsReducer from './features/selectedCars/selectedCarsSlice' 

export const makeStore = () => {
  return configureStore({
    reducer: {
      selectedCars: selectedCarsReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']