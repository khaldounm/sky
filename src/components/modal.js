import React from 'react';
import {
  Modal, Backdrop, Fade,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from '../styles/results';

export default function TrailerModal(data) {
  const classes = useStyles();

  const { ytbKey, openState, onChange } = data;

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    onChange(false);
  };

  React.useEffect(() => setOpen(openState), [openState]);

  return (
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
          <iframe className={classes.iframe} title="trailer" src={`https://www.youtube.com/embed/${ytbKey}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </Fade>
    </Modal>
  );
}
