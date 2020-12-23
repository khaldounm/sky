import React from 'react';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import MovieIcon from '@material-ui/icons/Movie';
import PublicIcon from '@material-ui/icons/Public';
import InfoIcon from '@material-ui/icons/Info';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  useTheme, Drawer, CssBaseline, AppBar, Toolbar, List, Link, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Badge,
} from '@material-ui/core';
import { useStyles } from '../styles/drawer';

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleThemeSwitcher = () => {
    let dynamicTheme = 'light';
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'light') {
        dynamicTheme = 'dark';
      } else if (localStorage.getItem('theme') === 'dark') {
        dynamicTheme = 'light';
      }
    } else {
      dynamicTheme = 'dark';
    }
    localStorage.setItem('theme', dynamicTheme);
    window.location.reload();
  };

  const activeTheme = () => {
    let dynamicTheme = 'light';
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'light') {
        dynamicTheme = 'dark';
      } else if (localStorage.getItem('theme') === 'dark') {
        dynamicTheme = 'light';
      }
    } else {
      dynamicTheme = 'dark';
    }
    return dynamicTheme === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />;
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/"><img src="/logo.png" className={classes.logo} alt="logo" /></Link>
          <section className={classes.rightToolbar}>
            <IconButton color="inherit" edge="end" onClick={handleThemeSwitcher} aria-label="theme-toggle">
              <Badge>
                {activeTheme()}
              </Badge>
            </IconButton>
          </section>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="Home">
            <ListItemIcon><PublicIcon /></ListItemIcon>
            <Link href="/" color="textPrimary" underline="none"><ListItemText primary="Home" /></Link>
          </ListItem>
          <ListItem button key="noMatch">
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <Link href="/any-other-page" color="textPrimary" underline="none"><ListItemText primary="404" /></Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="Ryan Reynolds">
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <Link href="/details/person/10859" color="textSecondary" underline="none"><ListItemText primary="Ryan Reynolds" /></Link>
          </ListItem>
          <ListItem button key="Peter Dinklage">
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <Link href="/details/person/22970" color="textSecondary" underline="none"><ListItemText primary="Peter Dinklage" /></Link>
          </ListItem>
          <ListItem button key="The Walking Dead">
            <ListItemIcon><MovieFilterIcon /></ListItemIcon>
            <Link href="/details/tv/1402" color="textSecondary" underline="none"><ListItemText primary="The Walking Dead" /></Link>
          </ListItem>
          <ListItem button key="Avengers: Endgame">
            <ListItemIcon><MovieIcon /></ListItemIcon>
            <Link href="/details/movie/299534" color="textSecondary" underline="none"><ListItemText primary="Avengers: Endgame" /></Link>
          </ListItem>
          <ListItem button key="The Mandalorian">
            <ListItemIcon><MovieFilterIcon /></ListItemIcon>
            <Link href="/details/tv/82856" color="textSecondary" underline="none"><ListItemText primary="The Mandalorian" /></Link>
          </ListItem>
          <ListItem button key="Wonder Woman">
            <ListItemIcon><MovieIcon /></ListItemIcon>
            <Link href="/details/movie/297762" color="textSecondary" underline="none"><ListItemText primary="Wonder Woman" /></Link>
          </ListItem>
          <ListItem button key="The Boys">
            <ListItemIcon><MovieFilterIcon /></ListItemIcon>
            <Link href="/details/tv/76479" color="textSecondary" underline="none"><ListItemText primary="The Boys" /></Link>
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
