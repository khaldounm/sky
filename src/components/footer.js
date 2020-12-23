import * as React from 'react';
import { Typography, Link } from '@material-ui/core';
import { useStyles } from '../styles/results';

export default function Copyright() {
  const classes = useStyles();

  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.padding}>
      {'Copyright © '}
      <Link color="inherit" href="https://sky.com">
        Sky
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
