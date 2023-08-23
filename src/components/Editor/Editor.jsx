import React from 'react';
import { connect } from 'react-redux';
import { addWidget } from '../../widgetsSlice';
import Widget from '../Widgets/Widget';
import WidgetSettings from '../WidgetSettings/WidgetSettings';
import WidgetModel from '../Models/Widget';
import { WIDGET_TYPE } from '../../Enums';

class Editor extends React.Component {

  constructor(props) {
    super(props);

    this.widgetsRef = null;

    this.state = {
      selectedWidgetType: "",
    };
  }

  exportWidgetsHTML = () =>
  {
    let htmlStr = "";
    if (!this.widgetsRef) {
      return htmlStr;
    }

    htmlStr = this.widgetsRef.outerHTML;
    const a = document.createElement('a');
    a.href = `data:application/xml;charset=utf-8,${htmlStr}`;
    a.download = 'exportForm.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  addWidgetHandler = () =>
  {
    const { selectedWidgetType } = this.state;
    if (selectedWidgetType === WIDGET_TYPE.EMPTY) {
      return;
    }

    const widget = new WidgetModel(selectedWidgetType);

    this.props.addWidget({
      widget: widget.toJS()
    });
  };

  widgetTypeChanged = (e) => {
    const { value } = e.target;

    this.setState({ selectedWidgetType: value });
  };

  render() {
    const { selectedWidgetType } = this.state;
    const { widgets, selectedWidget: selectedWidgetId } = this.props;

    const widgetsContainer = widgets.map((w, idx) => {
        return <Widget 
          key={w.widgetId}
          widget={w}
        />;
      });

    const selectedWidget = widgets.find(w => w.widgetId === selectedWidgetId);
    const widgetSettings = selectedWidget ?
      (<WidgetSettings
        widget={selectedWidget}
      />)
      : (<h4 className="text-info">
        No Widget selected
        </h4>);

    return (
      <div className="container-fluid">
        <h1>Simple Form Editor</h1>
        <div className="row">
          <div className="col-md-2 text-white" style={{height: "100vh"}}>
            <select
              className="form-select"
              onChange={this.widgetTypeChanged}
              style={{margin: "20px 10px 10px"}}
            >
              <option value={WIDGET_TYPE.EMPTY}>
                  — Select Widget Type —
              </option>
              <option value={WIDGET_TYPE.TEXT_BOX}>
                TextBox
              </option>
              <option value={WIDGET_TYPE.SELECT}>
                Select
              </option>
              <option value={WIDGET_TYPE.CHECK_BOX}>
                CheckBox
              </option>
              <option value={WIDGET_TYPE.SUBMIT_BUTTON}>
                Submit Button
              </option>
            </select>
            <button
              style={{margin: "10px", float: "left", width: "150px"}}
              className="btn btn-primary"
              disabled={selectedWidgetType === WIDGET_TYPE.EMPTY ? true : false}
              onClick={this.addWidgetHandler}
            >
              Add Widget
            </button>
            <br/>
            <button
              style={{margin: "10px", float: "left", width: "150px"}}
              className="btn btn-dark"
              onClick={this.exportWidgetsHTML}
            >
              Export to HTML
            </button>
          </div>
          <div className="col-md-6 bg-light">
            <h2>Widgits</h2>
            <div
              ref={ref => this.widgetsRef = ref}
            >
              {widgetsContainer}
            </div>
          </div>
          <div className="col-md-4">
            <h2>Widgit Settings</h2>
            {widgetSettings}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    widgets: state.widgets,
    selectedWidget: state.selectedWidget,
  };
};

const mapDispatchToProps = {
  addWidget,
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);