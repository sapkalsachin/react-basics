import { call, put, select, takeEvery } from "redux-saga/effects";
import { IMAGES } from "../constants";
import { fetchImages } from "../api";
import { setImages, setError } from "../actions";

const getPage = state => (state.nextPage)
    

function* handleImageLoad(){
    try{
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    }catch(error){
        //dispatch error
        console.log('dispatching error')
        console.log(error.toString());
        yield put(setError(error.toString()))
    }
}

export default function* watchImagesLoad(){
    yield takeEvery(IMAGES.LOAD, handleImageLoad);
}