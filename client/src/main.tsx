import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import RouteComponent from "./Routes";
import App from "./App";
import { store } from "store/store";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App>
      <RouteComponent />
    </App>
  </Provider>
);


