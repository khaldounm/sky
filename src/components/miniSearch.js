/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Container, TextField, Link, CircularProgress, InputAdornment,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from '../styles/search';
import api from '../services';

export default function MiniSearch(show) {
  const { status } = show;

  const classes = useStyles();

  const [state, setState] = React.useState({ type: 'multi', search: '' });
  const [autoFocus, setAutoFocus] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const loadingText = 'Type more than 5 characters to start...';

  // eslint-disable-next-line consistent-return
  const handleQueryChange = (event) => {
    const { name } = event.target;
    setState({
      ...state,
      [name]: event.target.value,
    });

    if (event.target.value.length >= 5) {
      let active = true;

      (async () => {
        const response = await api.search('multi', event.target.value);
        if (active) {
          setOptions(response.results);
        }
      })();

      return () => {
        active = false;
      };
    }
  };

  React.useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  // eslint-disable-next-line no-unused-expressions
  React.useEffect(() => { status === 'hideMiniSearchBox' ? setAutoFocus(false) : setAutoFocus(true); }, [status]);

  const focusElement = (element) => {
    if (autoFocus && element) {
      element.focus();
    }
  };

  return (
    <div className={classes.miniRoot}>
      <Container maxWidth="lg">
        <form action="/results">
          <input type="hidden" value="multi" name="type" />
          <Autocomplete
            clearOnEscape
            clearOnBlur={false}
            id="search"
            fullWidth
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            className={classes.optionsPosition}
            renderOption={(option) => (<Link className={classes.optionsLink} href={`/details/${option.media_type}/${option.id}`}>{option.title || option.name}</Link>)}
            getOptionSelected={(option, value) => option.id === value.id}
            getOptionLabel={(option) => (option.media_type === 'movie' ? option.title : option.name)}
            options={options}
            loading={loading}
            loadingText={loadingText}
            popupIcon={false}
            renderInput={(params) => (
              <TextField
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...params}
                required
                onChange={handleQueryChange}
                id="mini-search-input"
                placeholder="Search..."
                fullWidth
                inputRef={(input) => focusElement(input)}
                InputProps={{
                  ...params.InputProps,
                  style: {
                    height: 57,
                  },
                  disableUnderline: true,
                  name: 'search',
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <>
                      {loading ? <CircularProgress size={20} className={classes.miniSpinnerOverride} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
        </form>
      </Container>
    </div>
  );
}
