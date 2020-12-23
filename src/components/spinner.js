import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useStyles } from '../styles/spinner';

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress disableShrink />
    </div>
  );
}
