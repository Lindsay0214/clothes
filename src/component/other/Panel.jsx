import React from 'react';
import { render } from 'react-dom';
import CheckItem from 'component/other/CheckItem';

class Panel extends React.Component {
  state = {
    active: false,
    component: null,
    callback: () => {}
  };

  open = ( 
      options = {
          props: {},
          component: null,
          callback: () => {}
      }
  ) => {
      const { props, component, callback } = options;
      const _key = new Date().getTime(); //open時會重新渲染
      const _component = React.createElement(component, {
      ...props,                          //傳遞到EditItem
      close: this.close,
      key: _key
  });
      this.setState({
          active: true,
          component: _component,
          callback: callback
      });
  };

  close = data => {
      this.setState({
          active: false
      });
      this.state.callback(data);
  };

  render() {
    const _class = {
      true: 'panel-wrapper active',
      false: 'panel-wrapper'
    };
    return (
      <div className={_class[this.state.active]}>
        <div
          className="over-layer"
          onClick={() => {
            this.close();
          }}
        ></div>
        <div className="panel">
          <div className="head">
            <span
              className="close"
              onClick={() => {
                this.close();
              }}
            >
              ×
            </span>
            {this.state.component}
          </div>
        </div>
      </div>
    );
  }
}

const _div = document.createElement('div');
document.body.appendChild(_div);                     //承載彈出層組件

const _panel = render(<Panel />, _div);


export default _panel;