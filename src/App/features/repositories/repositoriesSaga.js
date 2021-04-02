import { call, put, delay, takeLatest } from 'redux-saga/effects';
import { getRepositories } from './getRepositories';
import {
    fetchRepositories,
    fetchRepositoriesError,
    fetchRepositoriesSuccess,
} from './repositoriesSlice';

const loadingDelay = 2_000;

function* fetchRepositoriesHandler() {
    try {
        yield delay(loadingDelay); // just to demo the loading
        const repositories = yield call(getRepositories);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
}

export function* repositoriesSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
