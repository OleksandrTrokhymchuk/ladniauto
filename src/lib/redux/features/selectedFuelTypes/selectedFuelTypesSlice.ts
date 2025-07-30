import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface selectedFuelTypesState {
  value: string
}

const initialState: selectedFuelTypesState = {
  value: "",
}

export const selectedFuelTypesSlice = createSlice({
  name: 'selectedFuelTypes',
  initialState,
  // reducers: {
  //   toggle: (state, action: PayloadAction<string>) => {
  //     const payload = action.payload
  //     let currentSelection = [...state.value]
  //     if (payload === "unknown") {
  //       if(state.value.includes("unknown")) {
  //         state.value = []
  //       }
  //       else {
  //         state.value = [payload]
  //       }
  //     } else {
  //       currentSelection = currentSelection.filter((item) => item !== "unknown")
  //       if (currentSelection.includes(payload)) {
  //         state.value = currentSelection.filter((item) => item !== payload)
  //       } else {
  //         state.value = [...currentSelection, payload]
  //       }
  //     }
  //   },
  // },
  reducers: {
    changeFuelType: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { changeFuelType } = selectedFuelTypesSlice.actions
export default selectedFuelTypesSlice.reducer