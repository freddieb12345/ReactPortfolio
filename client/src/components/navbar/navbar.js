import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function NavBar(props) {
  const classes = useStyles();

  return (
    <div >
      <React.Fragment>
        <ElevationScroll {...props}>
          <div className={classes.grow} >
          <div className={classes.sectionDesktop}>
            <AppBar color='white'>
                <Toolbar style={{ paddingLeft: "5%", paddingRight: "10%", fontSize: "0.5em" }}>
                  <Button color="inherit" href="/" style={{fontSize: "150%"}} >Technologies</Button>
                  <Button color="inherit" href='/' style={{fontSize: "150%"}}>Experience</Button>
                  <Button color="inherit" href='/' style={{fontSize: "150%"}}>Latest Projects</Button>
                  <div className={classes.grow} />
                  <FontAwesomeIcon icon={faGithub} style={{ margin: "1em" }} className="fa-2x" />
                  <FontAwesomeIcon icon={faLinkedin} style={{ margin: "1em" }} className="fa-2x" />
                </Toolbar>
              </AppBar>
          </div>
          <div className={classes.sectionMobile}>
            <AppBar color='white'>
                <Toolbar style={{ paddingLeft: "5%", paddingRight: "10%", fontSize: "0.5em" }}>
                  <Button color="inherit" href="/" style={{fontSize: "1.5vw", width: "auto"}}  >Technologies</Button>
                  <Button color="inherit" href='/' style={{fontSize: "1.5vw", width: "auto"}}>Experience</Button>
                  <Button color="inherit" href='/' style={{fontSize: "1.5vw", width: "auto"}}>Latest Projects</Button>
                  <div className={classes.grow} />
                  <FontAwesomeIcon icon={faGithub} style={{ margin: "1em" }} className="fa-2x" />
                  <FontAwesomeIcon icon={faLinkedin} style={{ margin: "1em" }} className="fa-2x" />
                </Toolbar>
              </AppBar>
          </div>
              
          </div>
        </ElevationScroll>
        <Toolbar />
      </React.Fragment>
    </div>
  );
}