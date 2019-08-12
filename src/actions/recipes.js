import { FETCH_RECIPES } from '../constants/actionTypes';
// , FETCH_VIDEO, FETCH_DIRECTIONS, GET_INGREDIENTS, ADD_FAV
export const doFetchRecipes = (recipes) => {
 console.log("doFetchRecipes action creator", recipes)
 return { type: FETCH_RECIPES, recipes: recipes };
}