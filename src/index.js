import App from "pages/App/App";
import Global from "pages/Global";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global>
      <App />
    </Global>
  </React.StrictMode>
);
