import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
  
const Price = () => {
  
  // Our States
  const [value, setValue] =  React.useState([2,10]);
  
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  
  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      <Typography id="range-slider" gutterBottom>
      </Typography>
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
      Price is between {value[0]} /- and {value[1]} /-
    </div>
  );
}
  
export default Price;