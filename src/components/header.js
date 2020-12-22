import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import MovieIcon from '@material-ui/icons/Movie';
import PublicIcon from '@material-ui/icons/Public';
import InfoIcon from '@material-ui/icons/Info';
import Badge from '@material-ui/core/Badge';
import { useStyles } from '../styles/drawer';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


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
    let theme = 'light';  
    if(localStorage.getItem('theme')){
      if(localStorage.getItem('theme') === 'light'){
        theme = 'dark';
      } else if(localStorage.getItem('theme') === 'dark'){
        theme = 'light';
      } 
    } else {
      theme = 'dark';
    }
    localStorage.setItem('theme', theme);
    window.location.reload();  
  };

  const activeTheme = () => {
    let theme = 'light';  
    if(localStorage.getItem('theme')){
      if(localStorage.getItem('theme') === 'light'){
        theme = 'dark';
      } else if(localStorage.getItem('theme') === 'dark'){
        theme = 'light';
      } 
    } else {
      theme = 'dark';
    }
    return theme === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />;
  }

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
          <Link href={'/'}><img src="/logo.png" height={55} alt="logo" /></Link>
          <section className={classes.rightToolbar}>
            <IconButton color="inherit" edge="end" onClick={handleThemeSwitcher}>
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
          <ListItem button key={'Home'}>
            <ListItemIcon><PublicIcon /></ListItemIcon>
            <Link href="/" color={'textPrimary'} underline={'none'}><ListItemText primary={'Home'} /></Link>
          </ListItem>
          <ListItem button key={'noMatch'}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <Link href="/any-other-page" color={'textPrimary'} underline={'none'}><ListItemText primary={'404'} /></Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key={'Ryan Reynolds'}>
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <Link href="/details/person/10859" color={'textSecondary'} underline={'none'}><ListItemText primary={'Ryan Reynolds'} /></Link>
          </ListItem>
          <ListItem button key={'Peter Dinklage'}>
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <Link href="/details/person/22970" color={'textSecondary'} underline={'none'}><ListItemText primary={'Peter Dinklage'} /></Link>
          </ListItem>
          <ListItem button key={'The Walking Dead'}>
            <ListItemIcon><MovieFilterIcon /></ListItemIcon>
            <Link href="/details/tv/1402" color={'textSecondary'} underline={'none'}><ListItemText primary={'The Walking Dead'} /></Link>
          </ListItem>
          <ListItem button key={'Avengers: Endgame'}>
            <ListItemIcon><MovieIcon /></ListItemIcon>
            <Link href="/details/movie/299534" color={'textSecondary'} underline={'none'}><ListItemText primary={'Avengers: Endgame'} /></Link>
          </ListItem>
          <ListItem button key={'The Mandalorian'}>
            <ListItemIcon><MovieFilterIcon /></ListItemIcon>
            <Link href="/details/tv/82856" color={'textSecondary'} underline={'none'}><ListItemText primary={'The Mandalorian'} /></Link>
          </ListItem>
          <ListItem button key={'Wonder Woman'}>
            <ListItemIcon><MovieIcon /></ListItemIcon>
            <Link href="/details/movie/297762" color={'textSecondary'} underline={'none'}><ListItemText primary={'Wonder Woman'} /></Link>
          </ListItem>
          <ListItem button key={'The Boys'}>
            <ListItemIcon><MovieFilterIcon /></ListItemIcon>
            <Link href="/details/tv/76479" color={'textSecondary'} underline={'none'}><ListItemText primary={'The Boys'} /></Link>
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
