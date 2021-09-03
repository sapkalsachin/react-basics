import { IMAGES } from '../constants';

const imagesReducer = (state = [], action) => {
    if (action.type === IMAGES.LOAD_SUCCESS) {
        console.log('%cCalled imageReducer', 'color:red')
        return [...state, ...action.images];
    }
    return state;
};

export default imagesReducer;
