import { all } from "@redux-saga/core/effects";
import userSaga from "./users/saga";

export default function* rootSaga() {
    yield all([
        userSaga(),
    ]);
}