import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store";
import Loader from "./components/General/Loader.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </Suspense>
);
