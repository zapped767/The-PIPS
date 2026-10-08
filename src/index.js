import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";

import "./assets/scss/style.scss";
import "animate.css";

import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

serviceWorker.unregister();