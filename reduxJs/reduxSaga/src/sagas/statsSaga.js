import { call, fork, put, take } from 'redux-saga/effects';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';
import { fetchImagesStats } from '../api';
import { IMAGES } from '../constants';

function* handleStatsRequest(id) {
    // console.log('%cHandling request for id ', 'color: green', id);

    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStats(id));
            const res = yield call(fetchImagesStats, id);
            yield put(setImageStats(id, res.downloads.total));
            return true;
        } catch (e) {}
    }
    yield put(setImageStatsError(id));
}

export default function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);

        /* NOTE: yield in forEach will not work so use simple for loop */
        // images.forEach(image => {
        //     yield fork(handleStatsRequest, image.id)
        // });

        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}
