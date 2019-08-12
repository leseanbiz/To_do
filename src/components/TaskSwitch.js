import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

 function TaskSwitch() {
  const [checked, setChecked] = React.useState(false);

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={checked} onChange={() => setChecked(!checked)} />}
        label="Deleted"
      />
    </FormGroup>
  );
}

export default TaskSwitch;