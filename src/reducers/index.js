import { combineReducers } from 'redux';
import tasksReducer from './tasks';

const rootReducer = combineReducers({
 tasksState: tasksReducer,
});

export default rootReducer;