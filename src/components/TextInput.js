import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  margin: {
    margin: theme.spacing(3),
    width: "100%"
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function TextInput({task, setTask, addTask, date}) {
  const classes = useStyles();
  // console.log(task);
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="Add Task Here"
          variant="outlined"
          onChange={e => setTask(e.target.value)}
          onKeyUp={(event) => event.keyCode === 13 ? (addTask(task, date), setTask('')) : null}
          value={task}
          id="mui-theme-provider-outlined-input"
        />
      </ThemeProvider>
    </div>
  );
}
