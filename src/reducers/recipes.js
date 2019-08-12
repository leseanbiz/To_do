import { FETCH_RECIPES, FETCH_VIDEO, FETCH_DIRECTIONS, GET_INGREDIENTS, ADD_FAV } from '../constants/actionTypes';

const INIT_STATE = [];

const applyFetchRecipes = (state, action) => action.recipes;

function recipesReducer(state = INIT_STATE, action) {
 console.log("recipesReducer", state, action)
 switch(action.type) {
  case FETCH_RECIPES: {
   console.log("FETCH_RECIPES reducer", action.recipes);
   return applyFetchRecipes(state, action);
  }
  default: return state;
 }
}

export default recipesReducer;