import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const useStyles = makeStyles(theme => ({
 root: {
  flexGrow: 1,
  textAlign: 'center',
 },
}));

const Freezer = () => {
 const classes = useStyles();
 return (
 <div>
  <Grid container justify="center">
   <Grid item xs={12}>
    <Typography variant="h1" className={classes.root}>
     Freezer
    </Typography>
   </Grid>
   <Grid container justify="center">
    <Grid item xs={10}>
     <TaskInput />
    </Grid>
   </Grid>
   <Grid container justify="center">
    <Grid item xs={10}>
     <TaskList />
    </Grid>
   </Grid> 
  </Grid>
 </div>
 )
}

export default Freezer;