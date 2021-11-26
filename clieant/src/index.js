import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

Axios.defaults.baseURL = "http://localhost:9000";

ReactDOM.render(<App />, document.getElementById("root"));
