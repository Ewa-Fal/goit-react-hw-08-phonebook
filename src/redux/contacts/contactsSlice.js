import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, removeContacts } from './contactsOperations';

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, handlePending)
      .addCase(getContacts.rejected, handleRejected)
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.rejected, handleRejected)
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = [...state.items, payload];
      })
      .addCase(removeContacts.pending, handlePending)
      .addCase(removeContacts.rejected, handleRejected)
      .addCase(removeContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== payload.id);
      });
  },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
