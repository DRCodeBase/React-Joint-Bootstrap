import React, { Component } from "react";
import ReactDOM from "react-dom";
import UtilityBar from "./UtilityBar";
import Rectangle from "../assets/shapes";
import * as joint from "jointjs";
import _ from "lodash";

class DiagramView extends Component {
  state = {
    rectForm: {
      x: 250,
      y: 250,
      w: 100,
      h: 50,
      topPorts: 2,
      botPorts: 2,
      color: "green",
      title: "Sample"
    }
  };

  constructor() {
    super();
    this.graph = new joint.dia.Graph();
    this.cells = [];
  }

  componentDidMount() {
    // Initialize paper.
    this.paper = new joint.dia.Paper({
      el: ReactDOM.findDOMNode(this.refs.diagramView),
      width: "80vw",
      height: "70vh",
      model: this.graph,
      gridSize: 1
    });
  }

  createRect = event => {
    const {
      x,
      y,
      h,
      w,
      topPorts,
      botPorts,
      color,
      title
    } = this.state.rectForm;

    // Construct new rectangle cell.
    let rect = new Rectangle({
      x: x,
      y: y,
      w: w,
      h: h,
      topPorts: +topPorts,
      botPorts: +botPorts,
      color: color,
      text: {
        text: title,
        color: "black",
        font: 12
      },
      graph: this.graph
    });

    // Add new cell to graph.
    this.graph.addCell(rect.cell);
    event.preventDefault();
  };

  clearGraph = event => {
    // remove each cell from the graph.
    this.graph.removeCells(this.graph.getElements());
    event.preventDefault();
  };

  handleRectFormChange = event => {
    const { name, value } = event.target;
    var rectForm = { ...this.state.rectForm };
    this.setState({ rectForm: _.set(rectForm, name, value) });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            ref="diagramView"
            style={{ backgroundColor: "#ffffff", marginTop: "5vh" }}
          />
        </div>
        <div className="row">
          <UtilityBar
            onCreate={this.createRect}
            onClear={this.clearGraph}
            onRectChange={this.handleRectFormChange}
          />
        </div>
      </div>
    );
  }
}

export default DiagramView;
