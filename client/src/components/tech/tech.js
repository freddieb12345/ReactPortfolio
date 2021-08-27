import React from 'react'
import { Grid } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faHtml5, faCss3Alt, faNode, faJs, faNpm, faBootstrap, faReact, faMdb, faStripe } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MaterialUILogo from '../../assets/materialUILogo.png'
import { Image } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

const Technologies = () => (
    <div>   
        <Header.Subheader style={{fontSize:"2vw"}}> Proficient Technologies </Header.Subheader>
        <Grid style={{ paddingTop: "50px" }}>
            <Grid.Row>
                <Grid.Column width={4}>
                    <IconButton aria-label="delete" size="small">
                        <a>HTML5</a>
                        <FontAwesomeIcon icon={faHtml5} style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>     
                    </IconButton>
                </Grid.Column>
                
                <Grid.Column width={4} >
                    <IconButton aria-label="delete" size="small">
                        <a>CSS</a>
                        <FontAwesomeIcon icon={faCss3Alt} style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>     
                    </IconButton>
                </Grid.Column>

                <Grid.Column width={4} >
                    <IconButton aria-label="delete" size="small">
                        <FontAwesomeIcon icon={faNode} style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>     
                    </IconButton>
                </Grid.Column>

                <Grid.Column width={4} >
                    <IconButton aria-label="delete" size="small">
                        <a>Javascript</a>
                        <FontAwesomeIcon icon={faJs} style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>     
                    </IconButton>
                </Grid.Column>

                <Grid.Column width={4} >
                    <IconButton aria-label="delete" size="small">
                        <FontAwesomeIcon icon={faNpm} style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>     
                    </IconButton>
                </Grid.Column>

                <Grid.Column width={4} >
                    <IconButton aria-label="delete" size="small" style={{ marginTop: "0.5vw" }}>
                        <a>Bootstrap</a>
                        <FontAwesomeIcon style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>     
                    </IconButton>
                </Grid.Column>

                <Grid.Column width={4} >
                    <IconButton aria-label="delete" size="small">
                        <a>React</a>
                        <FontAwesomeIcon icon={faReact} style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>     
                    </IconButton>
                </Grid.Column>

                <Grid.Column width={4} >
                    <IconButton aria-label="delete" size="small">
                        <a>MongoDB</a>
                        <FontAwesomeIcon icon={faMdb} style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>     
                    </IconButton>
                </Grid.Column>

                <Grid.Column width={4} >
                    <IconButton aria-label="delete" size="small">
                        <FontAwesomeIcon icon={faStripe} style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>     
                    </IconButton>
                </Grid.Column>

                <Grid.Column width={4} >
                    <IconButton aria-label="delete" size="small" style={{ marginTop: "0.5vw" }}>
                        <a>MaterialUI</a>
                        <FontAwesomeIcon  style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>  
                    </IconButton>
                </Grid.Column>

                <Grid.Column width={4} >
                    <IconButton aria-label="delete" size="small" style={{ marginTop: "0.5vw" }}>
                        <a>Heroku</a>
                        <FontAwesomeIcon  style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>  
                    </IconButton>
                </Grid.Column>

                <Grid.Column width={4} >
                    <IconButton aria-label="delete" size="small" style={{ marginTop: "0.5vw" }}>
                        <a>SemanticUI</a>
                        <FontAwesomeIcon  style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>  
                    </IconButton>
                </Grid.Column>

                <Grid.Column width={4} >
                    <IconButton aria-label="delete" size="small" style={{ marginTop: "0.5vw" }}>
                        <a>Bulma</a>
                        <FontAwesomeIcon  style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>  
                    </IconButton>
                </Grid.Column>

                <Grid.Column width={4} >
                    <IconButton aria-label="delete" size="small" style={{ marginTop: "0.5vw" }}>
                        <a>MySQL</a>
                        <FontAwesomeIcon  style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>  
                    </IconButton>
                </Grid.Column>

                <Grid.Column width={4} >
                    <IconButton aria-label="delete" size="small" style={{ marginTop: "0.5vw" }}>
                        <a>NoSQL</a>
                        <FontAwesomeIcon  style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>  
                    </IconButton>
                </Grid.Column>

                <Grid.Column width={4} >
                    <IconButton aria-label="delete" size="small" style={{ marginTop: "0.5vw" }}>
                        <a>Express</a>
                        <FontAwesomeIcon  style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>  
                    </IconButton>
                </Grid.Column>

                <Grid.Column width={16} >
                    <IconButton aria-label="delete" size="small" style={{ marginTop: "0.5vw" }}>
                        <a>Apollo</a>
                        <FontAwesomeIcon  style={{ margin: "0.5vw" }} className="fa-2x" /> <br/>  
                    </IconButton>
                </Grid.Column>

            </Grid.Row>
        </Grid>
    </div>
    

)

export default Technologies