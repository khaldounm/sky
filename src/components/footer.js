import * as React from 'react';
import { Typography, Link } from '@material-ui/core';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://35.197.206.58/">
        Sky
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}