import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import TaskListItem from './TaskListItem';
import { Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { getTasks } from '../selectors/tasks'
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, Tooltip } from '@material-ui/core'
import { doDeleteAll } from '../actions/tasks';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: '5%',
    backgroundColor: theme.palette.background.paper,
  },
  hr: {
    width: "10%",
    alignItems: "flex-start"
  }
}));

const mapStateToProps = state => {
  return getTasks(state);
}

const mapDispatchToProps = dispatch => ({
  deleteAll: id => dispatch(doDeleteAll(id))
})

const TaskList = ({tasksState, deleteAll}) => {
  const classes = useStyles();
  console.log("taskState-taskList:", tasksState);
  return (
    <Paper>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <span>
            <Typography variant="h4">
              Tasks
            </Typography>
            <Tooltip title="Delete all tasks">
              <IconButton onClick={() => deleteAll()}>
                <DeleteIcon className={classes.deleteHover}/>
              </IconButton>
            </Tooltip>
            </span>
          </ListSubheader>
          
        }
        className={classes.root}
      >
        {tasksState ? tasksState.map(task => 
          <TaskListItem 
            key={task.id}
            id={task.id}
            title={task.title}
            date={task.date}
            index={task.index}
            details={task.details}
            completed={task.completed}
          />
        )
      : null
      }
      </List>
    </Paper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);


