import { all } from 'redux-saga/effects';
import imageSaga from './imagesSaga';
import statsSaga from './statsSaga';

function* rootSaga() {
    yield all([imageSaga(), statsSaga()]);
}
export default rootSaga;

/*ROUGH FOR LEARNING */

// import {
//     // call,
//     // put,
//     // take,
//     takeEvery
//  } from 'redux-saga/effects';
// import { IMAGES } from '../constants';

// //worker saga
// function* workerSaga(){
//     console.log('Hey from worker');
//     yield put({type: 'ACTION_FROM_WORKER'});
// }

// function* byebyeSaga(){
//     console.log('bye bye saga');
// }

// //watcher saga
// function* rootSaga() {
//     console.log('from watcher saga')

//     //takeEvery watches for every HELLO action dispatch
//     // yield takeEvery('HELLO', workerSaga);

//     yield take('LOGIN', workerSaga); //takes only one dispatch action
//     yield call(workerSaga); //then calls the worker

//     yield take('LOGOUT');
//     yield call(byebyeSaga)
// }

// function* handleImagesLoad(){
//     console.log('fetching images from unsplash')
// }

// function* rootSaga(){
//     yield takeEvery(IMAGES.LOAD, handleImagesLoad)
// }

// export default rootSaga;

//WatcherSaga ->(listens to actions)-> (envokes the) -> workerSaga
