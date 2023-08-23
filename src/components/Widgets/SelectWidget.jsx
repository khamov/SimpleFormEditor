import { useDispatch } from 'react-redux';
import { setSelectedWidget } from '../../selectedWidgetSlice';

export default function SelectWidget(props) {
  const { widget: w } = props;
  const options = w.widgetSettings.options.split(',');
  const optionsElements = options.map(optionValue => {
    return (
      <option key={optionValue} value={optionValue}>
        {optionValue}
      </option>
    );
  });
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
      <select
        id={`widget_${w.widgetId}`}
        name={w.widgetSettings.name}
        required={w.widgetSettings.required}
      >
        {optionsElements}
      </select>
    </div>
  );
}