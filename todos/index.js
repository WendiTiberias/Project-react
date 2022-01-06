import "./global.css";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "./context";

const root = document.getElementById("root");

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  root
);
