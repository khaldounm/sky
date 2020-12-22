import React from 'react';
import { Container, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Grid } from '@material-ui/core';
import { useStyles } from '../styles/results';
import api from '../utils';

export default function Related(data) {
  const { details, type } = data;
  const relatedData = type === 'person' ? 'combined_credits' : 'credits';
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={`${classes.marginBottom} ${classes.marginBottom}`}>

        <Grid container spacing={4}>
          {details[relatedData].cast.map((result) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={result.id}>
              <Card raised className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={api.getImage(result.profile_path || result.poster_path || 'https://straffordchiropractic.com/wp-content/uploads/2017/04/poster-placeholder.png', 500)}
                    title={result.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body2" component={"span"}>
                      {result.title || result.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" variant="outlined" href={result.media_type ? `/details/${result.media_type}/${result.id}` : `/details/person/${result.id}` }>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}