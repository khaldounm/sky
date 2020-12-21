/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {
  Container, CssBaseline, Typography, Hidden, FormControl, InputLabel, Select, MenuItem, CircularProgress, Link,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from '../styles/search';
import api from '../utils';

export default function Search() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    search: '',
    select: 'multi',
  });
  // eslint-disable-next-line no-unused-vars
  const [autocomplete, setAuto] = React.useState(null);

  const handleChange = (event) => {
    const { name } = event.target;
    console.log(name)
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleQueryChange = (event) => {
    const { search } = event.target;
    console.log(search)
    // console.log(event.target.value)
    console.log('before ', state)
    setState({
      ...state,
      [search]: event.target.value,
    });
    console.log('after ', state)
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

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleAutocomplete = (event, newValue) => {
    if (newValue != null) {
      setAuto(newValue);
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography className={classes.searchEngineTitle}>
          Welcome.
        </Typography>
        <Typography className={classes.searchEngineSubTitle}>Millions of movies, TV shows and people to discover.</Typography>
        <form className={classes.form} noValidate action='/results'>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={7} md={6}>
              <Autocomplete
                clearOnEscape
                id="search"
                fullWidth
                open={open}
                onOpen={() => {
                  setOpen(true);
                }}
                onClose={() => {
                  setOpen(false);
                }}
                getOptionSelected={(option, value) => {
                  let url = '';
                  switch (option.media_type) {
                    case 'person':
                      url = `/details/person/${option.id}`;
                      break;
                    case 'movie':
                      url = `/details/movie/${option.id}`;
                      break;
                    case 'tv':
                      url = `/details/tv/${option.id}`;
                      break;
                    default:
                      url = '/noMatch'
                      break;
                  }
                  window.location.href = url;
                  // return option.id === value.id
                }}
                getOptionLabel={(option) => {
                  const res = option.media_type === 'movie' ? option.title : option.name;
                  return res;
                }}
                options={options}
                loading={loading}
                onChange={handleAutocomplete}
                renderInput={(params) => (
                  <TextField
                    /* eslint-disable react/jsx-props-no-spreading */
                    {...params}
                    label="Search for a movie, tv show or a person"
                    autoFocus
                    variant="outlined"
                    onChange={handleQueryChange}
                    value={state.undefined || ''}
                    InputProps={{
                      ...params.InputProps,
                      name: 'search',
                      id: 'outlined-search-native-simple',
                      endAdornment: (
                        <>
                          {loading ? <CircularProgress color="inherit" size={20} /> : null}
                          {params.InputProps.endAdornment}
                        </>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={9} sm={4} md={2}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-type-native-simple">Type</InputLabel>
                <Select
                  value={state.type || 'multi'}
                  onChange={handleChange}
                  label="type"
                  inputProps={{
                    name: 'type',
                    id: 'outlined-type-native-simple',
                  }}
                >
                  <MenuItem className={classes.options} value="multi">All</MenuItem>
                  <MenuItem className={classes.options} value="movie">Movies</MenuItem>
                  <MenuItem className={classes.options} value="tv">TV Shows</MenuItem>
                  <MenuItem className={classes.options} value="person">Persons</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3} sm={1} md={2}>
              <Hidden only={['xs', 'sm']}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<SearchIcon />}
                  fullWidth
                  aria-label="search"
                  type="submit"
                >
                  Search
                </Button>
              </Hidden>
              <Hidden only={['md', 'lg', 'xl']}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  fullWidth
                  aria-label="search-mobile"
                  type="submit"
                >
                  <SearchIcon />
                </Button>
              </Hidden>
            </Grid>
          </Grid>
        </form>
        <Typography className={classes.searchEngineText}>
          Popular: <Link href="/category" className={classes.searchEngineLink}>Ryan Reynolds</Link>, <Link href="/category" className={classes.searchEngineLink}>The Mandalorian</Link>, <Link href="/category" className={classes.searchEngineLink}>Wonder Woman 1984</Link>
        </Typography>
      </Container>
    </div>
  );
}
