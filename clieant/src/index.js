import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

Axios.defaults.baseURL = "https://app-engineertool.herokuapp.com";

ReactDOM.render(<App />, document.getElementById("root"));
