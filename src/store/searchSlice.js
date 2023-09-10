import { createSlice } from '@reduxjs/toolkit';
import { initializeConnect } from 'react-redux/es/components/connect';

const searchSlice = createSlice({
  name: 'Search',
  initialState: {
    searchInput: '',
  },
  reducers: {
    fillQueary: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});
export const {fillQueary} = searchSlice.actions
export default searchSlice.reducer;
