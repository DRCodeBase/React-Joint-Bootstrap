import _ from "lodash";
import * as joint from "jointjs";

class Rectangle {
  constructor(props) {
    this.cell = new joint.shapes.basic.Rect({
      position: { x: +props.x, y: +props.y },
      size: { width: +props.w, height: +props.h },
      attrs: {
        text: this._createText(props),
        rect: { fill: _.get(props, "color", "#ffffff") }
      },
      ports: {
        groups: {
          in: {
            markup: "path",
            position: "top",
            attrs: {
              path: {
                fill: "red",
                stroke: "black",
                transform: "translate(-5, -5)",
                magnet: true
              }
            }
          },
          out: {
            markup: "path",
            position: "bottom",
            attrs: {
              path: {
                fill: "red",
                stroke: "black",
                transform: "translate(-5, 0)",
                magnet: true
              }
            }
          }
        },
        items: this._createPorts(props)
      }
    });
  }

  _createText = props => {
    return {
      text: _.get(props, "text.text", ""),
      font: _.get(props, "text.font", 12),
      fill: _.get(props, "text.color", "black")
    };
  };

  _createPorts = props => {
    var items = [];

    for (var i = 0; i < props.topPorts; i++) {
      items.push({
        id: "in" + (i + 1),
        group: "in",
        attrs: { path: { d: "M 0 0 H 0 V 5 H 10 V 0 Z" } }
      });
    }

    for (var j = 0; j < props.botPorts; j++) {
      items.push({
        id: "out" + (j + 1),
        group: "out",
        attrs: { path: { d: "M 0 0 H 0 V 5 H 10 V 0 Z" } }
      });
    }

    return items;
  };
}

export default Rectangle;
