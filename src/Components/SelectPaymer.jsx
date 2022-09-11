import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export default function SelectPaymer() {
  const [paymer, setPaymer] = useState('');

  const handleChange = (event) => {
    setPaymer(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Paymer</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={paymer}
          label="Paymer"
          onChange={handleChange}
        >
          <MenuItem value={"Visa"}><CreditCardIcon/>Visa</MenuItem>
          <MenuItem value={"Master Card"}><CreditCardIcon/>Master Card</MenuItem>
          <MenuItem value={"American Express"}><CreditCardIcon/>American Express</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
