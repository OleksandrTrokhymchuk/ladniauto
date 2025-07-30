import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface selectedGiftState {
  value: string
}

const initialState: selectedGiftState = {
  value: "",
}

export const selectedGiftSlice = createSlice({
  name: 'selectedGift',
  initialState,
  reducers: {
    changeGift: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { changeGift } = selectedGiftSlice.actions
export default selectedGiftSlice.reducer