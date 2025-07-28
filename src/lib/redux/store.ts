import { configureStore } from '@reduxjs/toolkit'
import selectedCarBodiesReducer from './features/selectedCarBodies/selectedCarBodiesSlice'
import selectedBudgetReducer from './features/selectedBudget/selectedBudgetSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      selectedCarBodies: selectedCarBodiesReducer,
      selectedBudget: selectedBudgetReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']