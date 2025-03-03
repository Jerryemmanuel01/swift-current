import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store";
import Loader from "./components/General/Loader.jsx";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./components/General/ErrorBoundary.js";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <Toaster />
      <ErrorBoundary
        fallback={
          <div className="flex h-screen items-center justify-center text-center">
            <h1 className="text-2xl font-bold text-red-600">
              Something went wrong!
            </h1>
            <p>Please refresh the page or try again later.</p>
          </div>
        }
      >
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ErrorBoundary>
    </Provider>
  </Suspense>
);
