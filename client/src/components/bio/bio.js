import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Divider } from 'semantic-ui-react'

const Bio = () => (
  <Grid style={{paddingTop:"50px", paddingBottom:"50px"}}>
    <Grid.Row>
      <Grid.Column width={5}>
        <Grid.Row style={{margin:"auto", paddingBottom:"6vw", paddingTop:"50px", textAlign:"left", width:"20vw", fontSize:"2vw"}}>
            <Header.Subheader style={{fontSize:"2vw"}}> Biography </Header.Subheader>   
            <a style={{fontWeight:"100", fontSize:"2vw"}}>
                - Aspiring full stack web developer looking for oportunites to strengthen my coding skills <br/>
                - Mechanical Engineering graduate <br/>
            </a>
        </Grid.Row>
        <Grid.Row style={{margin:"auto", paddingBottom:"100px", paddingTop:"6vw", textAlign:"left", width:"20vw", fontSize:"2vw"}}>
            <Header.Subheader> Services </Header.Subheader>   
            <a style={{fontWeight:"100"}}>
                - Full Stack Web Development <br/>
                - 3D CAD Modelling + Printing <br/>
            </a>
        </Grid.Row>
      </Grid.Column>

      <Grid.Column width={6} >
        <div style={{ width:"30vw", height:"50vw", border:"5px solid black", borderRadius:"50%", margin:"auto", paddingTop:"10px", minHeight:"300px", minWidth:"150px"}}></div>
      </Grid.Column>

        <Grid.Column width={5}>
            <Grid.Row style={{marginLeft:"5vw", paddingTop:"auto", textAlign:"center", width:"22vw", fontSize:"1.5vw"}}>
                <IconButton aria-label="delete" size="small" href="https://github.com/freddieb12345" target="_blank">
                    <FontAwesomeIcon icon={faGithub} style={{ margin: "1em" }} className="fa-2x" />    
                </IconButton>
            </Grid.Row>
            <Grid.Row style={{marginLeft:"5vw", paddingTop:"auto", textAlign:"center", width:"22vw", fontSize:"1.5vw"}}>
                <IconButton aria-label="delete" size="small" href="https://www.linkedin.com/in/freddiebrewin/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} style={{ margin: "1em" }} className="fa-2x" />    
                </IconButton>
            </Grid.Row>
            <Grid.Row style={{marginLeft:"5vw", paddingTop:"auto", textAlign:"center", width:"22vw", fontSize:"1.5vw"}}>
                <IconButton aria-label="delete" size="small" href="mailto:freddiebrewin@live.com">
                    <FontAwesomeIcon icon={faEnvelope} style={{ margin: "1em" }} className="fa-2x" />    
                </IconButton>
            </Grid.Row>    
      </Grid.Column>
    </Grid.Row>
  </Grid>
  
)

export default Bio