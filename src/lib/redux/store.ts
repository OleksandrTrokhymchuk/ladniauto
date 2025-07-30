import { configureStore } from '@reduxjs/toolkit'
import selectedCarBodiesReducer from './features/selectedCarBodies/selectedCarBodiesSlice'
import selectedBudgetReducer from './features/selectedBudget/selectedBudgetSlice'
import selectedFuelTypesReducer from './features/selectedFuelTypes/selectedFuelTypesSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      selectedCarBodies: selectedCarBodiesReducer,
      selectedBudget: selectedBudgetReducer,
      selectedFuelTypes: selectedFuelTypesReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']