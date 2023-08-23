import TextBoxWidget from './TextBoxWidget';
import SelectWidget from './SelectWidget';
import CheckBoxWidget from './CheckBoxWidget';
import SubmitButtonWidget from './SubmitButtonWidget';
import { WIDGET_TYPE } from '../../Enums';

export default function Widget(props) {
  const { widget: w } = props;
  let widgetElement = null;

  switch (w.widgetType)
  {
    case WIDGET_TYPE.TEXT_BOX: {
      widgetElement = (
        <TextBoxWidget
          key={w.widgetId}
          widget={w}
        />
      );
      break;
    }
    case WIDGET_TYPE.SELECT: {
      widgetElement = (
        <SelectWidget
          key={w.widgetId}
          widget={w}
        />
      );
      break;
    }
    case WIDGET_TYPE.CHECK_BOX: {
      widgetElement = (
        <CheckBoxWidget
          key={w.widgetId}
          widget={w}
        />
      );
      break;
    }
    case WIDGET_TYPE.SUBMIT_BUTTON: {
      widgetElement = (
        <SubmitButtonWidget
          key={w.widgetId}
          widget={w}
        />
      );
      break;
    }
    default: {
      widgetElement = null;
      break;
    }
  }

  return widgetElement;
}