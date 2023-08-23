import { useDispatch } from 'react-redux';
import { setSelectedWidget } from '../../selectedWidgetSlice';

export default function CheckBoxWidget(props) {
  const { widget: w } = props;
  const dispatch = useDispatch();
  return (
    <div
      key={w.widgetId}
      onClick={() => {
        dispatch(setSelectedWidget({
          selectedWidget: w.widgetId
        }))
      }}
    >
      <label htmlFor={`widget_${w.widgetId}`}>{w.widgetSettings.label}</label>
      <input 
        type="checkbox"
        id={`widget_${w.widgetId}`}
        name={w.widgetSettings.name}
        required={w.widgetSettings.required}
      />
    </div>
  );
}