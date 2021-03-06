import * as React from 'react';

import './spinner.css';

export default class Spinner extends React.Component<any, any> {
  render() {
    return (
      <div className="spinnerContainer">
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
    );
  }
}
