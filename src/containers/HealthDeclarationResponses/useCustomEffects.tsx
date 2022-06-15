import { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Action } from "redux";

import { getHealthDeclarations } from "../../store/HealthDeclaration/reducer";

export default () => {
  const dispatch: Dispatch<Action> = useDispatch();

  useEffect(() => {
    dispatch(getHealthDeclarations.request());
  }, []);
};
