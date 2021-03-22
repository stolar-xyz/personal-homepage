import { all } from "redux-saga/effects";
import { repositoriesSaga } from "./features/repositories/repositoriesSaga";
import { themeSaga } from "./features/themeToggler/themeSaga"

export default function* rootSaga() {
    yield all([
        themeSaga(),
        repositoriesSaga(),
    ]);
};