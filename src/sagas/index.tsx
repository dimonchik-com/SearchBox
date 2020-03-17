import { put, takeLatest } from 'redux-saga/effects'
import * as Action from '../actions';

export function* loadData(action) {
    if(action.text && action.isMakeAjax) {
        yield put(Action.updateLoad(true));
        try {
            const json = yield fetch('https://swapi.co/api/planets/?limit=100&search=' + action.text).then(response => response.json());
            yield put(Action.setPlanets(json.results));
        } catch (e) {
            yield put(Action.setPlanets([]));
        }
    } else {
        yield put(Action.setPlanets([]));
    }
    yield put(Action.updateLoad(false));
}

export default function* rootSaga() {
    yield takeLatest('UPDATE_SEARCH', loadData)
}
