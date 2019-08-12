const MEAL_DB_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';

const fetchRecipes = (query = "salad") => 
  fetch(MEAL_DB_BASE_URL + query)
    .then(response => response.json())

export { fetchRecipes }