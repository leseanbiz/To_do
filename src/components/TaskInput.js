import React, { useState } from 'react'; 
import TextInput from './TextInput';
import CustomButton from './CustomButton'
import DatePicker from './DatePicker';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { doAddTask } from '../actions/tasks';

const mapDispatchToProps = (dispatch) => ({
  addTask: (task, date) => dispatch(doAddTask(task, date))
});

const useStyles = makeStyles(theme => ({
 root: {
   flexGrow: 1,
 },
}));

const TaskInput = ({ addTask }) => {
 const classes = useStyles();
  const [task, setTask] = useState('');
  const [date, setDate] = useState('1-1-2019');

 return (
  <div className={classes.root}>
  <Paper>
   <Grid container spacing={1} justify="center" alignContent="center" alignItems="center">
     <Grid item xs={5}>
      <TextInput
        task={task}
        setTask={setTask}
        date={date}
        addTask={() => addTask(task, date)} 
      />
      </Grid>
      <Grid item xs={3} > 
      <DatePicker 
        date={date}
        setDate={setDate}
      />
      </Grid>
      <Grid item xs={3} >
      <CustomButton
        setTask={setTask}
        onClick={() => addTask(task, date)} />
     </Grid>
   </Grid>
  </Paper>
  </div>
 )}

export default connect(null, mapDispatchToProps)(TaskInput);