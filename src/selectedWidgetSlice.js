import { createSlice } from '@reduxjs/toolkit';

export const selectedWidgetSlice = createSlice({
  name: 'selectedWidget',
  initialState: -1,
  reducers: {
    setSelectedWidget: (state, action) => {
      const { selectedWidget } = action.payload;
      state = selectedWidget;
      return state;
    },
  }
});

export const { setSelectedWidget } = selectedWidgetSlice.actions;

export default selectedWidgetSlice.reducer;