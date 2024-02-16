import React from 'react';
import { Container, Typography, Button, Link, Divider, Grid } from '@mui/material';

const NetlifyWelcomeEmail = ({ steps, links }) => {
    const baseUrl = "https://example.com";

  const defaultSteps = [
    {
      id: 1,
      Description: (
        <li className="mb-20" key={1}>
          <strong>Deploy your first project.</strong>{" "}
          <Link href="#">Connect to Git, choose a template</Link>, or manually deploy a
          project you've been working on locally.
        </li>
      ),
    },
    {
      id: 2,
      Description: (
        <li className="mb-20" key={2}>
          <strong>Check your deploy logs.</strong> Find out what's included in
          your build and watch for errors or failed deploys.{" "}
          <Link href="#">Learn how to read your deploy logs</Link>.
        </li>
      ),
    },
    {
      id: 3,
      Description: (
        <li className="mb-20" key={3}>
          <strong>Choose an integration.</strong> Quickly discover, connect, and
          configure the right tools for your project with 150+ integrations to
          choose from. <Link href="#">Explore the Integrations Hub</Link>.
        </li>
      ),
    },
    {
      id: 4,
      Description: (
        <li className="mb-20" key={4}>
          <strong>Set up a custom domain.</strong> You can register a new domain
          and buy it through Netlify or assign a domain you already own to your
          site. <Link href="#">Add a custom domain</Link>.
        </li>
      ),
    },
  ];

  const defaultLinks = ["Visit the forums", "Read the docs", "Contact an expert"];

  steps = steps || defaultSteps;
  links = links || defaultLinks;

  return (
    <Container maxWidth="md">
      <img src={`${baseUrl}/static/netlify-logo.png`} width="184" height="75" alt="Netlify" style={{ margin: 'auto', marginTop: '20px', marginBottom: '20px' }} />
      <Container style={{ backgroundColor: 'white', padding: '45px' }}>
        <Typography variant="h4" align="center" gutterBottom>Welcome to Netlify</Typography>
        <Typography align="center" paragraph>
          Congratulations! You're joining over 3 million developers around the world who use Netlify to build and ship sites, stores, and apps.
        </Typography>
        <Typography align="center" paragraph>
          Here's how to get started:
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {steps.map(({ id, Description }) => (
            <React.Fragment key={id}>{Description}</React.Fragment>
          ))}
        </ul>
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: '45px' }}>
          Go to your dashboard
        </Button>
        <Grid container justifyContent="center" spacing={1} style={{ marginTop: '45px' }}>
          {links.map((link, index) => (
            <Grid item key={index}>
              <Link href="#" underline="always">{link}</Link>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container style={{ marginTop: '20px' }}>
        <Grid container spacing={1}>
          <Grid item xs={6} textAlign="right">
            <Link href="#">Unsubscribe</Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="#">Manage Preferences</Link>
          </Grid>
        </Grid>
        <Typography align="center" color="textSecondary" style={{ marginTop: '45px' }}>
          Netlify, 44 Montgomery Street, Suite 300 San Francisco, CA
        </Typography>
      </Container>
    </Container>
  );
};

export default NetlifyWelcomeEmail;
