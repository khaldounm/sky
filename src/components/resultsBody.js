import React from 'react';
import {
  Container, Grid, Typography, Chip, Button, Divider,
} from '@material-ui/core';
import { useStyles } from '../styles/results';

export default function ResultsBody() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.marginBottom}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography className={classes.serviceTitle}>Search Results</Typography>
          </Grid>
          <Grid item xs={12} className={classes.marginTopSM}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={3} md={3} lg={3}>
                <img src="/updates/verified-number-small.png" alt="update 1" className={classes.updateImg} />
              </Grid>
              <Grid item xs={12} sm={9} md={9} lg={9}>
                <Typography className={`${classes.serviceSubTitle} ${classes.bold}`}>New trial: We now ask all customers to verify their mobile phone numbers</Typography>
                <Typography className={`${classes.marginTopSM} ${classes.serviceTextBlack}`}>Call customers with confidence</Typography>
                <Typography className={`${classes.leftPaneGreyText}`}>
                  {/* {moment().format('dddd, DD MMMM hh:mma')} */}
                  {' '}
                  <Chip
                    color="primary"
                    variant="outlined"
                    size="small"
                    label="trial"
                    className={`${classes.paddingAllSM} ${classes.paperButton}`}
                  />
                </Typography>
                <Typography className={classes.marginTopSM}><Button variant="outlined" color="primary">Read More</Button></Typography>
              </Grid>
            </Grid>
            <Divider className={classes.marginSM} />
          </Grid>
          <Grid item xs={12} className={classes.marginTopSM}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={3} md={3} lg={3}>
                <img src="/updates/Thumb-backup-2.png" alt="update 1" className={classes.updateImg} />
              </Grid>
              <Grid item xs={12} sm={9} md={9} lg={9}>
                <Typography className={`${classes.serviceSubTitle} ${classes.bold}`}>New feature added! See what your competition is doing</Typography>
                <Typography className={`${classes.marginTopSM} ${classes.serviceTextBlack}`}>You can now check out how many times each lead has been purchased</Typography>
                <Typography className={`${classes.leftPaneGreyText}`}>
                  {/* {moment().format('dddd, DD MMMM hh:mma')} */}
                  {' '}
                  <Chip
                    color="primary"
                    size="small"
                    label="feature"
                    className={`${classes.paddingAllSM} ${classes.paperButton}`}
                  />
                </Typography>
                <Typography className={classes.marginTopSM}><Button variant="outlined" color="primary">Read More</Button></Typography>
              </Grid>
            </Grid>
            <Divider className={classes.marginSM} />
          </Grid>
          <Grid item xs={12} className={classes.marginTopSM}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={3} md={3} lg={3}>
                <img src="/updates/remote-small-1.png" alt="update 1" className={classes.updateImg} />
              </Grid>
              <Grid item xs={12} sm={9} md={9} lg={9}>
                <Typography className={`${classes.serviceSubTitle} ${classes.bold}`}>Find more customers with online or remote leads</Typography>
                <Typography className={`${classes.marginTopSM} ${classes.serviceTextBlack}`}>Choose what kind of leads you want to receive and manage your lead preferences with one step</Typography>
                <Typography className={`${classes.leftPaneGreyText}`}>
                  {/* {moment().format('dddd, DD MMMM hh:mma')} */}
                  {' '}
                  <Chip
                    color="primary"
                    size="small"
                    label="feature"
                    className={`${classes.paddingAllSM} ${classes.paperButton}`}
                  />
                </Typography>
                <Typography className={classes.marginTopSM}><Button variant="outlined" color="primary">Read More</Button></Typography>
              </Grid>
            </Grid>
            <Divider className={classes.marginSM} />
          </Grid>
          <Grid item xs={12} className={classes.marginTopSM}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={3} md={3} lg={3}>
                <img src="/updates/welcome-small.png" alt="update 1" className={classes.updateImg} />
              </Grid>
              <Grid item xs={12} sm={9} md={9} lg={9}>
                <Typography className={`${classes.serviceSubTitle} ${classes.bold}`}>Coming soon…a sneak peek at what’s next on Bee Effort</Typography>
                <Typography className={`${classes.marginTopSM} ${classes.serviceTextBlack}`}>We caught up with our Chief Product Officer to see what new features you can expect to see on Bee Effort</Typography>
                <Typography className={`${classes.leftPaneGreyText}`}>
                  {/* {moment().format('dddd, DD MMMM hh:mma')} */}
                  {' '}
                  <Chip
                    color="primary"
                    size="small"
                    label="feature"
                    className={`${classes.paddingAllSM} ${classes.paperButton}`}
                  />
                </Typography>
                <Typography className={classes.marginTopSM}><Button variant="outlined" color="primary">Read More</Button></Typography>
              </Grid>
            </Grid>
            <Divider className={classes.marginSM} />
          </Grid>
        </Grid>
      </Container>
      {/* <ModalBody /> */}
    </div>
  );
}
