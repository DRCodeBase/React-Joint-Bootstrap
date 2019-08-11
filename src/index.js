import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style/style.css";
import Main from "./components/Main.jsx";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Main />, document.getElementById("root"));
serviceWorker.unregister();
