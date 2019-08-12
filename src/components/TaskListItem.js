import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { IconButton, Tooltip } from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Done from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { doMarkCompleted, doDeleteTask } from '../actions/tasks';

const useStyles = makeStyles(theme => ({
  taskActive: {
    background: ""
  },
  taskComplete: {
    background: 'linear-gradient(45deg, #FE6B8B40 30%, #FF8E5340 90%)',
  },
  iconHover: {
    color: "red",
    transition: "all .5s ease",
    '&:hover': {
      transform: "rotate(360deg) scale(1.5)",
      color: "green"
    },
  },
  iconCompleted: {
    color: "green"
  },
  expandMoreHover: {
    transition: "all .5s ease",
    '&:hover': {
      transform: "rotate(180deg) scale(1.5)" ,
    },
  },
  deleteHover: {
    transition: "all .5s ease",
    '&:hover': {
      transform: "scale(1.5)",
      color: "#FF8E536F"
    },
  }
}));

const mapDispatchToProps = (dispatch, id) => ({
  markCompleted: id => dispatch(doMarkCompleted(id)),
  deleteTask: id => dispatch(doDeleteTask(id))
})

const TaskListItem = ({ id, title, date, index, details, completed, markCompleted, deleteTask }) => {
  
  const [ open, setOpen ] = useState(false);
  
  const classes = useStyles();

  function handleClick() {
    setOpen(!open);
  }

  return (
      <div data-task={`task_number: ${id}`} className={completed ? classes.taskComplete : classes.taskActive}>
       <ListItem>
        <ListItemText primary={title} />
        <ListItemText primary={date} secondary="Completion date" />
        <ListItemIcon>
          <Tooltip title="Mark completed">
            <IconButton className={ completed ? classes.iconCompleted : classes.iconHover } onClick={() => markCompleted(id)}>
              <Done />
            </IconButton>
          </Tooltip>
        </ListItemIcon>
        <Tooltip title="View details">
          <IconButton onClick={handleClick} className={classes.expandMoreHover}>
            {open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete task">
          <IconButton onClick={() => deleteTask(id)}>
            <DeleteIcon className={classes.deleteHover}/>
          </IconButton>
        </Tooltip>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText>
              {details}
            </ListItemText>
          </ListItem>
        </List>
      </Collapse>
    </div>
)}

export default connect(null, mapDispatchToProps)(TaskListItem);