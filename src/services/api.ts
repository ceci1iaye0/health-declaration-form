import { ENDPOINTS } from "../constants/api";
import ApiClient from "./ApiClient";

export const healthDeclaration = {
  getAll: () => ApiClient.get(ENDPOINTS.getAll),
  post: (payload: any) => ApiClient.post(ENDPOINTS.submit, payload),
};
