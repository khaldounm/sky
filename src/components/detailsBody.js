import React from 'react';
import {
  Container, Grid, Typography, Box, CircularProgress, Divider,
} from '@material-ui/core';
import { useStyles } from '../styles/results';
import api from '../utils';

export default function DetailsBody(data) {
  const classes = useStyles();
  const { details, type } = data;
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= (details.vote_average * 10) || details.popularity ? (details.vote_average * 10) || details.popularity : details.vote_average + 1));
    }, 10);
    return () => {
      clearInterval(timer);
    };
  });

  const currencyFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.marginBottom}>
        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.marginTopSM}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <img src={api.getImage(details.profile_path || details.poster_path || 'https://straffordchiropractic.com/wp-content/uploads/2017/04/poster-placeholder.png', 500)} alt={details.name} className={classes.posterImg} />
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <Typography className={`${classes.serviceSubTitle} ${classes.bold}`}>
                  {details.title || details.name}
                  {' '}
                  (
                  {(details.release_date || details.first_air_date || details.birthday).split('-')[0]}
                  )
                </Typography>
                <Typography className={`${classes.marginTopMD} ${classes.serviceTextBlack}`}>{details.genres ? details.genres.map((elem) => elem.name).join(', ') : details.place_of_birth}</Typography>
                {type !== 'person' ? (
                  <Typography className={`${classes.marginTopMD} ${classes.serviceTextBlack}`}>
                    {details.runtime || details.episode_run_time[0]}
                    {' '}
                    minutes
                  </Typography>
                ) : ''}
                <Typography className={`${classes.marginTopSM} ${classes.serviceTextBlack}`} component="span">
                  {(details.overview || details.biography).split('\n').map((i) => <Typography key={Math.random()} paragraph variant="body1">{i}</Typography>)}
                </Typography>
                <Typography component="span" className={`${classes.marginTopSM} ${classes.leftPaneGreyText}`}>
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
                {type !== 'person' ? (
                  <>
                    <Typography className={`${classes.marginTopMD} ${classes.serviceTextBlack}`}>{details.status}</Typography>
                    <Typography className={`${classes.marginTopMD} ${classes.serviceTextBlack}`}>
                      {details.budget ? currencyFormat.format(details.budget) : '-'}
                    </Typography>
                    <Typography className={`${classes.marginTopMD} ${classes.serviceTextBlack}`}>{details.production_companies.map((elem) => elem.name).join(', ')}</Typography>
                  </>
                ) : ''}
              </Grid>
            </Grid>
            <Divider className={classes.marginSM} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
