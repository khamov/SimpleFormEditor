import { createSlice } from '@reduxjs/toolkit';
import Widget from './components/Models/Widget';

export const widgetsSlice = createSlice({
  name: 'widgets',
  initialState: [],
  reducers: {
    addWidget: (state, action) => {
      const { widget } = action.payload;
      state.push(widget);
    },
    deleteWidget: (state, action) => {
      const { widgetId } = action.payload;

      const idx = state.findIndex(w => w.widgetId === widgetId);
      if (idx > -1)
      {
        state.splice(idx, 1);
      }
    },
    updateWidget: (state, action) => {
      const { widget, setting } = action.payload;

      const updWidget = Widget.fromJS(widget);
      updWidget.updateSettings(setting);

      const idx = state.findIndex(w => w.widgetId === widget.widgetId);
      if (idx > -1) {
        state[idx] = updWidget.toJS();
      }
    }
  }
});


export const { addWidget, deleteWidget, updateWidget } = widgetsSlice.actions;

export default widgetsSlice.reducer;