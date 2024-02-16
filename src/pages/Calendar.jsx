import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

const Calendar = ({ onDateClick }) => {
  // Generate a grid of dates for the current month
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Function to handle click on a date
  const handleDateClick = (date) => {
    if (onDateClick) {
      onDateClick(date);
    }
  };

  return (
    <Grid container spacing={1}>
      {[...Array(firstDayOfMonth).keys()].map(() => (
        <Grid item key={Math.random()} xs={1} />
      ))}
      {[...Array(daysInMonth).keys()].map((day) => (
        <Grid item key={day} xs={1}>
          <Button fullWidth onClick={() => handleDateClick(new Date(currentYear, currentMonth, day + 1))}>
            <Typography variant="body1">{day + 1}</Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Calendar;
