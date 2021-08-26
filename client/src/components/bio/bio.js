import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Bio = () => (
  <Grid style={{paddingTop:"50px"}}>
    <Grid.Row>
      <Grid.Column width={6}>
        <Grid.Row style={{margin:"auto", paddingBottom:"6vw", paddingTop:"50px", textAlign:"left", width:"20vw", fontSize:"1.5vw"}}>
            <Header.Subheader> Biography </Header.Subheader>   
            <a style={{fontWeight:"100"}}>
                - Aspiring full stack web developer looking for oportunites to strengthen my coding skills <br/>
                - Mechanical Engineering graduate <br/>
            </a>
        </Grid.Row>
        <Grid.Row style={{margin:"auto", paddingBottom:"100px", paddingTop:"6vw", textAlign:"left", width:"20vw", fontSize:"1.5vw"}}>
            <Header.Subheader> Services </Header.Subheader>   
            <a style={{fontWeight:"100"}}>
                - Full Stack Web Development <br/>
                - 3D CAD Modelling + Printing <br/>
            </a>
        </Grid.Row>
      </Grid.Column>

      <Grid.Column width={4}>
        <div style={{ width:"30vw", height:"50vw", border:"5px solid black", borderRadius:"50%", margin:"auto", paddingTop:"10px"}}></div>
      </Grid.Column>

      <Grid.Column width={6}>
      <Grid.Row style={{margin:"auto", paddingBottom:"100px", paddingTop:"10vw", textAlign:"left", width:"22vw", fontSize:"1.5vw"}}>
        <Header.Subheader> Contact Information </Header.Subheader>
{/*            <a style={{fontWeight:"100"}}>07979709573<br/> </a>           
            <a style={{fontWeight:"100"}} href="mailto:freddiebrewin@live.com" >freddiebrewin@live.com</a>
            <a style={{fontWeight:"100"}} href="https://github.com/freddieb12345" target="_blank">Github</a>  
            <a style={{fontWeight:"100"}} href="https://www.linkedin.com/in/freddiebrewin/" target="_blank">LinkedIn</a> */}
            <IconButton aria-label="delete" size="small" href="https://github.com/freddieb12345" target="_blank">
                Github
                <FontAwesomeIcon icon={faGithub} style={{ margin: "1em" }} className="fa-2x" />    
            </IconButton>
            <IconButton aria-label="delete" size="small" href="https://www.linkedin.com/in/freddiebrewin/" target="_blank">
                LinkedIn
                <FontAwesomeIcon icon={faLinkedin} style={{ margin: "1em" }} className="fa-2x" />    
            </IconButton>
            <IconButton aria-label="delete" size="small" href="mailto:freddiebrewin@live.com">
                Email
                <FontAwesomeIcon icon={faEnvelope} style={{ margin: "1em" }} className="fa-2x" />    
            </IconButton>
            <IconButton aria-label="delete" size="small" href="" target="_blank">
                07979709573
                <FontAwesomeIcon icon={faMobile} style={{ margin: "1em" }} className="fa-2x" />    
            </IconButton>
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Bio