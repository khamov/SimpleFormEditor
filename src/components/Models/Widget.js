import { WIDGET_TYPE, CONFIG_WIDGET_INPUT_TYPE, CONFIG_PARAM_NAMES } from '../../Enums';

export default class Widget {
  static currentWidgetId = 0;

  constructor(widgetType) {
    this.widgetId = Widget.createId();
    this.widgetType = widgetType;
    this.widgetSettings = this.createDefaultSettings(widgetType);
  }

  static createId = () => {
    const currentId = Widget.currentWidgetId;
    Widget.currentWidgetId += 1;

    return currentId;
  };

  createDefaultSettings = (widgetType) => {
    if (widgetType === WIDGET_TYPE.TEXT_BOX) {
      return {
        name: 'TextBox Name',
        label: 'TextBox Label: ',
        required: false,
        placeholder: 'TextBox',
        inputType: CONFIG_WIDGET_INPUT_TYPE.TEXT,
      };
    } else if (widgetType === WIDGET_TYPE.SELECT) {
      return {
        name: 'Select Name',
        label: 'Select Label: ',
        required: false,
        options: 'option1, option2',
      };
    } else if (widgetType === WIDGET_TYPE.CHECK_BOX) {
      return {
        name: 'CheckBox Name',
        label: 'CheckBox Label: ',
        required: false,
      };
    } else if (widgetType === WIDGET_TYPE.SUBMIT_BUTTON) {
      return {
        name: 'Button Name',
        label: 'Button Label: ',
        required: false,
        submitText: 'Submit',
      };
    }
  };

  updateSettings = (setting) => {
    const { name, value } = setting;
    switch(name) {
      case CONFIG_PARAM_NAMES.PLACEHOLDER: {
        this.widgetSettings.placeholder = value;
        break;
      }
      case CONFIG_PARAM_NAMES.LABEL: {
        this.widgetSettings.label = value;
        break;
      }
      case CONFIG_PARAM_NAMES.NAME: {
        this.widgetSettings.name = value;
        break;
      }
      case CONFIG_PARAM_NAMES.REQUIRED: {
        this.widgetSettings.required = value;
        break;
      }
      case CONFIG_PARAM_NAMES.INPUT_TYPE: {
        this.widgetSettings.inputType = value;
        break;
      }
      case CONFIG_PARAM_NAMES.OPTIONS: {
        this.widgetSettings.options = value;
        break;
      }
      case CONFIG_PARAM_NAMES.SUBMIT_TEXT: {
        this.widgetSettings.submitText = value;
        break;
      }
      default:
        break;
    }
  };

  toJS = () => {
    return JSON.parse(JSON.stringify(this));
  }

  static fromJS = (obj) => {
    const newWidget = new Widget();

    newWidget.widgetId = obj.widgetId;
    newWidget.widgetType = obj.widgetType;
    newWidget.widgetSettings = {...obj.widgetSettings};

    return newWidget;
  }
}