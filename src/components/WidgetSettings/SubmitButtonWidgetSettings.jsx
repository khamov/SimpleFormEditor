import React from 'react';
import { useDispatch } from 'react-redux';
import { updateWidget } from '../../widgetsSlice';
import { CONFIG_PARAM_NAMES } from '../../Enums';
import BaseWidgetSettings from './BaseWidgetSettings';

export default function SubmitButtonWidgetSettings(props) {
  const { widget } = props;
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <BaseWidgetSettings
        widget={widget}
      />
       <br/>
      <label htmlFor="widget_submitText_cfg" className="col-md-2 col-form-label">Submit Text: </label>
      <input
        className="col-md-10"
        type="text"
        id="widget_submitText_cfg"
        size="20"
        value={widget.widgetSettings.submitText}
        onChange={(e) => {
          dispatch(updateWidget({
            widget,
            setting: {
              name: CONFIG_PARAM_NAMES.SUBMIT_TEXT,
              value: e.target.value,
            },
          }))
        }}
        />
    </React.Fragment>
  );
}