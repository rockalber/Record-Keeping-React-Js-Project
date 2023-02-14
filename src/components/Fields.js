import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


export const Fields = (props) => {


    return (
    <div className="data-show">
        
    <h4>{props.name}</h4>

    <h4>{props.email}</h4>
<Stack> 
    <Button onClick={props.RemoveHanlder} variant="outlined" color="error">
        <DeleteIcon/>
      </Button>
      </Stack>   
      <h4>{props.index}</h4>
  </div>
  )
};
