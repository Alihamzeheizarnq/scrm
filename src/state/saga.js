import { all } from "@redux-saga/core/effects";
import categoryCreateSaga from "./category/saga";
import { categorySelectSaga } from "./category/select/saga";
import userSaga from "./users/saga";

export default function* rootSaga() {
    yield all([
        userSaga(),
        categoryCreateSaga(),
        categorySelectSaga(),
    ]);
}