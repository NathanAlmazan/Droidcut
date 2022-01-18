import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DateTimePicker from '@mui/lab/DateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import Label from '../Label';

export default function ScheduleCard({ data, editSchedule, deleteSchedule }) {
  const [expanded, setExpanded] = React.useState(false);
  const [date, setDate] = React.useState(new Date(data.schedule_datetime));

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    const submitOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    const handleDateChange = (newValue) => {
        setDate(newValue);
    };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDateOnBlur = (value) => {
    editSchedule(data.uid, date.toLocaleString('en-US', submitOptions));
    setExpanded(!expanded);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
         <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {date.toLocaleString('en-US', options).split(',')[0]}
                </Typography>
                <Typography variant="h4" component="div">
                    {date.toLocaleString('en-US', options).split(',')[1] + ', ' + date.toLocaleString('en-US', options).split(',')[2]}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {date.toLocaleString('en-US', options).split(',')[3]}
                </Typography>
                <Label variant="ghost" color="success">
                    Available
                </Label>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => handleExpandClick()}>{!expanded ? "Edit" : "Cancel"}</Button>
                <Button size="small" color="error" onClick={event => deleteSchedule(data.uid)}>Delete</Button>
            </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <DateTimePicker
                    label="Date&Time picker"
                    value={date}
                    onChange={handleDateChange}
                    onAccept={handleDateOnBlur}
                    renderInput={(params) => <TextField {...params} />}
                />
            </CardContent>
        </Collapse>
      </LocalizationProvider>
    </Card>
  );
}
