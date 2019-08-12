import { combineReducers } from 'redux';
import tasksReducer from './tasks';
import recipesReducer from './recipes';

const rootReducer = combineReducers({
 tasksState: tasksReducer,
 recipesState: recipesReducer,
 // archiveState: archiveReducer
});

export default rootReducer;