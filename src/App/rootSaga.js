import { all } from "redux-saga/effects";
import { themeSaga } from "./features/themeToggler/themeSaga"

export default function* rootSaga() {
    yield all([
        themeSaga(),
    ])
};