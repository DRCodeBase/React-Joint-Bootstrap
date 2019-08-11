import React, { Component } from "react";

class UtilityBar extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#6c757d" }}>
        <button onClick={this.props.onTest} className="btn btn-primary btn-lg">TEST</button>
      </div>
    );
  }
}

export default UtilityBar;
