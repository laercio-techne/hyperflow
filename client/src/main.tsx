import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import RouteComponent from "./routes";
import { store } from "store";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouteComponent />
  </Provider>
);