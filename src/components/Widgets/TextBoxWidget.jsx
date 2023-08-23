import { useDispatch } from 'react-redux';
import { setSelectedWidget } from '../../selectedWidgetSlice';
import { CONFIG_WIDGET_INPUT_TYPE } from '../../Enums';

export default function TextBoxWidget(props) {
  const { widget: w} = props;
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
        size="20"
        id={`widget_${w.widgetId}`}
        type={w.widgetSettings.inputType}
        pattern={w.widgetSettings.inputType === CONFIG_WIDGET_INPUT_TYPE.PHONE ? '[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}' : null}
        placeholder={w.widgetSettings.placeholder}
        name={w.widgetSettings.name}
        required={w.widgetSettings.required}
      />
    </div>
  );
}