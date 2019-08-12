import React, { Component } from 'react';
import ToDo from './containers/ToDo';
import Recipes from './containers/Recipes';
import Groceries from './containers/Groceries';
import KeeperRecipes from './containers/KeeperRecipes';
import Freezer from './containers/Freezer';
import { connect } from 'react-redux'
import { doFetchRecipes } from './actions/recipes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import store from './store';

const routes = [
                { 
                 path: "/",
                 component: ToDo,
                 label: "ToDo"
                }, 
                { 
                 path: "/recipes",
                 component: Recipes,
                 label: "Recipes"

                }, 
                { 
                 path: "/groceries",
                 component: Groceries,
                 label: "Groceries"
                },
                { 
                 path: "/keeperrecipes",
                 component: KeeperRecipes,
                 label: "KeeperRecipes"
                },
                { 
                 path: "/freezer",
                 component: Freezer,
                 label: "Freezer"
                },
               ];

class App extends Component {
 constructor(props) {
  super(props);

  this.state = {
    query: '',
  };
  // this.onChange = this.onChange.bind(this);
  // this.onSubmit = this.onSubmit.bind(this);
}

componentWillMount(){
 this.props.onFetchRecipes("chicken")
 console.log(store.getState())
}

// onSubmit(event) {
//  const { query } = this.state;
//  if (query) {
//    this.props.onFetchRecipes(query)

//    this.setState({ query: '' });
//  }

//  event.preventDefault();
// }

// onChange(event) {
//  const { value } = event.target;
//  this.setState({ query: value });
// }

 render() {

  return (
   <Router>
   <NavBar tabValues={routes} />
    {
     routes.map(
      (el, i) => <Route key={i} exact path={el.path} component={el.component} />
     )
    }
   </Router>
  )}}

  const mapDispatchToProps = (dispatch) => ({
   onFetchRecipes: recipes => dispatch(doFetchRecipes(recipes))
  })

const mapStateToProps = state => {
 return { recipesState: state.recipesState };
 // return state;
}

  export default connect(mapStateToProps, mapDispatchToProps) (App);