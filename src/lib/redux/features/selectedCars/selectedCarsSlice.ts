import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface selectedCarsState {
  value: string[]
}

const initialState: selectedCarsState = {
  value: [],
}

export const selectedCarsSlice = createSlice({
  name: 'selectedCars',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<string>) => {
        if(state.value.includes(action.payload)) {
            state.value = state.value.filter(selectedCar => selectedCar !== action.payload)
        }
        else {
            state.value.push(action.payload)
        }
    },
  },
})

export const { toggle } = selectedCarsSlice.actions
export default selectedCarsSlice.reducer