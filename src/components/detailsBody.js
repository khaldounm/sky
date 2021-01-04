/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Container, Grid, Typography, Divider, Button, Modal, Backdrop, Fade,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Poster from './poster';
import { useStyles } from '../styles/results';

export default function DetailsBody(data) {
  const classes = useStyles();

  const {
    details, type, posters, trailers,
  } = data;

  const currencyFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.marginBottom}>
        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.marginTopSM}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Poster details={details} images={posters} />
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <Typography className={`${classes.serviceTitle} ${classes.bold}`}>
                  {details.title || details.name}
                  {' '}
                  (
                  {(details.release_date || details.first_air_date || details.birthday || '-').split('-')[0]}
                  )
                </Typography>
                <Typography className={`${classes.bold} ${classes.marginTopMD} ${classes.serviceSubTitle}`}>{type !== 'person' ? 'Genres' : 'Born'}</Typography>
                <Typography className={`${classes.leftPaneGreyText}`}>{details.genres ? details.genres.map((elem) => elem.name).join(', ') : details.place_of_birth || '-'}</Typography>
                {type !== 'person' ? (
                  <>
                    <Typography className={`${classes.bold} ${classes.marginTopMD} ${classes.serviceSubTitle}`}>{type === 'movie' ? 'Runtime' : 'Episode Runtime'}</Typography>
                    <Typography className={`${classes.leftPaneGreyText}`}>
                      {type === 'movie' ? details.runtime || '-' : details.episode_run_time[0] || '-'}
                      {' '}
                      minutes
                    </Typography>
                  </>
                ) : ''}
                <Typography className={`${classes.bold} ${classes.marginTopMD} ${classes.serviceSubTitle}`}>{type !== 'person' ? 'Overview' : 'Biography'}</Typography>
                <Typography className={`${classes.leftPaneGreyText}`} component="span">
                  {(details.overview || details.biography || '-').split('\n').map((i) => <Typography key={Math.random()} paragraph className={`${classes.leftPaneGreyText}`} variant="body1">{i}</Typography>)}
                </Typography>
                {type !== 'person' && trailers.length > 0 ? (
                  <>
                    <Typography className={`${classes.bold} ${classes.marginTopMD} ${classes.serviceSubTitle}`}>Status</Typography>
                    <Typography className={`${classes.leftPaneGreyText}`}>{details.status || '-'}</Typography>
                    <Typography className={`${classes.bold} ${classes.marginTopMD} ${classes.serviceSubTitle}`}>Allocated Budget</Typography>
                    <Typography className={`${classes.leftPaneGreyText}`}>
                      {details.budget ? currencyFormat.format(details.budget) : '-'}
                    </Typography>
                    <Typography className={`${classes.bold} ${classes.marginTopMD} ${classes.serviceSubTitle}`}>Produced by</Typography>
                    <Typography className={`${classes.leftPaneGreyText}`}>{details.production_companies.map((elem) => elem.name).join(', ') || '-'}</Typography>
                    <Typography className={`${classes.bold} ${classes.marginTopMD} ${classes.serviceSubTitle}`}><Button className={classes.redOrange} onClick={handleOpen}>View trailer</Button></Typography>
                  </>
                ) : ''}
              </Grid>
            </Grid>
            <Divider className={classes.marginTop} />
          </Grid>
        </Grid>
      </Container>
      {type !== 'person' && trailers.length > 0 ? (
        <Modal
          aria-labelledby="Trailer"
          aria-describedby="Trailer-Description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 250,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div className={classes.close}><CloseIcon onClick={handleClose} /></div>
              <iframe className={classes.iframe} title="trailer" src={`https://www.youtube.com/embed/${trailers[0].key}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </Fade>
        </Modal>
      ) : ''}
    </div>
  );
}
