import { combineReducers } from "redux";

import healthDeclarationReducer, {
  containerId as healthDeclarationReducerId,
} from "./HealthDeclaration/reducer";

export default combineReducers({
  [healthDeclarationReducerId]: healthDeclarationReducer,
});
