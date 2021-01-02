/* eslint-disable no-unused-expressions */
import React from 'react';
import {
  Typography, Box, CircularProgress, Paper, IconButton,
} from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import api from '../services';
import { useStyles } from '../styles/results';

export default function Poster(data) {
  const classes = useStyles();
  const { details, images } = data;

  const imgObjArray = images.profiles || images.posters;
  const imgArray = [];
  imgObjArray.forEach((item) => imgArray.push(item.file_path));

  const [progress, setProgress] = React.useState(0);
  const [buttonDisabled] = React.useState(!(imgArray.length > 1));
  const [bg, setBg] = React.useState(details.profile_path || details.poster_path || 'https://straffordchiropractic.com/wp-content/uploads/2017/04/poster-placeholder.png');
  const [loaderState, setLoaderState] = React.useState('show');

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= (details.vote_average * 10) || details.popularity ? (details.vote_average * 10) || details.popularity : details.vote_average + 1));
    }, 10);
    return () => {
      clearInterval(timer);
    };
  });

  const changeBg = (nav) => {
    if (imgArray.length > 0) {
      const currentIndex = imgArray.indexOf(bg) || 0;
      if (nav === 'previous') {
        currentIndex !== 0 ? setBg(imgArray[currentIndex - 1]) : setBg(imgArray[imgArray.length - 1]);
      } else {
        currentIndex !== imgArray.length - 1 ? setBg(imgArray[currentIndex + 1]) : setBg(imgArray[0]);
      }
    }
  };

  const loadImg = () => {
    setLoaderState('hide');
  };

  return (
    <Paper elevation={8} className={classes.posterImg}>
      <div className={`${classes.loader} ${classes[loaderState]}`}><CircularProgress /></div>
      <img src={api.getImage(bg, 500)} alt={details.name} className={classes.posterImg} onLoad={() => loadImg()} />
      <Typography component="span" className={`${classes.marginTopSM} ${classes.leftPaneGreyText} ${classes.floatingProgress}`}>
        <Box position="relative" display="inline-flex" className={`${classes.marginTopSM} ${classes.blackBG} ${classes.round} ${classes.paddingAll}`}>
          <CircularProgress variant="determinate" value={progress} className={`${classes.round} ${classes.blackBG}`} />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography className={`${classes.bold} ${classes.white}`} variant="caption" component="div" color="textSecondary">
              {`${Math.round(
                (details.vote_average * 10) || details.popularity,
              )}%`}
            </Typography>
          </Box>
        </Box>
      </Typography>
      <IconButton aria-label="previous" className={`${classes.navButton} ${classes.previous}`} color="primary" disabled={buttonDisabled} onClick={() => changeBg('previous')}>
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton aria-label="next" className={`${classes.navButton} ${classes.next}`} color="primary" disabled={buttonDisabled} onClick={() => changeBg('next')}>
        <NavigateNextIcon />
      </IconButton>
    </Paper>
  );
}
