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

const Technologies = () => (
    <div>
        <Header.Subheader style={{ fontSize: "2vw", padding:"0.5em"  }}> Proficient Technologies </Header.Subheader>
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <Segment >
                    <IconButton aria-label="delete" size="small">
                            <div>
                                <Segment vertical>
                                    <a>HTML5</a>
                                </Segment>
                                <Segment vertical>
                                    <FontAwesomeIcon icon={faHtml5} style={{ margin: "0.5vw" }} className="fa-2x" /> <br />
                                </Segment>
                            </div>
                    </IconButton>
                   </Segment> 
                </Grid.Column>

                <Grid.Column>
                    <Segment>
                        <IconButton aria-label="delete" size="small">
                                <div>
                                    <Segment vertical>
                                        <a>CSS</a>
                                    </Segment>
                                    <Segment vertical>
                                        <FontAwesomeIcon icon={faCss3Alt} style={{ margin: "0.5vw" }} className="fa-2x" /> <br />
                                    </Segment>
                                </div>
                        </IconButton>
                    </Segment>
                </Grid.Column>

                <Grid.Column>
                    <Segment>
                        <IconButton aria-label="delete" size="small" href="https://nodejs.org/en/" target="_blank">
                                <div>
                                    <Segment vertical>
                                        <a>NodeJs</a>
                                    </Segment>
                                    <Segment vertical>
                                        <FontAwesomeIcon icon={faNode} style={{ margin: "0.5vw" }} className="fa-2x" /> <br />
                                    </Segment>
                                </div>
                        </IconButton>
                    </Segment>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <Segment>
                    <IconButton aria-label="delete" size="small" href="https://www.javascript.com/" target="_blank">
                            <div>
                                <Segment vertical>
                                    <a>Javascript</a>
                                </Segment>
                                <Segment vertical>
                                    <FontAwesomeIcon icon={faJs} style={{ margin: "0.5vw" }} className="fa-2x" /> <br />
                                </Segment>
                            </div>
                    </IconButton>
                    </Segment>
                </Grid.Column>

                <Grid.Column>
                    <Segment>
                    <IconButton aria-label="delete" size="small" href="https://www.npmjs.com/" target="_blank">
                            <div>
                                <Segment vertical>
                                    <a>npm</a>
                                </Segment>
                                <Segment vertical>
                                    <FontAwesomeIcon icon={faNpm} style={{ margin: "0.5vw" }} className="fa-2x" /> <br />
                                </Segment>
                            </div>
                    </IconButton>
                    </Segment>
                </Grid.Column>

                <Grid.Column>
                    <Segment>
                    <IconButton aria-label="delete" size="small" href="https://getbootstrap.com/" target="_blank">
                            <div>
                                <Segment vertical>
                                    <a>Bootstrap</a>
                                </Segment>
                                <Segment vertical>
                                    <FontAwesomeIcon  style={{ margin: "0.5vw" }} className="fa-2x" /> <br />
                                </Segment>
                            </div>
                    </IconButton>
                    </Segment>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <Segment>
                    <IconButton aria-label="delete" size="small" href="https://reactjs.org/" target="_blank">
                            <div>
                                <Segment vertical>
                                    <a>React</a>
                                </Segment>
                                <Segment vertical>
                                    <FontAwesomeIcon icon={faReact} style={{ margin: "0.5vw" }} className="fa-2x" /> <br />
                                </Segment>
                            </div>
                    </IconButton>
                    </Segment>
                </Grid.Column>

                <Grid.Column>
                    <Segment>
                    <IconButton aria-label="delete" size="small" href="https://www.mongodb.com/" target="_blank">
                            <div>
                                <Segment vertical>
                                    <a>MongoDB</a>
                                </Segment>
                                <Segment vertical>
                                    <FontAwesomeIcon icon={faMdb} style={{ margin: "0.5vw" }} className="fa-2x" /> <br />
                                </Segment>
                            </div>
                    </IconButton>
                    </Segment>
                </Grid.Column>

                <Grid.Column>
                    <Segment>
                    <IconButton aria-label="delete" size="small" href="https://stripe.com/gb" target="_blank">
                            <div>
                                <Segment vertical>
                                    <a>Stripe</a>
                                </Segment>
                                <Segment vertical>
                                    <FontAwesomeIcon icon={faStripe} style={{ margin: "0.5vw" }} className="fa-2x" /> <br />
                                </Segment>
                            </div>
                    </IconButton>
                    </Segment>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <Segment>
                    <IconButton aria-label="delete" size="small" href="https://material-ui.com/" target="_blank">
                            <div>
                                <Segment vertical>
                                    <a>MaterialUI</a>
                                </Segment>
                                <Segment vertical>
                                </Segment>
                            </div>
                    </IconButton>
                    </Segment>
                </Grid.Column>

                <Grid.Column>
                    <Segment>
                    <IconButton aria-label="delete" size="small" href="https://dashboard.heroku.com/" target="_blank">
                            <div>
                                <Segment vertical>
                                    <a>Heroku</a>
                                </Segment>
                                <Segment vertical>

                                </Segment>
                            </div>
                    </IconButton>
                    </Segment>
                </Grid.Column>

                <Grid.Column>
                    <Segment>
                    <IconButton aria-label="delete" size="small" href="https://react.semantic-ui.com/" target="_blank">
                            <div>
                                <Segment vertical>
                                    <a>SemanticUI</a>
                                </Segment>
                                <Segment vertical>
                                </Segment>
                            </div>
                    </IconButton>
                    </Segment>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <Segment>
                    <IconButton aria-label="delete" size="small" href="https://bulma.io/" target="_blank">
                            <div>
                                <Segment vertical>
                                    <a>Bulma</a>
                                </Segment>
                                <Segment vertical>
                                </Segment>
                            </div>
                    </IconButton>
                    </Segment>
                </Grid.Column>

                <Grid.Column>
                    <Segment>
                    <IconButton aria-label="delete" size="small" href="https://www.mysql.com/" target="_blank">
                            <div>
                                <Segment vertical>
                                    <a>MySQL</a>
                                </Segment>
                                <Segment vertical>
                                </Segment>
                            </div>
                    </IconButton>
                    </Segment>
                </Grid.Column>

                <Grid.Column>
                    <Segment>
                    <IconButton aria-label="delete" size="small" href="https://expressjs.com/" target="_blank">
                            <div>
                                <Segment vertical>
                                    <a>Express</a>
                                </Segment>
                                <Segment vertical>
                                </Segment>
                            </div>
                    </IconButton>
                    </Segment>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <Segment>
                    <IconButton aria-label="delete" size="small" href="https://graphql.org/" target="_blank">
                            <div>
                                <Segment vertical>
                                    <a>graphql</a>
                                </Segment>
                                <Segment vertical>

                                </Segment>
                            </div>
                    </IconButton>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>

    </div>


)

export default Technologies