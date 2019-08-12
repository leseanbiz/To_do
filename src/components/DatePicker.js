import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
  },
}));

 const DatePicker = ({date, setDate}) => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Completion Date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        onChange={event => setDate(event.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

export default DatePicker;