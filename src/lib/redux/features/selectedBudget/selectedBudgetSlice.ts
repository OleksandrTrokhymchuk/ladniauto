import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface selectedBudgetState {
  value: string
}

const initialState: selectedBudgetState = {
  value: "",
}

export const selectedBudgetSlice = createSlice({
  name: 'selectedBudget',
  initialState,
  reducers: {
    changeBudget: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { changeBudget } = selectedBudgetSlice.actions
export default selectedBudgetSlice.reducer