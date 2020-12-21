import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#f8f8f9',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
  img: {
    width: '75%',
    maxWidth: 600,
    alignSelf: 'center',
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      width: '50%',
    },
  },
  imgContainer: {
    display: 'flex',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  noMatchTitle: {
    fontWeight: 500,
    fontSize: '2.775em',
    color: '#111637',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '2.2em',
    },
  },
  noMatchText: {
    fontWeight: 500,
    fontSize: '1.6em',
    color: '#111637',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '1.4em',
    },
  },
  noMatchSubText: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}));
