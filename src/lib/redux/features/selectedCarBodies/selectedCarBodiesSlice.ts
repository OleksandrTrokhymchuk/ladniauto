import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface selectedCarBodiesState {
  value: string
}

const initialState: selectedCarBodiesState = {
  value: "",
}

export const selectedCarBodiesSlice = createSlice({
  name: 'selectedCarBodies',
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
    changeCarBody: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  }
})

export const { changeCarBody } = selectedCarBodiesSlice.actions
export default selectedCarBodiesSlice.reducer