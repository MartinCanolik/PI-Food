import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
const url = `${process.env.URL}`;
console.log(url);
console.log("hola");
axios.defaults.baseURL = process.env.URL || "http://localhost:3001";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
