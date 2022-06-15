import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Layout from "../../components/Layout";
import Router from "../../components/Router";
import store from "../../store";

const App = () => (
  <Provider store={store}>
    <Layout>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Layout>
  </Provider>
);

export default App;
