import React from 'react';
import { Container, Grid, Typography, Chip, Button, Divider } from '@material-ui/core';
import { useStyles } from '../styles/results';
import api from '../utils';

export default function ResultsBody({ data, type }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.marginBottom}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography className={classes.serviceTitle}>Search Results</Typography>
          </Grid>

          {data.items.map((result) => (
            <Grid item xs={12} className={classes.marginTopSM} key={result.id}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <img src={api.getImage(result.profile_path || result.poster_path || 'https://straffordchiropractic.com/wp-content/uploads/2017/04/poster-placeholder.png')} alt="update 1" className={classes.updateImg} />
                </Grid>
                <Grid item xs={12} sm={9} md={9} lg={9}>
                  <Typography className={`${classes.serviceSubTitle} ${classes.bold}`}>{ result.title || result.name }</Typography>
                  <Typography className={`${classes.marginTopSM} ${classes.serviceTextBlack}`}>{ result.overview ? result.overview.substring(0, 558) : 'No overview available... Please follow the link below in order to see more details.' }</Typography>
                  <Typography component={"span"} className={`${classes.leftPaneGreyText}`}>
                    <Chip
                      color="primary"
                      variant="outlined"
                      size="small"
                      label={result.media_type || result.vote_average || result.popularity}
                      className={`${classes.paddingAllSM} ${classes.paperButton} ${classes.marginTopMD}`}
                    />
                  </Typography>
                  <Typography className={classes.marginTopMD}><Button className={classes.redOrange} href={`/details/${result.media_type || type}/${result.id}`}>Learn More</Button></Typography>
                </Grid>
              </Grid>
              <Divider className={classes.marginSM} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
