import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faHtml5, faCss3Alt, faNode, faJs, faNpm, faBootstrap, faReact, faMdb, faStripe } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MaterialUILogo from '../../assets/materialUILogo.png'
import { Image } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import BudgetTrackerLogo from '../../assets/budgetTrackerLogo.PNG'
import FitnessTrackerLogo from '../../assets/fitnessTracker.PNG'
import OutgrownLogo from '../../assets/outgrown-logo.png'

const Projects = () => (
    <div>
        <Header.Subheader style={{ fontSize: "2vw", padding:"0.5em" }}> Recent Projects </Header.Subheader>
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column style ={{margin:"auto"}}>
                    <Image src={OutgrownLogo} href="https://outgrown-app.herokuapp.com/" target="_blank"/>
                </Grid.Column>

                <Grid.Column style ={{margin:"auto"}}>
                    <Image src={BudgetTrackerLogo} href="https://stark-woodland-99025.herokuapp.com/?id=6123ccd49fa2ee0016fed818" target="_blank"/>
                </Grid.Column>

                <Grid.Column style ={{margin:"auto"}}>
                    <Image src={FitnessTrackerLogo} href="https://frozen-tundra-37761.herokuapp.com/" target="_blank"/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>


)

export default Projects