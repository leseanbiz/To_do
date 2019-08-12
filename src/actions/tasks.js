import { ADD_TASK, MARK_COMPLETE, DELETE_TASK, DELETE_ALL } from '../constants/actionTypes';

export const doAddTask = (title, date) => {
 console.log("doAddTask action creator", title, date)
 return ({ type: ADD_TASK, title, date });
}

export const doMarkCompleted = (id) => {
 console.log("doMarkCompleted action creator", id);
 return ({ type: MARK_COMPLETE, id })
}

export const doDeleteTask = id => {
 console.log("doDeleteTask action creator", id);
 return ({ type: DELETE_TASK, id});
}

export const doDeleteAll = () => {
 return ({ type: DELETE_ALL })
}

// const doAddDetails = query => ({
//  type: ADD_DETAILS,
//  query
// })