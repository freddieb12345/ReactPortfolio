import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton';
import NavLogo from '../../assets/NavLogo.PNG'
import { Image } from 'semantic-ui-react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
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
                    <Image src={NavLogo} size="tiny" href="/" />
                  <div className={classes.grow} />
                  <IconButton aria-label="delete" className={classes.margin} size="small" href="https://github.com/freddieb12345" target="_blank">
                    <FontAwesomeIcon icon={faGithub} style={{ margin: "1em" }} className="fa-2x" />    
                  </IconButton>
                  <IconButton aria-label="delete" className={classes.margin} size="small" href="https://www.linkedin.com/in/freddiebrewin/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} style={{ margin: "1em" }} className="fa-2x" />    
                  </IconButton>
                  <IconButton aria-label="delete" size="small" href="mailto:freddiebrewin@live.com">
                    <FontAwesomeIcon icon={faEnvelope} style={{ margin: "1em" }} className="fa-2x" />
                  </IconButton>
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
                  <IconButton aria-label="delete" className={classes.margin} size="small">
                    <FontAwesomeIcon icon={faGithub} si style={{ margin: "1vw" }} className="fa-2x" />    
                  </IconButton>
                  <IconButton aria-label="delete" className={classes.margin} size="small">
                    <FontAwesomeIcon icon={faLinkedin} style={{ margin: "1vw" }} className="fa-2x" href="https://www.linkedin.com/in/freddiebrewin/"/>    
                  </IconButton>
                  <IconButton aria-label="delete" size="small" href="mailto:freddiebrewin@live.com">
                    <FontAwesomeIcon icon={faEnvelope} style={{ margin: "1vw" }} className="fa-2x" />
                  </IconButton>
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