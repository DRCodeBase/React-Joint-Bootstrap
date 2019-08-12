import React, { Component } from "react";

class UtilityBar extends Component {

  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: "#6c757d",
          paddingTop: 10
        }}
      >
        <form className="row">
          <div className="col-md-4">
            <div className="form-row">
              <label className="col-2 col-form-label col-form-label">Width</label>
              <div className="form-group col-4">
                <input
                  type="number"
                  className="form-control"
                  defaultValue="50"
                  onChange={this.props.onRectChange}
                  name="w"
                  min="10"
                  max="500"
                />
              </div>
              <label className="col-2 col-form-label col-form-label">Height</label>
              <div className="form-group col-4">
                <input
                  type="number"
                  className="form-control"
                  defaultValue="20"
                  onChange={this.props.onRectChange}
                  name="h"
                  min="10"
                  max="500"
                />
              </div>
            </div>
            <div className="form-row">
              <label className="col-2 col-form-label col-form-label">X</label>
              <div className="form-group col-4">
                <input 
                  type="number"
                  className="form-control"
                  defaultValue="50"
                  onChange={this.props.onRectChange}
                  name="x"
                  min="0"
                />
              </div>
              <label className="col-2 col-form-label col-form-label">Y</label>
              <div className="form-group col-4">
                <input 
                  type="number"
                  className="form-control"
                  defaultValue="50"
                  onChange={this.props.onRectChange}
                  name="y"
                  min="0"
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-row">
              <label className="col-3 col-form-label col-form-label">Top Ports</label>
              <div className="form-group col-3">
                <input
                  type="number"
                  className="form-control"
                  defaultValue="0"
                  onChange={this.props.onRectChange}
                  name="topPorts"
                  min="0"
                  max="50"
                />
              </div>
              <label className="col-3 col-form-label col-form-label">Bot Ports</label>
              <div className="form-group col-3">
                <input
                  type="number"
                  className="form-control"
                  defaultValue="0"
                  onChange={this.props.onRectChange}
                  name="botPorts"
                  min="0"
                  max="50"
                />
              </div>
            </div>
            <div className="form-row">
              <label className="col-2 col-form-label col-form-label">Text</label>
              <div className="form-group col-4">
                <input
                  type="text"
                  className="form-control"
                  defaultValue=""
                  onChange={this.props.onRectChange}
                  name="title"
                />
              </div>
              <label className="col-2 col-form-label col-form-label">Color</label>
              <div className="form-group col-4">
                <select 
                  className="form-control" 
                  onChange={this.props.onRectChange}
                  name="color">
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="grey">Grey</option>
                  <option value="yellow">White</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <button onClick={this.props.onCreate} className="btn btn-success btn-block">
                CREATE
              </button>
            </div>
            <div className="form-group">
              <button onClick={this.props.onClear} className="btn btn-danger btn-block">
                CLEAR
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UtilityBar;
