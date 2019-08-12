import { ADD_TASK, MARK_COMPLETE, DELETE_TASK, DELETE_ALL } from "../constants/actionTypes";

const INIT_STATE = [];

function tasksReducer(state = INIT_STATE, action) {
  switch(action.type) {
    case ADD_TASK: {
      console.log("ADD_TASK reducer", action.title);
      return [...state, {id: state.length, title: action.title, date: action.date, completed: false, index: state.length, details: "TETTETTSTTSTTETTST" }];
    }
    case MARK_COMPLETE: {
      console.log("MARK_COMPLETE reducer", action.id);
      const newState = state.map(el => {
        return el.id === action.id ? Object.assign({}, el, {completed: true}) : el
      });
      return [...newState];
    }
    case DELETE_TASK: {
      console.log("DELETE_TASK reducer", action.id);
      const filteredState = state.filter(el => el.id === action.id ? null : el);
      console.log("filteredState:",filteredState)
      return [...filteredState];
    }
    case DELETE_ALL: {
      console.log("DELETE_ALL entered")
      return INIT_STATE;
    }
   default: return state;
  }
}

export default tasksReducer;