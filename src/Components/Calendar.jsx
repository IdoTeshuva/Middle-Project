import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState } from 'react';

export default function Calendar() {
  const [value, setValue] = React.useState(dayjs());
  const [looz, setLooz] = useState (false)


  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <button onClick={() => setLooz(!looz)}>What's the LOOZ?!</button>
           {looz && (
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      )}
    </LocalizationProvider>
  );
}

