import { expectSaga } from "redux-saga-test-plan";
import { call, select } from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import * as api from "../../../services/api";
import {
  getHealthDeclarations,
  selector,
  submitHealthDeclaration,
} from "../reducer";
import healthDeclarationSagas from "../sagas";

describe("HealthDeclaration sagas", () => {
  it("Should put success with response on successful getHealthDeclarations", () => {
    const res: any = [];

    return expectSaga(healthDeclarationSagas)
      .provide([
        [select(selector), {}],
        [call(api.healthDeclaration.getAll), res],
      ])
      .put(getHealthDeclarations.success(res))
      .dispatch(getHealthDeclarations.request())
      .silentRun();
  });

  it("Should put failure with err on unsuccessful getHealthDeclarations", () => {
    const err = { error: "err text" } as any;

    return expectSaga(healthDeclarationSagas)
      .provide([
        [select(selector), {}],
        [call(api.healthDeclaration.getAll), throwError(err)],
      ])
      .put(getHealthDeclarations.failure(err.error))
      .dispatch(getHealthDeclarations.request())
      .silentRun();
  });

  it("Should put success with response on successful submitHealthDeclaration", () => {
    const payload = {
      formState: {},
      navigate: jest.fn(),
    };
    const res = {};

    return expectSaga(healthDeclarationSagas)
      .provide([
        [select(selector), {}],
        [call(api.healthDeclaration.post, payload.formState), res],
      ])
      .put(submitHealthDeclaration.success())
      .dispatch(submitHealthDeclaration.request(payload))
      .silentRun();
  });

  it("Should put failure with response on unsuccessful submitHealthDeclaration", () => {
    const err = { error: "err text" } as any;

    const payload = {
      formState: {},
      navigate: jest.fn(),
    };

    return expectSaga(healthDeclarationSagas)
      .provide([
        [select(selector), {}],
        [call(api.healthDeclaration.post, payload.formState), throwError(err)],
      ])
      .put(submitHealthDeclaration.failure(err.error))
      .dispatch(submitHealthDeclaration.request(payload))
      .silentRun();
  });
});
