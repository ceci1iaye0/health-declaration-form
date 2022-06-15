import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { ERoutes } from "../../constants/routes";
import HealthDelcarationForm from "../../containers/HealthDeclarationForm";
import HealthDeclarationResponses from "../../containers/HealthDeclarationResponses";
import SuccessResponse from "../../containers/SuccessResponse";

const Router = () => (
  <Routes>
    <Route
      path={ERoutes.HealthDeclarationForm}
      element={<HealthDelcarationForm />}
    />
    <Route path={ERoutes.SuccessResponse} element={<SuccessResponse />} />
    <Route
      path={ERoutes.HealthDeclarationResponses}
      element={<HealthDeclarationResponses />}
    />
    <Route path="*" element={<Navigate to={ERoutes.HealthDeclarationForm} />} />
  </Routes>
);

export default Router;
