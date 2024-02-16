import React, { useState } from 'react';
import { Container, Typography, Modal, TextField, Button, Grid } from '@mui/material';
import Calendar from './Calendar';

const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [candidateInfo, setCandidateInfo] = useState({ name: '', email: '', number: '' });

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    // Reset candidate information
    setCandidateInfo({ name: '', email: '', number: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCandidateInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSaveCandidate = () => {
    // Add logic here to save candidate information
    console.log('Candidate Information:', candidateInfo);
    // Close the modal
    handleCloseModal();
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Schedule Page
      </Typography>
      <Calendar onDateClick={handleDateClick} />
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Container maxWidth="sm" sx={{ mt: 8, p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Add Candidate Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={candidateInfo.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={candidateInfo.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="number"
                value={candidateInfo.number}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" onClick={handleSaveCandidate} sx={{ mt: 2 }}>
            Save
          </Button>
        </Container>
      </Modal>
    </Container>
  );
};

export default SchedulePage;
