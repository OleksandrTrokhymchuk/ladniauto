import { configureStore } from '@reduxjs/toolkit'
import selectedCarBodiesReducer from './features/selectedCarBodies/selectedCarBodiesSlice'
import selectedBudgetReducer from './features/selectedBudget/selectedBudgetSlice'
import selectedFuelTypesReducer from './features/selectedFuelTypes/selectedFuelTypesSlice'
import selectedGiftsReducer from './features/selectGift/selectedGiftsSlice'
import modalReducer from './features/modal/modalSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      selectedCarBodies: selectedCarBodiesReducer,
      selectedBudget: selectedBudgetReducer,
      selectedFuelTypes: selectedFuelTypesReducer,
      selectedGifts: selectedGiftsReducer,
      modal: modalReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']