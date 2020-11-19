import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App";
import GlobalStyle from "GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
