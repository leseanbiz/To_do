import { call, put } from 'redux-saga/effects';
import { doFetchRecipes } from '../actions/recipes';
import { fetchRecipes } from '../api/recipes';

function* handleFetchRecipes(action) {
  while(true){
    console.log("handleFetchRecipes");
    try {
      const { query } = action;
      const result = yield call(fetchRecipes, query);
      console.log("result:", result);
      yield* put(doFetchRecipes(result));
    } catch(error){
      console.log("error:", error)
    }
  }
}

export {
  handleFetchRecipes,
};


// async function fetchRecipesAPI() {
//   const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken')
//   const json = await response.json();
//   this.fetchRecipes(json)
//  }