import React from 'react';
import { useDispatch } from 'react-redux';
import { updateWidget } from '../../widgetsSlice';
import { CONFIG_PARAM_NAMES } from '../../Enums';

export default function BaseWidgetSettings(props) {
  const { widget: w } = props;
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <label htmlFor="widget_name_cfg" className="col-md-2 col-form-label">Name: </label>
      <input
        className="col-md-10"
        type="text"
        id="widget_name_cfg"
        size="20"
        value={w ? w.widgetSettings.name : ""}
        onChange={(e) => {
          dispatch(updateWidget({
            widget: w,
            setting: {
              name: CONFIG_PARAM_NAMES.NAME,
              value: e.target.value,
            },
          }))
        }}
        />
      <br/>
      <label htmlFor="widget_label_cfg" className="col-md-2 col-form-label">Label: </label>
      <input 
        className="col-md-10"
        type="text"
        id="widget_label_cfg"
        size="20"
        value={w ? w.widgetSettings.label : ""}
        onChange={(e) => {
          dispatch(updateWidget({
            widget: w,
            setting: {
              name: CONFIG_PARAM_NAMES.LABEL,
              value: e.target.value,
            },
          }))
        }}
        />
      <br/>
      <label 
        htmlFor="widget_required_cfg"
        className="col-md-2 col-form-label"
      >
        Required: 
      </label>
      <input
        className="col-md-10"
        type="checkbox"
        id="widget_required_cfg"
        checked={w ? w.widgetSettings.required : false}
        onChange={(e) => {
          dispatch(updateWidget({
            widget: w,
            setting: {
              name: CONFIG_PARAM_NAMES.REQUIRED,
              value: e.target.checked,
            },
          }))
        }}
      />
    </React.Fragment>
  );
}