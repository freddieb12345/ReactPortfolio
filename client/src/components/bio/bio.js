import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Divider } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import { faGithub, faLinkedin, faHtml5, faCss3Alt, faNode, faJs, faNpm, faBootstrap, faReact, faMdb, faStripe } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/Logo.PNG'
import { Image } from 'semantic-ui-react'

const useStyles = makeStyles((theme) => ({
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

export default function Bio() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.sectionDesktop}>
        <Grid style={{ margin:"auto", paddingTop: "50px", paddingBottom: "50px" }}>
          <Grid.Row>
            <Grid.Column width={5}>
              <Grid.Row style={{ margin: "auto", paddingBottom: "6vw", paddingTop: "50px", textAlign: "left", width: "20vw", fontSize: "2vw" }}>
                <Header.Subheader style={{ fontSize: "2vw" }}> Biography </Header.Subheader>
                <a style={{ fontWeight: "100", fontSize: "2vw" }}>
                  - Aspiring full stack web developer looking for oportunites to strengthen my coding skills <br />
                  - Mechanical Engineering graduate <br />
                </a>
              </Grid.Row>
              <Grid.Row style={{ margin: "auto", paddingBottom: "100px", paddingTop: "6vw", textAlign: "left", width: "20vw", fontSize: "2vw" }}>
                <Header.Subheader> Services </Header.Subheader>
                <a style={{ fontWeight: "100" }}>
                  - Full Stack Web Development <br />
                  - 3D CAD Modelling + Printing <br />
                </a>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column width={6}>
              <Grid.Row style={{height:"7vw"}}></Grid.Row>
              <Grid.Row>
                <Image src= {Logo} style={{  width: "30vw", height: "45vw", border: "5px solid black", borderRadius: "50%", margin: "auto", minHeight: "300px", minWidth: "150px" }}/>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column width={5} style={{margin:"auto"}}>
              <Header.Subheader style={{ fontSize: "2vw" }}> Favored Technologies </Header.Subheader>
              <Grid.Row style={{ paddingTop: "auto", textAlign: "center", width: "22vw", fontSize: "1.5vw" }}>
                    <IconButton aria-label="delete" size="small" href="https://www.mongodb.com/" target="_blank">
                        <a>MongoDB</a>
                        <FontAwesomeIcon icon={faMdb} style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>     
                    </IconButton>
              </Grid.Row>
              <Grid.Row style={{ paddingTop: "auto", textAlign: "center", width: "22vw", fontSize: "1.5vw" }}>
                    <IconButton aria-label="delete" size="small" style={{ marginTop: "0.5vw" }} href="https://expressjs.com/" target="_blank">
                        <a>Express</a>
                        <FontAwesomeIcon  style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>  
                    </IconButton>
              </Grid.Row>
              <Grid.Row style={{ paddingTop: "auto", textAlign: "center", width: "22vw", fontSize: "1.5vw" }}>
                    <IconButton aria-label="delete" size="small" href="https://nodejs.org/en/" target="_blank">
                        <FontAwesomeIcon icon={faNode} style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>     
                    </IconButton>
              </Grid.Row>
              <Grid.Row style={{ paddingTop: "auto", textAlign: "center", width: "22vw", fontSize: "1.5vw" }}>
                    <IconButton aria-label="delete" size="small" href="https://reactjs.org/" target="_blank">
                        <a>React</a>
                        <FontAwesomeIcon icon={faReact} style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>     
                    </IconButton>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className={classes.sectionMobile}>
        <Grid style={{ margin:"auto", paddingTop: "50px", paddingBottom: "50px", width: "100%" }}>
          <Grid.Row>
            <Grid.Column width={5}>
              <Grid.Row style={{ margin: "auto", paddingBottom: "6vw", paddingTop: "50px", textAlign: "left", width: "20vw", fontSize: "2vw" }}>
                <Header.Subheader style={{ fontSize: "2vw" }}> Biography </Header.Subheader>
                <a style={{ fontWeight: "100", fontSize: "2vw" }}>
                  - Aspiring full stack web developer looking for oportunites to strengthen my coding skills <br />
                  - Mechanical Engineering graduate <br />
                </a>
              </Grid.Row>
              <Grid.Row style={{ margin: "auto", paddingBottom: "100px", paddingTop: "6vw", textAlign: "left", width: "20vw", fontSize: "2vw" }}>
                <Header.Subheader> Services </Header.Subheader>
                <a style={{ fontWeight: "100" }}>
                  - Full Stack Web Development <br />
                  - 3D CAD Modelling + Printing <br />
                </a>
              </Grid.Row>
            </Grid.Column>


            <Grid.Column width={6} style={{marginLeft:"auto", marginRight:"auto"}}>
            <Grid.Row style={{height:"10vw"}}></Grid.Row>
            <Grid.Row>
                <Image src= {Logo} style={{  width: "30vw", height: "50vw", border: "5px solid black", borderRadius: "50%", margin: "auto", minHeight: "300px", minWidth: "150px" }}/>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column width={5} style={{  margin:"auto", paddingTop: "50px", paddingBottom: "50px", display:"grid", alignItems:"center" }}>
              <Header.Subheader style={{ fontSize: "2vw" }}> Favored Technologies </Header.Subheader>
              <Grid.Row style={{ margin: "auto", width: "22vw", fontSize: "1.5vw" }}>
                    <IconButton aria-label="delete" size="small" href="https://www.mongodb.com/" target="_blank">
                        <FontAwesomeIcon icon={faMdb} className="fa-2x" /> <br/>     
                    </IconButton>
              </Grid.Row>
              <Grid.Row style={{ margin: "auto", textAlign: "center", width: "22vw", fontSize: "1.5vw" }}>
                    <IconButton aria-label="delete" size="small" style={{ marginTop: "0.5vw" }} href="https://expressjs.com/" target="_blank">
                        <a>Express</a>
                        <FontAwesomeIcon  className="fa-2x" /> <br/>  
                    </IconButton>
              </Grid.Row>
              <Grid.Row style={{ margin: "auto", textAlign: "center", width: "22vw", fontSize: "1.5vw" }}>
                    <IconButton aria-label="delete" size="small" href="https://nodejs.org/en/" target="_blank">
                        <FontAwesomeIcon icon={faNode} className="fa-2x" /> <br/>     
                    </IconButton>
              </Grid.Row>
              <Grid.Row style={{ margin: "auto", textAlign: "center", width: "22vw", fontSize: "1.5vw" }}>
                    <IconButton aria-label="delete" size="small" href="https://reactjs.org/" target="_blank">
                        <a>React</a>
                        <FontAwesomeIcon icon={faReact} style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>     
                    </IconButton>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
