import React, { Component } from "react";
import ReactDOM from "react-dom";
import UtilityBar from "./UtilityBar";
import Rectangle from "../assets/shapes"
import * as joint from "jointjs";

class DiagramView extends Component {

  state = {}

  constructor() {
    super();
    this.graph = new joint.dia.Graph();
    this.cells = [];
  }

  componentDidMount() {
    console.log(this.refs.diagramView.parentNode);
    this.paper = new joint.dia.Paper({
      el: ReactDOM.findDOMNode(this.refs.diagramView),
      width: "80vw",
      height: "70vh",
      model: this.graph,
      gridSize: 1
    });
  }

  handleTest = () => {
    let test = new Rectangle({
      x: 100, y: 100,
      w: 200, h: 100,
      color: "grey",
      text: {
        text: "poop",
        color: "black",
        font: 12
      }
    })
    this.graph.addCell(test.cell);
    console.log(test.cell)
  }

  render() {
    return (
      <div className="container-fluid">
        <div 
          ref="diagramView" 
          style={
            { backgroundColor: "#ffffff",
              marginTop: "5vh"
            }
          } 
          className="row"
        />
        <div className="row">
          <UtilityBar 
            onTest={this.handleTest}
          />
        </div>
      </div>
    );
  }
}

export default DiagramView;
