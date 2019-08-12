import _ from "lodash";
import * as joint from "jointjs";

class Rectangle {

    constructor(props) {

        this.cell = new joint.shapes.basic.Rect({ 
            position: { x: +props.x, y: +props.y, },
            size: { width: +props.w, height: +props.h },
            attrs: { 
                text: this._createText(props),
                rect: { fill: _.get(props, "color", "#ffffff") }
            },
            ports: {
                groups: {
                    in: {
                        markup: "path",
                        size: { width: 10, height: 5 },
                        position: "top",
                        attrs: {
                            path: {
                                fill: "red",
                                stroke: "black",
                                transform: "translate(-10, -10)",
                                magnet: true
                            }
                        }
                    },
                    out: {
                        markup: "path",
                        size: { width: 10, height: 5 },
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

    _createText = (props) => {
        return {
            text: _.get(props, "text.text", ""),
            font: _.get(props, "text.font", 12),
            fill: _.get(props, "text.color", "black")
        }
    }

    _createPorts = (props) => {

        var items = [];

        for (var i = 0; i < props.topPorts; i++) {
            items.push({
                id: "in" + (i + 1),
                group: "in",
                attrs: { path: { shape: "rectangle" } }
            });
        }

        for (var j = 0; j < props.botPorts; j++) {
            items.push({
                id: "out" + (j + 1),
                group: "out",
                attrs: { path: { shape: "rectangle" } }
            });
        }

        return items;

    }

}

export default Rectangle;