import React from "react";
import { useSelector } from "react-redux";

import Error from "../../components/Error";
import Loader from "../../components/Loader";
import { selector } from "../../store/HealthDeclaration/reducer";
import Table from "./Table";
import useCustomEffects from "./useCustomEffects";

const HealthDeclarationResponses = () => {
  const {
    healthDeclarationsData,
    isGetHealthDeclarationsLoading,
    getHealthDeclarationsLoadingError,
  } = useSelector(selector);
  useCustomEffects();

  if (isGetHealthDeclarationsLoading)
    return <Loader visible={isGetHealthDeclarationsLoading} />;

  if (!!getHealthDeclarationsLoadingError)
    return <Error msg={getHealthDeclarationsLoadingError} />;

  return <Table data={healthDeclarationsData} />;
};

export default HealthDeclarationResponses;
