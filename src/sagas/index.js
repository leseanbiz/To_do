import { takeEvery, all, call } from 'redux-saga/effects';
import { FETCH_RECIPES } from '../constants/actionTypes';
import { handleFetchRecipes } from './recipes';

//rootSaga
export function* watchAll() {
 console.log("watchAll")
 yield* takeEvery('FETCH_RECIPES', call(handleFetchRecipes));
 
}

export function* rootSaga() {
 console.log("rootSaga");
 yield* [ watchAll() ]
}


