import React from 'react';
import { useDispatch } from 'react-redux';
import { updateWidget } from '../../widgetsSlice';
import { CONFIG_WIDGET_INPUT_TYPE, CONFIG_PARAM_NAMES } from '../../Enums';
import BaseWidgetSettings from './BaseWidgetSettings';

export default function TextBoxWidgetSettings(props) {
  const { widget } = props;
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <BaseWidgetSettings
        widget={widget}
      />
      <br/>
      <label htmlFor="widget_placeholder_cfg" className="col-md-2 col-form-label">Placeholder: </label>
      <input
        className="col-md-10"
        type="text"
        id="widget_placeholder_cfg"
        size="20"
        value={widget.widgetSettings.placeholder}
        onChange={(e) => {
          dispatch(updateWidget({
            widget,
            setting: {
              name: CONFIG_PARAM_NAMES.PLACEHOLDER,
              value: e.target.value,
            },
          }))
        }}
        />
      <br/>
      <label htmlFor="widget_input_type_cfg" className="col-md-2 col-form-label">Input Type: </label>
      <select
        className="col-md-10"
        id="widget_input_type_cfg"
        onChange={(e) => {
          dispatch(updateWidget({
            widget,
            setting: {
              name: CONFIG_PARAM_NAMES.INPUT_TYPE,
              value: e.target.value,
            },
          }))
        }}
        value={widget.widgetSettings.inputType}
      >
        <option value={CONFIG_WIDGET_INPUT_TYPE.TEXT_BOX}>
          TextBox
        </option>
        <option value={CONFIG_WIDGET_INPUT_TYPE.EMAIL}>
          Email
        </option>
        <option value={CONFIG_WIDGET_INPUT_TYPE.PHONE}>
          Phone
        </option>
        <option value={CONFIG_WIDGET_INPUT_TYPE.NUMBER}>
          Number
        </option>
      </select>
    </React.Fragment>
  );
}