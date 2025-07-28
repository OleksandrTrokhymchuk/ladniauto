import { configureStore } from '@reduxjs/toolkit'
import selectedCarBodiesReducer from './features/selectedCarBodies/selectedCarBodiesSlice'
import selectedBrandsReducer from "./features/selectedBrands/selectedBrandsSlice"
import selectedModelsReducer from './features/selectedModels/selectedModelsSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      selectedCarBodies: selectedCarBodiesReducer,
      selectedBrands: selectedBrandsReducer,
      selectedModels: selectedModelsReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']