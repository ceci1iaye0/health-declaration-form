import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Router from "../../components/Router";
import store from "../../store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);

export default App;
