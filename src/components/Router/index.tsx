import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { EPublicRoutes } from "../../constants/routes";
import HealthDelcarationForm from "../../containers/HealthDeclarationForm";
import SuccessResponse from "../../containers/SuccessResponse";

const Router = () => (
  <Routes>
    <Route
      path={EPublicRoutes.HealthDeclarationForm}
      element={<HealthDelcarationForm />}
    />
    <Route path={EPublicRoutes.SuccessResponse} element={<SuccessResponse />} />
    <Route
      path="*"
      element={<Navigate to={EPublicRoutes.HealthDeclarationForm} />}
    />
  </Routes>
);

export default Router;
