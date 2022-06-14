import produce from "immer";

import AsyncAction from "../../services/AsyncActionHelper";

export const containerId = "HealthDeclaration";
export const getHealthDeclarations = new AsyncAction(`${containerId}/GET_ALL`);
export const submitHealthDeclaration = new AsyncAction(`${containerId}/SUBMIT`);

export const selector = (state: { [k: string]: any }) => state[containerId];

export const initialState: any = {
  healthDeclarationsData: [],

  isGetHealthDeclarationsLoading: false,
  isSumbitHealthDeclarationLoading: false,

  getHealthDeclarationsLoadingError: "",
  submitHealthDeclarationError: "",
};

export default produce((draft, { type, payload }) => {
  switch (type) {
    case getHealthDeclarations.REQUEST:
      draft.isGetHealthDeclarationsLoading = true;
      draft.getHealthDeclarationsLoadingError = "";
      break;
    case getHealthDeclarations.SUCCESS:
      draft.healthDeclarationsData = payload;
      draft.isGetHealthDeclarationsLoading = false;
      break;
    case getHealthDeclarations.FAILURE:
      draft.isGetHealthDeclarationsLoading = false;
      draft.getHealthDeclarationsLoadingError = payload;
      break;

    case submitHealthDeclaration.REQUEST:
      draft.isSumbitHealthDeclarationLoading = true;
      draft.submitHealthDeclarationError = "";
      break;
    case submitHealthDeclaration.SUCCESS:
      draft.isSumbitHealthDeclarationLoading = false;
      break;
    case submitHealthDeclaration.FAILURE:
      draft.isSumbitHealthDeclarationLoading = false;
      draft.submitHealthDeclarationError = payload;
      break;

    default:
  }
}, initialState);
