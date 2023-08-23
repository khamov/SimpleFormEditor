import { configureStore } from '@reduxjs/toolkit';
import widgetsReducer from './widgetsSlice';
import selectedWidgetReducer from './selectedWidgetSlice';

export default configureStore({
  reducer: {
    widgets: widgetsReducer,
    selectedWidget: selectedWidgetReducer,
  }
})