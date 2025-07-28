import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface selectedBrandsState {
  value: string[]
}

const initialState: selectedBrandsState = {
  value: [],
}

export const selectedBrandsSlice = createSlice({
  name: 'selectedBrands',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<string>) => {
      const payload = action.payload
      let currentSelection = [...state.value]
      if (payload === "unknown") {
        if(state.value.includes("unknown")) {
          state.value = []
        }
        else {
          state.value = [payload]
        }
      } else {
        currentSelection = currentSelection.filter((item) => item !== "unknown")
        if (currentSelection.includes(payload)) {
          state.value = currentSelection.filter((item) => item !== payload)
        } else {
          state.value = [...currentSelection, payload]
        }
      }
    },
  },
})

export const { toggle } = selectedBrandsSlice.actions
export default selectedBrandsSlice.reducer