import { put, takeLatest, all } from "redux-saga/effects";
import {GET_MOVIE, SET_MOVIE} from '../Reducers/movieReducer';
// import {getPopularMovie, getNowPlayingMovie} from '../API/tmdbAPI';


function* setMovieWorker(action){
  // const response = yield getNowPlayingMovie(action.payload);
  const response = yield action.api(action.payload);
  yield put({type: SET_MOVIE, payload: response.data})
}


function* getMovieWatcher(){
 yield takeLatest(GET_MOVIE, setMovieWorker);
}

export default function* rootSaga(){
  yield all([
    getMovieWatcher()
  ])
}