import { call, put, delay } from "redux-saga/effects";
import { getRepositories } from "./getRepositories";
import { setContent, setStatus } from "./repositoriesSlice";

function* fetchRepositoriesHandler() {
    try {
        yield delay(1000);
        const repositories = yield call(getRepositories);
        yield put(setContent(repositories));
        yield put(setStatus("success"));
    } catch (error) {
        console.error("Something bad happened!", error);
        yield put(setStatus("error"));
    };
};

export function* repositoriesSaga() {
    yield fetchRepositoriesHandler();
};