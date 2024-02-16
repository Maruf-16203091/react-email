import React from 'react';
import { Container, Typography, Grid, Button, Link, Divider } from '@mui/material';

const AirbnbReviewEmail = ({
  authorName = "Alex",
  authorImage = "/static/airbnb-review-user.jpg",
  reviewText = `“Alan was a great guest! Easy communication, the apartment was left
    in great condition, very polite, and respectful of all house rules.
    He’s welcome back anytime and would easily recommend him to any
    host!”`,
}) => {
  const baseUrl = "https://example.com";


  return (
    <Container maxWidth="md">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} textAlign="center">
          
        </Grid>
        <Grid item xs={12} textAlign="center">
          <img src={authorImage} width="96" height="96" alt={authorName} style={{ borderRadius: '50%' }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">Here's what {authorName} wrote</Typography>
          <Typography variant="body1" align="center" sx={{ padding: '24px', backgroundColor: '#f2f3f3', borderRadius: '4px' }}>
            {reviewText}
          </Typography>
          <Typography variant="body1" align="center">
            Now that the review period is over, we’ve posted {authorName}’s review to your Airbnb profile.
          </Typography>
          <Typography variant="body1" align="center" sx={{ paddingBottom: '16px' }}>
            While it’s too late to write a review of your own, you can send your feedback to {authorName} using your Airbnb message thread.
          </Typography>
          <Button variant="contained" color="primary" fullWidth href="https://airbnb.com/">
            Send My Feedback
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="bold">
            Common questions
          </Typography>
          <Link href="https://airbnb.com/help/article/13" sx={{ display: 'block', color: '#007bff', textDecoration: 'none', marginBottom: '8px' }}>
            How do reviews work?
          </Link>
          <Link href="https://airbnb.com/help/article/1257" sx={{ display: 'block', color: '#007bff', textDecoration: 'none', marginBottom: '8px' }}>
            How do star ratings work?
          </Link>
          <Link href="https://airbnb.com/help/article/995" sx={{ display: 'block', color: '#007bff', textDecoration: 'none', marginBottom: '8px' }}>
            Can I leave a review after 14 days?
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" align="center" sx={{ color: '#9ca299', marginTop: '10px', textDecoration: 'underline' }}>
            Airbnb, Inc., 888 Brannan St, San Francisco, CA 94103
          </Typography>
          <Link href="https://airbnb.com" align="center" sx={{ display: 'block', color: '#9ca299', textDecoration: 'underline', marginBottom: '20px' }}>
            Report unsafe behavior
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AirbnbReviewEmail;
