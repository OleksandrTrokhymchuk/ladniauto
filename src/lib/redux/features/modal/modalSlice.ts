import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isModalOpenSlice: boolean;
  serviceTypeValue?: string | null
}

const initialState: ModalState = {
  isModalOpenSlice: false,
  serviceTypeValue: null
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpenSlice = true;
    },
    closeModal: (state) => {
      state.isModalOpenSlice = false;
    },
    setServiceTypeValue: (state, action: PayloadAction<string>) => {
      state.serviceTypeValue = action.payload
    }
  }
});

export const { openModal, closeModal, setServiceTypeValue } = modalSlice.actions;
export default modalSlice.reducer;