import { call, put, delay } from "redux-saga/effects";
import { getRepositories } from "./getRepositories";
import { setRepositories, setStatus } from "./repositoriesSlice";

function* fetchRepositoriesHandler() {
    try {
        yield delay(2000); // just to demo the loading
        const repositories = yield call(getRepositories);
        yield put(setRepositories(repositories));
        yield put(setStatus("success"));
    } catch (error) {
        console.error("Something bad happened!", error);
        yield put(setStatus("error"));
    };
};

export function* repositoriesSaga() {
    yield fetchRepositoriesHandler();
};