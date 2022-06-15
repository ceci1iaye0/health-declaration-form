import { NavigateFunction } from "react-router-dom";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { ERoutes } from "../../constants/routes";
import { TErrorResponse, TFormState } from "../../constants/types";
import * as api from "../../services/api";
import { getHealthDeclarations, submitHealthDeclaration } from "./reducer";

export function* getHealthDeclarationsSaga() {
  try {
    const res = yield call(api.healthDeclaration.getAll);

    yield put(getHealthDeclarations.success(res));
  } catch (err) {
    yield put(getHealthDeclarations.failure((err as TErrorResponse)?.error));
  }
}

export function* submitHealthDeclarationSaga({
  payload,
}: {
  payload: { formState: TFormState; navigate: NavigateFunction };
  type: typeof submitHealthDeclaration.REQUEST;
}) {
  const { formState, navigate } = payload;

  try {
    yield call(api.healthDeclaration.post, formState);

    yield put(submitHealthDeclaration.success());
    navigate(ERoutes.SuccessResponse);
  } catch (err) {
    yield put(submitHealthDeclaration.failure((err as TErrorResponse)?.error));
  }
}

export default function* postsSagas() {
  yield all([
    takeLatest(getHealthDeclarations.REQUEST, getHealthDeclarationsSaga),
    takeLatest(submitHealthDeclaration.REQUEST, submitHealthDeclarationSaga),
  ]);
}
