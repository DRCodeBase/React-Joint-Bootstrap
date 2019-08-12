import React, { Component } from "react";
import ReactDOM from "react-dom";
import UtilityBar from "./UtilityBar";
import Rectangle from "../assets/shapes";
import * as joint from "jointjs";
import _ from "lodash";

class DiagramView extends Component {
  state = {
    rectForm: {
      x: 50,
      y: 50,
      w: 50,
      h: 20,
      topPorts: 0,
      botPorts: 0,
      color: "green",
      title: ""
    }
  };

  constructor() {
    super();
    this.graph = new joint.dia.Graph();
    this.cells = [];
  }

  componentDidMount() {
    this.paper = new joint.dia.Paper({
      el: ReactDOM.findDOMNode(this.refs.diagramView),
      width: "80vw",
      height: "70vh",
      model: this.graph,
      gridSize: 1,
      defaultLink: new joint.dia.Link({
        router: { name: "manhattan" },
        connector: { name: "jumpover" }
      })
    });
  }

  createRect = event => {
    const { x, y, h, w, topPorts, botPorts, color, title } = this.state.rectForm;

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

    this.graph.addCell(rect.cell);
    console.log(rect.cell)
    event.preventDefault();
  };

  clearGraph = () => {
    this.graph.removeCells(this.graph.getElements());
  };

  handleRectChange = event => {
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
            onRectChange={this.handleRectChange}
          />
        </div>
      </div>
    );
  }
}

export default DiagramView;
