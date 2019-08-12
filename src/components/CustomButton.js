import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {AddCircle} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const CustomButton = ({ onClick, setTask }) => {
  const classes = useStyles();

  return (
    <div>
      <Button 
        variant="contained" 
        color="default"
        onClick={() => (onClick(), setTask(''))}
        className={classes.button}
      >
        Add Task
        <AddCircle className={classes.rightIcon} />
      </Button>
    </div>
  );
}

export default CustomButton;
