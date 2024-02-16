import React from 'react';
import { Container, Typography, Grid, Button, Link, Divider } from '@mui/material';

const RaycastMagicLinkEmail = ({ magicLink }) => {
    const baseUrl = "https://example.com";

  return (
    <Container maxWidth="md" marginLeft="500">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} textAlign="center">
         
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" style={{ marginTop: '48px', fontWeight: 'bold' }}>🪄 Your magic link</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="center" style={{ padding: '24px', backgroundColor: '#f2f3f3', borderRadius: '4px', lineHeight: '26px' }}>
            <Link href={magicLink} style={{ color: '#FF6363' }}>👉 Click here to sign in 👈</Link>
          </Typography>
          <Typography variant="body1" align="center" style={{ marginBottom: '16px' }}>
            If you didn't request this, please ignore this email.
          </Typography>
          <Typography variant="body1" align="center" style={{ marginBottom: '16px' }}>
            Best,<br />- Raycast Team
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider style={{ borderColor: '#dddddd', marginTop: '48px' }} />
        </Grid>
        <Grid item xs={12}>
          <img src={`${baseUrl}/static/raycast-logo.png`} width={32} height={32} alt="Raycast" style={{ filter: 'grayscale(100%)', margin: '20px 0' }} />
          <Typography variant="body2" align="center" style={{ color: '#8898aa' }}>
            Raycast Technologies Inc.
          </Typography>
          <Typography variant="body2" align="center" style={{ color: '#8898aa', marginBottom: '20px' }}>
            2093 Philadelphia Pike #3222, Claymont, DE 19703
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

RaycastMagicLinkEmail.PreviewProps = {
  magicLink: "https://raycast.com",
};

export default RaycastMagicLinkEmail;
