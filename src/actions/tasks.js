import { ADD_TASK, MARK_COMPLETE, DELETE_TASK, DELETE_ALL } from '../constants/actionTypes';

export const doAddTask = (title, date) => {
 return ({ type: ADD_TASK, title, date });
}

export const doMarkCompleted = (id) => {
 return ({ type: MARK_COMPLETE, id })
}

export const doDeleteTask = id => {
 return ({ type: DELETE_TASK, id});
}

export const doDeleteAll = () => {
 return ({ type: DELETE_ALL })
}