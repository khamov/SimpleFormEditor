import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteWidget } from '../../widgetsSlice';
import { setSelectedWidget } from '../../selectedWidgetSlice';
import { WIDGET_TYPE } from '../../Enums';
import BaseWidgetSettings from './BaseWidgetSettings';
import TextBoxWidgetSettings from './TextBoxWidgetSettings';
import SelectWidgetSettings from './SelectWidgetSettings';
import SubmitButtonWidgetSettings from './SubmitButtonWidgetSettings';

export default function WidgetSettings(props) {
  const { widget } = props;
  const dispatch = useDispatch();

  const deleteWidgetBtn = (<button
    style={{margin: "10px", float: "left", width: "150px"}}
    className="btn btn-secondary"
    onClick={() => {
      dispatch(setSelectedWidget({
        selectedWidget: -1,
      }));
      dispatch(deleteWidget({
        widgetId: widget.widgetId,
      }));
    }}
  >
    Delete Widget
  </button>);

  let widgetSettings = null;
  switch (widget.widgetType) {
    case WIDGET_TYPE.TEXT_BOX: {
      widgetSettings = (
        <TextBoxWidgetSettings 
          widget={widget}
        />
      );
      break;
    }
    case WIDGET_TYPE.SELECT: {
      widgetSettings = (
        <SelectWidgetSettings 
          widget={widget}
        />
      );
      break;
    }
    case WIDGET_TYPE.CHECK_BOX: {
      widgetSettings = (
        <BaseWidgetSettings 
          widget={widget}
        />
      );
      break;
    }
    case WIDGET_TYPE.SUBMIT_BUTTON: {
      widgetSettings = (
        <SubmitButtonWidgetSettings 
          widget={widget}
        />
      );
      break;
    }
    default:
      break;
  }

  return (
    <React.Fragment>
      {widgetSettings}
      <p/>
      {deleteWidgetBtn}
  </React.Fragment>
  );
}