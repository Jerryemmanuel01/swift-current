import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store";
createRoot(document.getElementById("root")).render(
  <Suspense>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);
