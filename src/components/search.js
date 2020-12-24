/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {
  Container, CssBaseline, Typography, Hidden, FormControl, InputLabel, Select, MenuItem, CircularProgress, Link, Button, TextField, Grid,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from '../styles/search';
import api from '../services';

export default function Search() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    type: 'multi',
    search: '',
  });

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const loadingText = 'Type more than 5 characters to start...';

  const handleChange = async (event) => {
    const { name } = event.target;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

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
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography className={classes.searchEngineTitle}>
          Welcome.
        </Typography>
        <Typography className={classes.searchEngineSubTitle}>Millions of movies, TV shows and people to discover.</Typography>
        <form className={classes.form} action="/results">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={7} md={6}>
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
                renderOption={(option) => (<Link className={classes.optionsLink} href={`/details/${option.media_type}/${option.id}`}>{option.title || option.name}</Link>)}
                getOptionSelected={(option, value) => option.id === value.id}
                getOptionLabel={(option) => (option.media_type === 'movie' ? option.title : option.name)}
                options={options}
                loading={loading}
                loadingText={loadingText}
                renderInput={(params) => (
                  <TextField
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...params}
                    required
                    label="Search for a movie, tv show or a person"
                    autoFocus
                    variant="outlined"
                    onChange={handleQueryChange}
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
          Popular:&nbsp;
          <Link href="/details/person/10859" className={classes.searchEngineLink}>Ryan Reynolds</Link>,&nbsp;
          <Link href="/details/tv/82856" className={classes.searchEngineLink}>The Mandalorian</Link>,&nbsp;
          <Link href="/details/movie/464052" className={classes.searchEngineLink}>Wonder Woman 1984</Link>
        </Typography>
      </Container>
    </div>
  );
}
