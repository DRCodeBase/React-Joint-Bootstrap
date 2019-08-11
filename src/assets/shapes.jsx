import _ from "lodash";
import * as joint from "jointjs";

class Rectangle {

    constructor(props) {

        this.cell = new joint.shapes.basic.Rect({ 
            position: { x: props.x, y: props.y, },
            size: { width: props.w, height: props.h },
            attrs: { 
                text: this._createText(props),
                rect: { fill: _.get(props, "color", "#ffffff") }
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

}

export default Rectangle;