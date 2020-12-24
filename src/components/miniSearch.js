/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Container, TextField, withStyles,
} from '@material-ui/core';
import { useStyles } from '../styles/search';
import api from '../utils';

export default function MiniSearch() {
  const classes = useStyles();

  const StyledTextField = React.useMemo(
    () => withStyles({
      root: {
        backgroundColor: 'transparent !important',
      },
    })(TextField), [],
  );

  return (
    <div className={classes.miniRoot}>
      <Container maxWidth="lg" className="MuiFilledInput-root MuiFilledInput-underline">
        <form noValidate>
          <StyledTextField id="standard-basic" label="Search for a movie, tv show or a person" fullWidth variant="filled" />
        </form>
      </Container>
    </div>
  );
}
