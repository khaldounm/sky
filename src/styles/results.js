import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(4),
    },
  },
  rootNoMargin: {
    padding: 0,
    margin: 0,
  },
  rootGrey: {
    backgroundColor: '#f8f8f9',
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(4),
    },
  },
  rootGreyNoPadding: {
    backgroundColor: '#f8f8f9',
  },
  noSpacing: {
    padding: 0,
    margin: 0,
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
  paddingAllNoLeft: {
    padding: theme.spacing(2),
    paddingLeft: 0,
  },
  paddingSM: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),
    },
  },
  paddingBottom: {
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      paddingBottom: theme.spacing(4),
    },
  },
  leftPanePadding: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(0),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  rightPanePadding: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(0),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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
  borderRight: {
    borderRight: '4px solid #E6E7EC',
  },
  flatBottom: {
    'border-bottom-right-radius': 0,
    'border-bottom-left-radius': 0,
  },
  fixedHeight: {
    maxHeight: '155vh',
    overflowY: 'scroll',
    [theme.breakpoints.down('xs')]: {
      maxHeight: 'none',
      overflowY: 'auto',
    },
  },
  box: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    position: 'relative',
    cursor: 'pointer',
    borderLeft: '7px solid #ffffff',
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
    '-webkit-tap-highlight-color': 'transparent',
    '&:hover': {
      backgroundColor: '#f8f8f9',
    },
  },
  ellipsis: {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
  boxActive: {
    borderLeft: '7px solid #FF9E00',
    backgroundColor: '#f8f8f9',
  },
  serviceIcon: {
    position: 'absolute',
    left: '12px',
    top: '13%',
    width: '10px',
  },
  timer: {
    position: 'absolute',
    right: '12px',
    bottom: '14%',
  },
  timerRight: {
    position: 'absolute',
    right: '16px',
    top: '24px',
  },
  hidden: {
    display: 'none !important',
  },
  serviceTextIcon: {
    position: 'absolute',
    left: -3,
    top: '0',
    width: '15px',
    color: '#6C7090',
  },
  serviceDetailsIcon: {
    position: 'absolute',
    top: 3,
  },
  serviceDetailsIconWrapped: {
    position: 'absolute',
  },
  metaText: {
    paddingLeft: theme.spacing(2),
    fontSize: '0.8em !important',
  },
  relative: {
    position: 'relative',
  },
  block: {
    display: 'block !important',
  },
  center: {
    textAlign: 'center',
  },
  bold: {
    fontWeight: '700 !important',
  },
  blue: {
    color: '#2D7AF1',
  },
  green: {
    color: '#47BF9C',
  },
  white: {
    color: '#ffffff !important',
  },
  blackBG: {
    backgroundColor: '#000000',
  },
  whiteBG: {
    backgroundColor: '#ffffff',
  },
  greenBlue: {
    color: '#ffffff',
    background: 'linear-gradient(to right, #0bfcdd, #6e10ff)',
  },
  blueRed: {
    color: '#ffffff',
    background: 'linear-gradient(to right, #7002fe, #fd03a6)',
  },
  redOrange: {
    color: '#ffffff',
    background: 'linear-gradient(to right, #ff08a3, #ff640c)',
  },
  grey: {
    background: 'linear-gradient(to right, #E6E7EC, #E6E7EC)',
  },
  maxHeight: {
    height: theme.spacing(1),
    maxHeight: theme.spacing(1),
    padding: '0 !important',
    margin: 0,
  },
  button: {
    textTransform: 'none',
    fontWeight: 700,
    fontSize: 16,
    minHeight: 56,
    letterSpacing: 0.8,
    // marginTop: theme.spacing(4),
    border: '1px solid #FF9E01',
    borderRadius: 5,
    padding: theme.spacing(2),
  },
  formControl: {
    minWidth: '100%',
  },
  limited: {
    maxWidth: '70%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
  },
  auto: {
    maxWidth: 'fit-content',
  },
  serviceTitle: {
    fontWeight: 500,
    fontSize: '2.775em',
    lineHeight: '1.2em',
    color: '#111637',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.0em',
    },
  },
  serviceSubTitle: {
    fontWeight: 500,
    fontSize: '1.4em',
    lineHeight: '1.6em',
    // color: '#111637',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2em',
    },
  },
  serviceText: {
    // color: '#6C7091',
    lineHeight: '2em',
    verticalAlign: 'middle',
  },
  serviceTextBlack: {
    // color: '#111637',
    lineHeight: '2em',
    verticalAlign: 'middle',
  },
  leftPaneBlackText: {
    // color: '#111637',
    fontSize: '1em',
  },
  leftPaneGreyText: {
    // color: '#6C7091',
    fontSize: '0.9em',
  },
  serviceLink: {
    fontWeight: 500,
    fontSize: '1em',
    lineHeight: '1.2em',
    color: '#111637',
    textDecoration: 'none',
    '&:hover': {
      color: '#FF9E00',
      textDecoration: 'underline',
    },
  },
  media: {
    height: 300,
  },
  cardContent: {
    backgroundColor: '#f8f8fa',
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
    borderRadius: 5,
  },
  cardPadding: {
    padding: theme.spacing(2),
  },
  imgLeft: {
    width: '75%',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  imgRight: {
    width: '75%',
    float: 'right',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  serviceAvatar: {
    width: '64px',
    height: '64px',
    maxWidth: '70%',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    display: 'block',
    margin: '0 auto',
  },
  listingsAvatar: {
    width: '64px',
    height: '64px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    margin: '0 auto',
  },
  settingsAvatar: {
    width: '150px',
    height: '150px',
    display: 'block',
    borderRadius: 10,
    margin: 'auto',
  },
  serviceTextContainer: {
    height: '100%',
    display: 'flex',
    'justify-content': 'center',
    'align-content': 'center',
    'flex-direction': 'column',
  },
  stepperRoot: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    width: '100%',
  },
  stepperButton: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  paperButton: {
    borderRadius: 100,
  },
  stepperActionsContainer: {
    marginBottom: theme.spacing(2),
  },
  stepperResetContainer: {
    padding: theme.spacing(3),
  },
  iframe: {
    width: '100%',
    height: '300px',
  },
  section: {
    height: '100%',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '70%',
    margin: 'auto',
    '-webkit-tap-highlight-color': 'rgba(255, 255, 255, 0) !important',
    '-webkit-focus-ring-color': 'rgba(255, 255, 255, 0) !important',
    outline: 'none !important',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '85%',
    },
  },
  paper: {
    borderRadius: 10,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    '-webkit-tap-highlight-color': 'rgba(255, 255, 255, 0) !important',
    '-webkit-focus-ring-color': 'rgba(255, 255, 255, 0) !important',
    outline: 'none !important',
    maxHeight: '85%',
    overflowY: 'scroll',
  },
  fullWidth: {
    width: '100%',
  },
  red: {
    backgroundColor: '#FF0000 !important',
  },
  orangeIcon: {
    width: 50,
    height: 50,
    color: '#000000 !important',
    backgroundColor: '#FF9E00 !important',
    margin: 'auto',
    marginTop: theme.spacing(2),
    display: 'block',
  },
  input: {
    display: 'none',
    margin: 'auto',
  },
  greenIconColor: {
    color: '#47BF9C !important',
  },
  redIconColor: {
    color: '#e83e8c !important',
  },
  rightPaneMobile: {
    position: 'absolute',
    top: 75,
    left: 0,
    width: '100%',
    zIndex: 9,
  },
  cursor: {
    cursor: 'pointer',
  },
}));
