import { makeStyles } from '@material-ui/core/styles';

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
  miniRoot: {
    height: 57,
    width: '100%',
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    lineHeight: 3,
  },
  inputOverride: {
    borderRadius: '0 !important',
  },
  button: {
    textTransform: 'none',
    fontWeight: 700,
    fontSize: 16,
    minHeight: 56,
    letterSpacing: 0.8,
  },
  formControl: {
    minWidth: '100%',
  },
  options: {
    fontWeight: 500,
    padding: theme.spacing(1),
    cursor: 'pointer',
  },
  searchEngineTitle: {
    fontWeight: 500,
    fontSize: '2.775em',
    lineHeight: '1.2em',
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      fontSize: '2.2em',
    },
  },
  searchEngineSubTitle: {
    fontWeight: 500,
    fontSize: '1.4em',
    lineHeight: '1.2em',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2em',
    },
  },
  searchEngineText: {
    fontWeight: 500,
    fontSize: '1em',
    lineHeight: '1.2em',
    paddingTop: theme.spacing(2),
  },
  searchEngineLink: {
    fontWeight: 500,
    fontSize: '1em',
    lineHeight: '1.2em',
    paddingTop: theme.spacing(2),
    textDecoration: 'none',
    color: theme.palette.secondary[currentTheme],
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  optionsLink: {
    fontWeight: 500,
    fontSize: '1em',
    lineHeight: '1.2em',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textDecoration: 'none !important ',
    width: '100%',
    color: theme.palette.secondary.contrastText,
  },
}));
