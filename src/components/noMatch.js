import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Container, Link } from '@material-ui/core';
import { useStyles } from '../styles/noMatch';

export default function NoMatchComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item md={6} xs={12} className={classes.imgContainer}><img className={classes.img} src="/misc/cat-404.png" alt="404 representation pic" /></Grid>
          <Grid item md={6} xs={12}>
            <Typography className={classes.noMatchTitle}>
              Oh! looks like this page is taking a nap
              {' '}
              <span role="img" aria-label="weary cat">🙀</span>
            </Typography>
            <Typography className={classes.noMatchText}>The link you followed may be broken, or the page may have been removed.</Typography>
            <Typography className={classes.noMatchSubText}>
              Go to the
              {' '}
              <Link href="/">home page</Link>
              {' '}
              or visit our
              {' '}
              <Link href="https://status.themoviedb.org/" target="_blank" rel="noopener">status</Link>
              {' '}
              section
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
