import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Route } from 'react-router-dom'


//wraooed router around app - imported from react router dom
ReactDOM.render(

<Router> 
<App />
</Router>

, document.getElementById("root"));

