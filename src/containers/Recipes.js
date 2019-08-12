import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
// import { connect } from 'react-redux'
// import { doFetchRecipes } from '../actions/recipes'
// import { handleFetchRecipes } from '../sagas/recipes'
// import { getRecipes } from '../selectors/recipes'
// import store from '../store'

const useStyles = makeStyles(theme => ({
 root: {
  flexGrow: 1,
  textAlign: 'center',
 },
}));

// const mapDispatchToProps = (dispatch, recipes) => ({
//   fetchRecipes: recipes => {
//     console.log("map", recipes);
//     return dispatch(doFetchRecipes(recipes))

//   }
// })

// const mapStateToProps = state => {
//   return { recipesState: state.recipesState };
// }
// { recipesState: state.recipesState }

// https://www.themealdb.com/api.php
// display card with image, title, tags(eg: japanese, vegetarian), a link to the youtube video(if present) and expand to show directions.
// one button to move all ingredients to groceries, then allow to delete from grocery list. also alow adding via text field.
const ToDo = ({ fetchRecipes, recipesState = [] }) => {
 const classes = useStyles();
  // const [search, setSearch] = useState()
  // const [recipes, setRecipes] = useState();
  // const [isLoading, setIsLoading] = useState(true)
  // const { strMeal, strMealThumb, idMeal } = recipesState;
  
 return (
 <div>
  <Grid container justify="center">
   <Grid item xs={12}>
    <Typography variant="h1" className={classes.root}>
     Recipes
    </Typography>
   </Grid>
   <Grid container justify="center">
    <Grid item xs={10}>
     <TaskInput />
    </Grid>
   </Grid>
   <Grid container justify="center">
    <Grid item xs={10}>
     <TaskList />
    </Grid>
   </Grid> 
  </Grid>
 </div>
 )
}

export default ToDo;