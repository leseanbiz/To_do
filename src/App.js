import React, { Component } from 'react';
import ToDo from './containers/ToDo';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

const routes = [
                { 
                 path: "/",
                 component: ToDo,
                 label: "ToDo"
                }
               ];

class App extends Component {

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

const mapStateToProps = state => {
 return { recipesState: state.recipesState };
}

  export default connect(mapStateToProps) (App);