import React from 'react';
import { useDispatch } from 'react-redux';
import { updateWidget } from '../../widgetsSlice';
import { CONFIG_PARAM_NAMES } from '../../Enums';
import BaseWidgetSettings from './BaseWidgetSettings';

export default function SelectWidgetSettings(props) {
  const { widget } = props;
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <BaseWidgetSettings
        widget={widget}
      />
      <br/>
      <label htmlFor="widget_options_cfg" className="col-md-7 col-form-label">Options(Format: option1, option2, etc): </label>
      <input
        className="col-md-5"
        type="text"
        id="widget_options_cfg"
        size="20"
        value={widget.widgetSettings.options}
        onChange={(e) => {
          dispatch(updateWidget({
            widget,
            setting: {
              name: CONFIG_PARAM_NAMES.OPTIONS,
              value: e.target.value,
            },
          }))
        }}
        />
    </React.Fragment>
  );
}