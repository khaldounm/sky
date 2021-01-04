import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(4),
    },
  },
  padding: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  },
  paddingAll: {
    padding: 4,
  },
  margin: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  },
  marginTop: {
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(4),
    },
  },
  marginTopSM: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(1),
    },
  },
  marginTopXS: {
    marginTop: theme.spacing(1),
  },
  marginTopMD: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
    },
  },
  marginSM: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  marginAllSM: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(0),
  },
  marginBottom: {
    marginBottom: theme.spacing(6),
  },
  marginLeft: {
    marginLeft: theme.spacing(2),
  },
  round: {
    borderRadius: 100,
  },
  bold: {
    fontWeight: '700 !important',
  },
  white: {
    color: '#ffffff !important',
  },
  blackBG: {
    backgroundColor: '#000000',
  },
  redOrange: {
    color: '#ffffff',
    background: 'linear-gradient(to right, #ff08a3, #ff640c)',
  },
  button: {
    textTransform: 'none',
    fontWeight: 700,
    fontSize: 16,
    minHeight: 56,
    letterSpacing: 0.8,
    border: '1px solid #FF9E01',
    borderRadius: 5,
    padding: theme.spacing(2),
  },
  formControl: {
    minWidth: '100%',
  },
  serviceTitle: {
    fontWeight: 500,
    fontSize: '2.775em',
    lineHeight: '1.2em',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.0em',
    },
  },
  serviceSubTitle: {
    fontWeight: 500,
    fontSize: '1.4em',
    lineHeight: '1.6em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2em',
    },
  },
  serviceTextBlack: {
    lineHeight: '2em',
    verticalAlign: 'middle',
  },
  leftPaneGreyText: {
    fontSize: '1em',
  },
  media: {
    height: 300,
  },
  img: {
    color: '#000000',
    position: 'absolute',
    marginRight: theme.spacing(2),
  },
  updateImg: {
    width: '70%',
    borderRadius: 5,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  posterImg: {
    width: '100%',
    minHeight: 235,
    borderRadius: 5,
    padding: 0,
    margin: 0,
    lineHeight: '0',
    position: 'relative',
  },
  floatingProgress: {
    position: 'absolute',
    top: 'calc(100% - 60px)',
    left: 'calc(50% - 20px)',
    zIndex: 10,
    [theme.breakpoints.down('md')]: {
      top: 'calc(100% - 40px)',
    },
  },
  navButton: {
    backgroundColor: '#000000',
    color: 'orange',
    position: 'absolute',
    top: '50%',
    zIndex: 10,
    opacity: 0.7,
    '&:hover': {
      backgroundColor: '#000000',
      color: 'orange',
      opacity: 1,
    },
    [theme.breakpoints.down('md')]: {
      top: 'calc(50% - 20px)',
    },
    transition: theme.transitions.create(['backgroundColor', 'color', 'opacity'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  previous: {
    left: 0,
  },
  next: {
    right: 0,
  },
  paperButton: {
    borderRadius: 100,
  },
  loader: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    top: '50%',
    left: '50%',
    margin: '-15px 0 0 -20px',
  },
  show: {
    display: 'block',
  },
  hide: {
    display: 'none',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'relative',
    background: 'transparent',
    boxShadow: theme.shadows[0],
    padding: 0,
    margin: 0,
    outline: 'none',
    width: '80%',
    height: 'auto',
    maxWidth: 560,
  },
  iframe: {
    width: '100%',
    maxWidth: 560,
    border: 'none',
    height: 'calc(100vw * 0.4)',
  },
  close: {
    position: 'absolute',
    padding: '0 auto',
    margin: '0 auto',
    lineHeight: 0.1,
    top: -20,
    right: -25,
    borderRadius: 50,
    zIndex: 9999999,
    cursor: 'pointer',
    backgroundColor: '#000000',
    color: 'orange',
    opacity: 0.7,
    '&:hover': {
      backgroundColor: '#000000',
      color: 'orange',
      opacity: 1,
    },
    transition: theme.transitions.create(['backgroundColor', 'color', 'opacity'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));
